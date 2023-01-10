import { test, expect } from '@playwright/test';
import { homePage } from '../pageobjects/homepage.po';

test.describe('Contact Info Verification Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
    test('My Final Test', async ({ page }) => {
        const toolsQAHomePage = new homePage(page);
        await toolsQAHomePage.clickMenuElements();

        await toolsQAHomePage.clickSubMenuTextBox();
        await toolsQAHomePage.enterName('Mustafa');

        await toolsQAHomePage.enterEmail('Mustafa@test.com');
        await toolsQAHomePage.enterAddress("Township")

        await toolsQAHomePage.clickSubmit();
        await toolsQAHomePage.clickMenuCheckBox();

        await toolsQAHomePage.clickExpandMenu();

        await page.locator('label').filter({ hasText: 'Desktop' }).locator('svg').nth(1).click();

        await page.locator('label').filter({ hasText: 'Documents' }).locator('svg').nth(1).click();

        await page.getByText('Radio Button').click();

        await page.getByText('Yes').click();

        await page.getByRole('paragraph').getByText('Yes').click();
    });
});
