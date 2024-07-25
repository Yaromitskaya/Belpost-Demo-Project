import { test, expect } from "@playwright/test";
import { loginData, userData } from "../support/data/user.data";
import { typeOfLogin } from "../support/data/user.data";
import { api } from "../support/data/api.data";

test("Login via API", async ({ request }) => {
  const loginRequest = await request.post(api.loginAPI, {
    data: {
      login: loginData.validLoginData.userValidLogin,
      password: loginData.validLoginData.userValidPassword,
      type: typeOfLogin.individualType,
    },
  });
  const loginResponce = await loginRequest.json();
  await expect(loginResponce.phone).toBe(
    loginData.validLoginData.userValidLogin.slice(1)
  );
});
