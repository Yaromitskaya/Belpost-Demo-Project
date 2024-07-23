import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class SubscriptionPage extends BasePage {
  readonly page: Page;
  readonly subscriptionInfoFile: Locator;
  readonly subscriptionPageURL: string;

  constructor(page: Page) {
    super(page);
    this.page = page;
    //Locators
    this.subscriptionInfoFile = page.getByText(
      "ИНСТРУКЦИЯ О ПОРЯДКЕ ПРИЕМА ПОДПИСКИ НА ПЕЧАТНЫЕ СРЕДСТВА МАССОВОЙ ИНФОРМАЦИИ И ИХ ДОСТАВКИ"
    );
    this.subscriptionPageURL = "/podpiska";
  }

  //Methods
  async goto() {
    await this.page.goto(this.subscriptionPageURL, {
      waitUntil: "domcontentloaded",
    });
  }
}
