import { test, expect } from "@playwright/test";

test("Capture console errors", async ({ page }) => {
  const errors = [];

  // Listen for console errors
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      errors.push(msg.text());
    }
  });

  // Listen for uncaught exceptions
  page.on("pageerror", (exception) => {
    errors.push(exception.message);
  });

  // Navigate to the application
  await page.goto("http://localhost:5173");

  // Perform some actions or wait for the page to load
  await page.waitForTimeout(5000); // Adjust timeout as needed

  // Assert no errors were captured
  expect(errors).toEqual([]);

  // Optionally log errors to a file
  if (errors.length > 0) {
    console.log("Errors captured:", errors);
  }
});
