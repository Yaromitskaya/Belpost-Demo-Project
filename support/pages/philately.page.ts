import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class PhilatelyPage extends BasePage {
  readonly page: Page;
  readonly philatelyPageURL: string;
  readonly philatelySearchField: Locator;
  readonly philatelySearchBtn: Locator;
  readonly clearSearchBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators

    this.philatelyPageURL = "/philately";
    this.philatelySearchField = page.locator("#philately-search");
    this.philatelySearchBtn = page.locator(".postfix");
    this.clearSearchBtn = page.getByText("Сброс");
  }
}
