import { test, expect } from "@playwright/test";
import { MainPage } from "../support/pages/main.page";
import { languages } from "../support/data/languages.data";

test("Change languages", async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto("./");

  await mainPage.chooseLanguageMenu.selectOption(
    languages.langs.belorussianLanguage
  );
  await expect(mainPage.mainPageHeader).toHaveText(
    languages.assertMsgs.mainPageHeaderTextBy
  );

  await mainPage.chooseLanguageMenu.selectOption(
    languages.langs.englishLanguage
  );
  await expect(mainPage.mainPageHeader).toHaveText(
    languages.assertMsgs.mainPageHeaderTextEn
  );
  await mainPage.chooseLanguageMenu.selectOption(
    languages.langs.russianLanguage
  );
  await expect(mainPage.mainPageHeader).toHaveText(
    languages.assertMsgs.mainPageHeaderTextRu
  );
});
