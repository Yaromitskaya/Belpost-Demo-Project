import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class PrivatePersonPage extends BasePage {
  readonly page: Page;
  readonly privatePersonHeader: Locator;
  readonly privatePersonURL: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators
    this.privatePersonHeader = page.locator(".page-header__title");
    this.privatePersonURL = "/services";
  }
}
