/* eslint-env node */
import { Client, LogLevel } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
});

export async function handler() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

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
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
