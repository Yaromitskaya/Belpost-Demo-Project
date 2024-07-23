import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class FeedbackPage extends BasePage {
  readonly page: Page;
  readonly feedbackPageURL: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators

    this.feedbackPageURL = "/Pomoshch0";
  }
}
