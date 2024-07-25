import { test, expect } from "@playwright/test";
import { PhilatelyCatalogPage } from "../support/pages/philately.catalog.page";
import { PhilatelyPage } from "../support/pages/philately.page";
import { philatelySearchData } from "../support/data/search.data";
import { api } from "../support/data/api.data";

let philatelyCatalogPage: PhilatelyCatalogPage;
let philatelyPage: PhilatelyPage;

test.describe("Philately search", () => {
  test.beforeEach(async ({ page }) => {
    philatelyCatalogPage = new PhilatelyCatalogPage(page);
    philatelyPage = new PhilatelyPage(page);
    await philatelyCatalogPage.goto();
  });

  test("Search by valid stamp name and clearing serch reslts", async ({
    page,
  }) => {
    let searhResultCount;
    await philatelyPage.philatelySearchField.fill(
      philatelySearchData.validStampNames.validStampName
    );
    await philatelyPage.philatelySearchBtn.click();

    await expect(philatelyCatalogPage.searchResultCount).toHaveText(
      philatelySearchData.validStampNames.numberOfElementsFound
    );

    await expect(philatelyCatalogPage.productPreviewTitle).toHaveText(
      philatelySearchData.validStampNames.validStampName
    );

    await philatelyPage.clearSearchBtn.click();

    await page.waitForResponse(
      (response) =>
        response.url() === api.getAllCatalogItems &&
        response.status() === 200 &&
        response.request().method() === "GET"
    );
    searhResultCount = await philatelyCatalogPage.stampPreviewCard.count();

    console.log(searhResultCount);

    await expect(searhResultCount).toBeGreaterThan(1);
  });

  test("Search by non existing item", async ({ page }) => {
    await philatelyPage.philatelySearchField.fill(
      philatelySearchData.nonValidStamp.nonValidStampName
    );
    await philatelyPage.philatelySearchBtn.click();
    await expect(philatelyCatalogPage.productsFound).toHaveText(
      philatelySearchData.philatelySearchMessages.stampNotFoundMsg
    );
  });

  test("Search by valid stamp catalog number", async ({ page }) => {
    await philatelyPage.philatelySearchField.fill(
      philatelySearchData.validStampCatalogNumbers.validStampCatalogNumber
    );
    await philatelyPage.philatelySearchField.press("Enter");

    await expect(philatelyCatalogPage.searchResultCount).toHaveText(
      philatelySearchData.validStampCatalogNumbers.numberOfElementsFound
    );

    await expect(philatelyCatalogPage.productPreviewTitle).toHaveText(
      philatelySearchData.validStampNames.validStampName
    );
  });
});
