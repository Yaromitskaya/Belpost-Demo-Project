import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class CompanyInfoPage extends BasePage {
  readonly page: Page;
  readonly companyInfoPageURL: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators

    this.companyInfoPageURL = "/okompanii";
  }
}
