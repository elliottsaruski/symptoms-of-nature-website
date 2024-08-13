/* eslint-env node */
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

let cache = {
  data: null,
  lastFetched: null,
};

function isCacheValid() {
  if (!cache.data || !cache.lastFetched) {
    return false;
  }
  const now = new Date();
  const cacheAge = now - cache.lastFetched;
  const oneHour = 60 * 60 * 1000; // in milliseconds
  return cacheAge < oneHour;
}

export async function handler(event) {
  const forceRefresh =
    event.queryStringParameters &&
    event.queryStringParameters.refresh === "true";

  try {
    if (isCacheValid() && !forceRefresh) {
      console.log("Returning cached data");
      return {
        statusCode: 200,
        body: JSON.stringify(cache.data),
        headers: {
          "Cache-Control": "max-age=3600",
          "X-Data-Source": "cache",
        },
      };
    }

    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set");
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        status: {
          equals: "LIVE",
        },
      },
      sorts: [
        {
          property: "Date Created / Posted",
          direction: "descending",
        },
      ],
    });

    // Update cache
    cache.data = response.results;
    cache.lastFetched = new Date();

    console.log("Fetched fresh data from Notion API");

    return {
      statusCode: 200,
      body: JSON.stringify(response.results),
      headers: {
        "Cache-Control": "max-age=3600",
        "X-Data-Source": "api",
      },
    };
  } catch (error) {
    console.error("Error:", error);

    // If there's an error but we have cached data, return the cached data
    if (cache.data) {
      console.log("Returning stale cached data due to error");
      return {
        statusCode: 200,
        body: JSON.stringify(cache.data),
        headers: {
          "Cache-Control": "max-age=600", // Set a shorter max-age for stale data
          "X-Data-Source": "stale-cache",
        },
      };
    }

    // If we don't have cached data, return the error
    return {
      statusCode: error.status || 500,
      body: JSON.stringify({
        error: error.message,
        details: error.body,
      }),
    };
  }
}
