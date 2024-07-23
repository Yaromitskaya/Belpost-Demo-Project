import { Locator, Page, expect } from "@playwright/test";
import { PhilatelyPage } from "./philately.page";
import { BasePage } from "./base.page";

export class PhilatelyCatalogPage extends BasePage {
  readonly page: Page;
  readonly philatelyCatalogPageURL: string;
  readonly philatelySearchField: Locator;
  readonly searchResultCount: Locator;
  readonly stampPreviewCard: Locator;
  readonly productsFound: Locator;
  readonly productPreviewTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.philatelyCatalogPageURL = "/philately/catalog";
    this.philatelySearchField = page.locator("#philately-search");
    this.searchResultCount = page.locator(
      ".products__section .font-weight-medium"
    );
    this.stampPreviewCard = page.locator(".product-preview");
    this.productsFound = page.locator(".products");
    this.productPreviewTitle = page.locator(".product-preview__title");
  }

  //Methods

  async goto() {
    await this.page.goto(this.philatelyCatalogPageURL, {
      waitUntil: "domcontentloaded",
    });
  }
}
