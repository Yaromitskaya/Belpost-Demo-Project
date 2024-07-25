import { test, expect } from "@playwright/test";
import path from "path";
import { SubscriptionPage } from "../support/pages/subscription.page";
import { filesToDownload } from "../support/data/download.data";

test.only("Downloading a file to file system", async ({ page }) => {
  const subscriptionPage = new SubscriptionPage(page);

  await subscriptionPage.goto();

  await page.waitForTimeout(2000);
  const downloadPromise = page.waitForEvent("download");

  await subscriptionPage.subscriptionInfoFile.click();
  const download = await downloadPromise;

  await download.saveAs(
    path.join(filesToDownload.path2download, download.suggestedFilename())
  );

  expect(download.suggestedFilename()).toBe(filesToDownload.downloadedFileName);
});
