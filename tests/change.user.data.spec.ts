import { test, expect } from "@playwright/test";
import { UserProfilePage } from "../support/pages/user.profile.page";
import { LoginPage } from "../support/pages/login.page";
import { loginData, userData } from "../support/data/user.data";

test("Change user's second name", async ({ page }) => {
  const userProfilePage = new UserProfilePage(page);
  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.validLoginData.userValidLogin,
    loginData.validLoginData.userValidPassword
  );

  await userProfilePage.personalAccoutButton.click();
  await userProfilePage.cahangeNameBtn.click();
  await userProfilePage.secondNameFeld.fill("");
  await userProfilePage.secondNameFeld.fill(userData.secondNameToUpdate);
  await userProfilePage.changeNameSubmitBtn.click();
  await expect(userProfilePage.secondNameFieldRead).toContainText(
    `Отчество: ${userData.secondNameToUpdate}`
  );

  await page.waitForTimeout(1000);
  await userProfilePage.cahangeNameBtn.click();
  await userProfilePage.secondNameFeld.fill("");
  await userProfilePage.secondNameFeld.fill(userData.secondName);
  await userProfilePage.changeNameSubmitBtn.click();
  await expect(userProfilePage.secondNameFieldRead).toContainText(
    `Отчество: ${userData.secondName}`
  );
});
