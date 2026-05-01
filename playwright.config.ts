import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */

  /* Retry on CI only */

  /* Opt out of parallel tests on CI. */

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  // timeout: Maximum time (in ms) a SINGLE TEST can run before it's killed.
  // 60 seconds is generous — most tests finish in 5-15 seconds.
  // Increase this if your tests involve slow page loads or complex flows.
  timeout: 80000,

  // retries: How many times to retry a failed test before marking it as failed.
  // 0 = no retries (fail immediately). Set to 1 or 2 for flaky tests.
  retries: 0,
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",

    // baseURL: The root URL for your tests.
    // When you write page.goto('/'), it becomes 'https://automationexercise.com/'
    // When you write page.goto('/login'), it becomes 'https://automationexercise.com/login'
    baseURL: "https://automationexercise.com",

    // headless: Whether to run the browser without a visible window.
    // true  = invisible (faster, good for CI/CD pipelines)
    // false = visible (useful for debugging, you can watch the test run)
    headless: true,

    // screenshot: Automatically take a screenshot when a test fails.
    // 'only-on-failure' = captures screenshot only if the test fails
    // 'on' = captures for every test | 'off' = never captures
    screenshot: "only-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
