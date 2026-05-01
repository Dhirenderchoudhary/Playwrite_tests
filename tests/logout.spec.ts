import { test, expect } from "@playwright/test";

test.describe("Test Case 4 : Logout User", () => {
  test("login the existing user then logout", async ({ page }) => {
    const uniqueId = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const userName = "Dhirender";
    const userEmail = `dhirender_${uniqueId}@test.com`;
    const password = "Test@12345";

    //Register account
    await page.goto("/");
    await expect(
      page.locator('img[alt="Website for automation practice"]'),
    ).toBeVisible();
    await page.click('a[href="/login"]');
    await expect(page.getByText("New User Signup!")).toBeVisible();
    await page.locator('input[data-qa="signup-name"]').fill(userName);
    await page.locator('input[data-qa="signup-email"]').fill(userEmail);
    await page.locator('button[data-qa="signup-button"]').click();
    await expect(page.getByText(/Enter Account Information/i)).toBeVisible();
    await page.locator("#id_gender1").check();
    await page.locator('input[data-qa="password"]').fill(password);
    await page.locator('select[data-qa="days"]').selectOption("2");
    await page.locator('select[data-qa="months"]').selectOption("9");
    await page.locator('select[data-qa="years"]').selectOption("2000");
    await page.locator("#newsletter").check();
    await page.locator("#optin").check();
    await page.locator('input[data-qa="first_name"]').fill("Dhirender");
    await page.locator('input[data-qa="last_name"]').fill("User");
    await page.locator('input[data-qa="company"]').fill("TestCorp");
    await page.locator('input[data-qa="address"]').fill("123 Test Lane");
    await page.locator('input[data-qa="address2"]').fill("WB Street");
    await page
      .locator('select[data-qa="country"]')
      .selectOption("United States");
    await page.locator('input[data-qa="state"]').fill("California");
    await page.locator('input[data-qa="city"]').fill("Los Angeles");
    await page.locator('input[data-qa="zipcode"]').fill("40001");
    await page.locator('input[data-qa="mobile_number"]').fill("1234567890");
    await page.locator('button[data-qa="create-account"]').click();
    await expect(page.getByText("Account Created!")).toBeVisible();
    await page.locator('a[data-qa="continue-button"]').click();
    await expect(page.getByText(/Logged in as/i)).toContainText(userName);
    await page.click('a[href="/logout"]');

    //login with existing user
    await page.goto("/login");
    await expect(page.getByText("Login to your account")).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill(userEmail);
    await page.locator('input[data-qa="login-password"]').fill(password);
    await page.locator('button[data-qa="login-button"]').click();

    await expect(page.getByText(/Logged in as/i)).toContainText(userName);

    //logout

    await page.click('a[href="/logout"]');
    await expect(page).toHaveURL(/\/login/);
    await expect(page.getByText("Login to your account")).toBeVisible();

    await page.locator('input[data-qa="login-email"]').fill(userEmail);
    await page.locator('input[data-qa="login-password"]').fill(password);
    await page.locator('button[data-qa="login-button"]').click();
    await expect(page.getByText(/Logged in as/i)).toContainText(userName);
    await page.click('a[href="/delete_account"]');
    await expect(page.getByText("Account Deleted!")).toBeVisible();
  });
});
