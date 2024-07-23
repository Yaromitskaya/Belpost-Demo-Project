import { test, expect } from "@playwright/test";
import { MainPage } from "../support/pages/main.page";
import { languages } from "../support/data/languages.data";

test("Change languages", async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto("./");

  await mainPage.chooseLanguageMenu.selectOption(languages.belorussianLanguage);
  await expect(mainPage.mainPageHeader).toHaveText(
    mainPage.mainPageHeaderTextBy
  );

  await mainPage.chooseLanguageMenu.selectOption(languages.englishLanguage);
  await expect(mainPage.mainPageHeader).toHaveText(
    mainPage.mainPageHeaderTextEn
  );
  await mainPage.chooseLanguageMenu.selectOption(languages.russianLanguage);
  await expect(mainPage.mainPageHeader).toHaveText(
    mainPage.mainPageHeaderTextRu
  );
});


//.header__container .header__item--secondary