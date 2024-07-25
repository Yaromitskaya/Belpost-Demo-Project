import { test, expect } from "@playwright/test";
import { MainPage } from "../support/pages/main.page";
import { shipmentSearchMessages } from "../support/data/search.data";
import { ShipmentSearchPage } from "../support/pages/shipment.search.page";
import { LoginPage } from "../support/pages/login.page";
import { loginData, userData } from "../support/data/user.data";

let loginPage: LoginPage;

test.describe("Shipment track validation", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login(
      loginData.validLoginData.userValidLogin,
      loginData.validLoginData.userValidPassword
    );
  });

  test("Search by valid shipment track number", async ({ page }) => {
    const mainPage = new MainPage(page);
    const shipmentSearchPage = new ShipmentSearchPage(page);
    const validTrackNumber = "LA153517218BY";

    await mainPage.shipmentTrackNumberField.fill(validTrackNumber);
    await mainPage.trackNumberSearchButton.click();
    await shipmentSearchPage.trackItemTitle.click();
    await expect(shipmentSearchPage.searchResultAlert).toHaveText(
      shipmentSearchMessages.packageNotFoundMsg
    );
  });

  test("Search by non valid shipment track number", async ({ page }) => {
    const mainPage = new MainPage(page);
    const nonValidTrackNumber = "LA555713521";

    await mainPage.shipmentTrackNumberField.fill(nonValidTrackNumber);
    await mainPage.trackNumberSearchButton.click();

    await expect(mainPage.nonValidSearchMsg).toHaveText(
      shipmentSearchMessages.nonValidTrackNumberMsg
    );
  });

  test("Search by empty field", async ({ page }) => {
    const mainPage = new MainPage(page);

    await mainPage.trackNumberSearchButton.click();

    await expect(mainPage.nonValidSearchMsg).toHaveText(
      shipmentSearchMessages.emptySearchFieldMsg
    );
  });
});
