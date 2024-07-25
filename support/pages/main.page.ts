import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class MainPage extends BasePage {
  readonly page: Page;
  readonly shipmentTrackNumberField: Locator;
  readonly trackNumberSearchButton: Locator;
  readonly nonValidSearchMsg: Locator;
  readonly chooseLanguageMenu: Locator;
  readonly mainPageHeader: Locator;
  readonly visualVersionBtn: Locator;
  readonly visualVersionSettingsBtn: Locator;
  readonly greenOnBrownColorThemeBtn: Locator;
  readonly navyOnBlueColorThemeBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.shipmentTrackNumberField = page.locator("#track_number");
    this.trackNumberSearchButton = page.locator("[aria-label='Подтвердить']");
    this.nonValidSearchMsg = page.locator(".error");
    this.mainPageHeader = page.locator(".header-panel__desc");
    this.chooseLanguageMenu = page.locator(
      ".header__container .header-user .lang-select"
    );

    this.visualVersionBtn = page.getByText("Версия для слабовидящих");
    this.visualVersionSettingsBtn = page.getByText(" Настройки ");
    this.greenOnBrownColorThemeBtn = page.getByTitle("GREEN_ON_BROWM");
    this.navyOnBlueColorThemeBtn = page.getByTitle("NAVY_ON_BLUE");
  }
}
