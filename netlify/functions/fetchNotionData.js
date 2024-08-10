/* eslint-env node */
import { Client, LogLevel } from "@notionhq/client";

export async function handler(event, context) {
  console.log("Environment variables:", {
    NOTION_API_KEY: process.env.NOTION_API_KEY ? "Set" : "Not set",
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  });

  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
    logLevel: LogLevel.DEBUG,
  });

  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
      throw new Error("NOTION_DATABASE_ID is not set");
    }

    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        select: {
          equals: "LIVE",
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.results),
    };
  } catch (error) {
    console.error("Notion API Error:", error);
    return {
      statusCode: error.status || 500,
      body: JSON.stringify({
        error: error.message,
        details: error.body,
        stack: error.stack,
      }),
    };
  }
}
