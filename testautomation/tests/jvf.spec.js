// ===============================
// Helper: Slow scroll inside inner container
// ===============================
async function slowScrollContainer(page, containerLocator) {
  const handle = await containerLocator.elementHandle();
  if (!handle) return;

  await page.evaluate(async (el) => {
    await new Promise((resolve) => {
      let totalScrolled = 0;
      const distance = 150;

      const timer = setInterval(() => {
        el.scrollBy(0, distance);
        totalScrolled += distance;

        if (totalScrolled >= el.scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 300); // slow scroll
    });
  }, handle);
}

const { test, expect } = require('@playwright/test');

test("JVF | Baseline → IEP Assessment | Question UI Validation", async ({ page }) => {

  // ======================================================
  // STEP 1: Login
  // ======================================================
  await page.goto("https://projectdisha.org/#/pages/login");
  await page.waitForTimeout(10000);

  await page.locator("mat-select").click();
  await page.locator("mat-option >> text=Teacher").click();

  await page.getByLabel("Enter User Name").fill("DOLLY.SINGH@APSSAGAR");
  await page.getByLabel("Enter Password").fill("zwzke@15");

  await page.locator("button:has-text('Login')").click();

  // Verify dashboard
  await expect(page.locator("text=Teacher Dashboard"))
    .toBeVisible({ timeout: 30000 });

  // ======================================================
  // STEP 2: Open Baseline from Dashboard
  // ======================================================
  await page.waitForSelector("button:has-text('Baseline')", { timeout: 30000 });

  // Scroll page to bring Baseline into view
  await page.mouse.wheel(0, 1200);

  await page.locator("button:has-text('Baseline')").first().click();

  // Verify IEP Assessment page
  await expect(page.locator("text=IEP Assessment"))
    .toBeVisible({ timeout: 30000 });

  // ======================================================
  // STEP 3: IEP Assessment – Section & Question Validation
  // ======================================================
  await page.waitForSelector("mat-expansion-panel", { timeout: 30000 });

  const panels = page.locator("mat-expansion-panel");
  const panelCount = await panels.count();

  console.log(`\nTotal IEP Panels Found: ${panelCount}\n`);

  for (let i = 0; i < panelCount; i++) {

    const panel = panels.nth(i);
    const header = panel.locator("mat-expansion-panel-header").first();

    // Section / Sub-section title
    const sectionTitle = await header
      .locator("mat-panel-title")
      .first()
      .innerText();

    console.log(`\nSECTION: ${sectionTitle}`);

    // Open section (force used due to Angular overlays)
    await header.scrollIntoViewIfNeeded();
    await header.click({ force: true });

    // Allow lazy loading to start
    await page.waitForTimeout(1000);

    // ==================================================
    // INNER SCROLL (IMPORTANT – matches manual behavior)
    // ==================================================
    const scrollContainer = panel.locator(
      "div[style*='overflow'], .cdk-virtual-scroll-viewport"
    ).first();

    await slowScrollContainer(page, scrollContainer);
    await page.waitForTimeout(1000);

    // ==================================================
    // Capture ONLY question text (first column)
    // ==================================================
    const questions = panel.locator(
      "tr td:first-child p, tr td:first-child mat-label"
    );

    const questionCount = await questions.count();
    console.log(`Actual Questions Loaded: ${questionCount}`);

    if (questionCount === 0) {
      console.log("❌ No questions loaded – possible UI / lazy-load issue");
    }

    for (let q = 0; q < questionCount; q++) {
      const questionText = (await questions.nth(q).innerText()).trim();

      if (!questionText) {
        console.log(`  ❌ Empty question label`);
      } else {
        console.log(`  Q${q + 1}: ${questionText}`);
      }
    }

    console.log("--------------------------------------------------");
  }
});
