import { test, expect } from "@playwright/test";

test("navigate to venue details", async ({ page }) => {
  await page.goto("http://localhost:5500");

  await page.waitForSelector("#venue-container > a:nth-child(1)");
  await page.click("#venue-container > a:nth-child(1)");

  await expect(page.locator("h1")).toContainText("Venue details");
});
