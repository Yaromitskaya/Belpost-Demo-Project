import { test, expect } from "@playwright/test";
import { MainPage } from "../support/pages/main.page";

test.only("Change color theme of the visual page", async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto("./");

  await mainPage.visualVersionBtn.click();
  await mainPage.visualVersionSettingsBtn.click();
  await mainPage.navyOnBlueColorThemeBtn.click();

  await expect(page).toHaveScreenshot();
});
