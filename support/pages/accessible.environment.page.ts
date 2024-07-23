import { expect, Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class AccessibleEnvironmentPage extends BasePage {
  readonly page: Page;
  readonly accessibleEnvironmentPageURL: string;
  readonly accessibleEnvironmentTitle: string;

  constructor(page: Page) {
    super(page);
    this.page = page;

    //Locators

    this.accessibleEnvironmentPageURL = "/services/elektronnyyeobr0";
    this.accessibleEnvironmentTitle = "Доступная среда в почтовой связи";
  }
}
