import { test, expect } from "@playwright/test";
import { BasePage } from "../support/pages/base.page";
import { tabs } from "../support/data/tabs.data";
import { BusinessPage } from "../support/pages/business.page";
import { PrivatePersonPage } from "../support/pages/private.person.page";
import { PhilatelyPage } from "../support/pages/philately.page";
import { SubscriptionPage } from "../support/pages/subscription.page";
import { FeedbackPage } from "../support/pages/feedbach.page";
import { CompanyInfoPage } from "../support/pages/company.info.page";
import { AccessibleEnvironmentPage } from "../support/pages/accessible.environment.page";

let basePage: BasePage;

test.describe("Clicking tabs on the main page", () => {
  test.beforeEach(async ({ page }) => {
    basePage = new BasePage(page);
    await page.goto("./");
    await basePage.header.waitFor({ timeout: 20000 });
  });

  test("Tab 'Бизнесу'", async ({ page }) => {
    const businessPage = new BusinessPage(page);

    await basePage.getTabByText(tabs.basePageTabs.businessTab).click();

    await expect(page).toHaveURL(businessPage.businessPageURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.businessTab
    );
  });

  test("Tab 'Частным лицам'", async ({ page }) => {
    const privatePersonPage = new PrivatePersonPage(page);

    await basePage.getTabByText(tabs.basePageTabs.privatePersonTab).click();

    await expect(page).toHaveURL(privatePersonPage.privatePersonURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.privatePersonTab
    );
  });

  test("Tab 'Филателия'", async ({ page }) => {
    const philatelyPage = new PhilatelyPage(page);

    await basePage.getTabByText(tabs.basePageTabs.philatelyTab).click();

    await expect(page).toHaveURL(philatelyPage.philatelyPageURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.philatelyTab
    );
  });

  test("Tab 'Подписка'", async ({ page }) => {
    const subscriptionPage = new SubscriptionPage(page);

    await basePage.getTabByText(tabs.basePageTabs.subscriptionTab).click();

    await expect(page).toHaveURL(subscriptionPage.subscriptionPageURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.subscriptionTab
    );
  });

  test("Tab 'Обратная связь'", async ({ page }) => {
    const feedbackPage = new FeedbackPage(page);

    await basePage.getTabByText(tabs.basePageTabs.feedbackTab).click();

    await expect(page).toHaveURL(feedbackPage.feedbackPageURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.feedbackTab
    );
  });

  test("Tab 'О компании'", async ({ page }) => {
    const companyInfoPage = new CompanyInfoPage(page);

    await basePage.getTabByText(tabs.basePageTabs.companyTab).click();

    await expect(page).toHaveURL(companyInfoPage.companyInfoPageURL);

    await expect(basePage.pageTitle).toContainText(
      tabs.basePageTabs.companyTab
    );
  });

  test("Tab 'Доступная среда в почтовой связи'", async ({ page }) => {
    const accessibleEnvironmentPage = new AccessibleEnvironmentPage(page);

    await basePage
      .getTabByText(tabs.basePageTabs.accessibleEnvironmentTab)
      .click();

    await expect(page).toHaveURL(
      accessibleEnvironmentPage.accessibleEnvironmentPageURL
    );

    await expect(basePage.pageTitle).toContainText(
      accessibleEnvironmentPage.accessibleEnvironmentTitle
    );
  });
});
