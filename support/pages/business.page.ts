import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class BusinessPage extends BasePage {
  readonly page: Page;  
  readonly businessPageURL: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators
    
    this.businessPageURL = "/biznesu";
  }
}
