import { test, expect } from "@playwright/test";

test.describe("Image Rendering Tests", () => {
  test("should render all images without errors", async ({ page }) => {
    // Navigate to the homepage
    await page.goto("/");

    // Select all images on the page
    const images = await page.locator("img");

    // Ensure each image is visible and has a valid src attribute
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      const src = await img.getAttribute("src");
      expect(src).not.toBeNull();
      expect(src).not.toBe("");
    }
  });
});
