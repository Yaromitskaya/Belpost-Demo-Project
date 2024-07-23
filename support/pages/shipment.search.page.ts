import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class ShipmentSearchPage extends BasePage {
  readonly page: Page;
  readonly trackItemTitle: Locator;
  readonly searchResultAlert: Locator; 
  

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.trackItemTitle = page.locator(".track-item__title");
    this.searchResultAlert = page.locator(".alert-message");  
    
  }

}