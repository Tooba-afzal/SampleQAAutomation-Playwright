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
        await toolsQAHomePage.clickdesktop();
        await toolsQAHomePage.clickdocuments();
        await toolsQAHomePage.clickdownloads();

        await toolsQAHomePage.clicksubmenuRadioButton();
        await toolsQAHomePage.clicksiteFeedback();

        await toolsQAHomePage.clickmenuWebTables();
        await toolsQAHomePage.clickaddButton();
        await toolsQAHomePage.enterFrstName('tooba')
        await toolsQAHomePage.enterLastName('afzal')
        await toolsQAHomePage.clickSubmitButton();
        await toolsQAHomePage.clickcloseButton();

        await toolsQAHomePage.clickmenuButtons();
        await toolsQAHomePage.clicksubmenuRightclick();

        await toolsQAHomePage.clickmenuLinks();
        await toolsQAHomePage.clicksubmenuHome();
        
        await toolsQAHomePage.clickmenuBrokenLinks();
        await toolsQAHomePage.clicksubmenuValidLinks();


    });
});
