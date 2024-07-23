import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly page: Page;
  readonly naturalPersonTab: Locator;
  readonly loginInputField: Locator;
  readonly passwordInputField: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    //Locators
    this.naturalPersonTab = page.getByText("Физическое лицо");
    this.loginInputField = page.locator("#phone");
    this.passwordInputField = page.locator("#password-login");
    this.loginButton = page.locator(".loading_button--content");
    this.loginErrorMessage = page.getByText("Неверные учётные данные");
  }

  //Methods
  async goto() {
    await this.page.goto("/?auth=signin&type=individual", {
      waitUntil: "domcontentloaded",
    });
  }
  async loginButtonClick() {
    await this.loginButton.click();
  }
  async login(userLogin: string, userPassword: string) {
    await this.goto();
    await this.naturalPersonTab.click();
    await this.loginInputField.fill(userLogin);
    await this.passwordInputField.fill(userPassword);
    await this.loginButton.click();
  }
}
