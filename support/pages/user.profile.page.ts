import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class UserProfilePage extends BasePage {
  readonly page: Page;
  readonly cahangeNameBtn: Locator;
  readonly secondNameFeld: Locator;
  readonly changeNameSubmitBtn: Locator;
  readonly secondNameFieldRead: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    //Locators
    this.cahangeNameBtn = page.getByText("Изменить ФИО");
    this.secondNameFeld = page.locator("#second_name");
    this.changeNameSubmitBtn = page.locator(".modal-footer .button");
    this.secondNameFieldRead = page
      .locator(".dashboard__content .list-column li")
      .first()
      .locator("p:nth-child(3)");
  }

  //Methods
}
