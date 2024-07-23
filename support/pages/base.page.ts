import { expect, Page, Locator } from "@playwright/test";
export class BasePage {
  readonly page: Page;
  readonly personalAccoutButton: Locator;
  readonly header: Locator;
  readonly pageTitle: Locator

  constructor(page: Page) {
    this.page = page;

    //Locators
    this.personalAccoutButton = page.locator(
      ".header-user__item .user-button__text"
    );
    this.header = page.locator("app-header-menu");
    this.pageTitle = page.locator(".page-header__title");
  }
  //Methods

  getTabByText(text: string): Locator {
    return this.header.getByText(text);
  } 
}
