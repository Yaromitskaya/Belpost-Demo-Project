import { test, expect } from "@playwright/test";
import { loginData, userData } from "../support/data/user.data";
import { LoginPage } from "../support/pages/login.page";

test("Valid login via UI", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.validLoginData.userValidLogin,
    loginData.validLoginData.userValidPassword
  );
  await expect(loginPage.personalAccoutButton).toContainText(
    loginData.validLoginData.userValidLogin.slice(1)
  );
});

test("Login via UI with non valid password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.validLoginData.userValidLogin,
    loginData.nonValidLoginData.userNonValidPassword
  );
  await expect(loginPage.loginErrorMessage).toBeVisible();
});
