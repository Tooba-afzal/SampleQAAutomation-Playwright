import { Locator, Page } from '@playwright/test';

export class homePage {
    readonly url: string;
    readonly page: Page;
    readonly dropdownElements: Locator;
    readonly txtBxEmail: Locator;
    readonly submenuTextBx: Locator;
    readonly txtBxName: Locator;
    readonly txtBxAddress: Locator;
    readonly btnSubmit: Locator;
    readonly menuCheckBox: Locator;
    readonly expandButton: Locator;
    readonly desktopButton: Locator;
    readonly documentsButton: Locator;
    readonly downloadsButton: Locator;
    readonly submenuRadioButton: Locator;
    readonly siteFeedback: Locator;
    readonly menuWebTables: Locator;
    readonly addButton: Locator;
    readonly tableFrstName: Locator;
    readonly tableLastName: Locator;
    readonly submitButton: Locator;
    readonly closeButton: Locator;
    readonly menuButtons: Locator;
    readonly submenuRightclick: Locator;
    readonly menuLinks: Locator;
    readonly submenuHome: Locator;
    readonly chooseCloseButton: Locator;
    readonly menuBrokenLinks: Locator;
    readonly submenuValidLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdownElements = page.getByRole('heading', { name: 'Elements' });
        this.txtBxName = page.getByPlaceholder('Full Name');
        this.submenuTextBx = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.txtBxAddress = page.getByPlaceholder('Current Address');
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
        this.txtBxEmail = page.locator('#userEmail');
        this.menuCheckBox = page.getByText('Check Box');
        this.expandButton = page.getByRole('button', { name: 'Expand all' });
        this.desktopButton = page.locator('label').filter({ hasText: 'Desktop' }).locator('svg').first();
        this.documentsButton = page.locator('label').filter({ hasText: 'Documents' }).locator('svg').first();
        this.downloadsButton = page.locator('label').filter({ hasText: 'Downloads' }).locator('svg').first();
        this.submenuRadioButton = page.getByText('Radio Button');
        this.siteFeedback = page.getByText('Impressive');
        this.menuWebTables = page.getByRole('listitem').filter({ hasText: 'Web Tables' });
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.tableFrstName = page.getByPlaceholder('First Name');
        this.tableLastName = page.getByPlaceholder('Last Name');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.closeButton = page.getByRole('button', { name: 'Close' })
        this.menuButtons = page.getByRole('listitem').filter({ hasText: 'Buttons' });
        this.submenuRightclick = page.getByRole('button', { name: 'Right Click Me' });
        this.menuLinks = page.getByRole('list').locator('#item-5');
        this.submenuHome = page.locator('#simpleLink');
        this.chooseCloseButton = page.getByRole('button', { name: 'Close' });
        this.menuBrokenLinks = page.getByText('Broken Links - Images');
        this.submenuValidLinks = page.getByRole('link', { name: 'Click Here for Valid Link' })
    }

    async clickMenuElements() {
        await this.dropdownElements.click();
    }

    async clickExpandMenu() {
        await this.expandButton.click();
    }

    async clickMenuCheckBox() {
        await this.menuCheckBox.click();
    }

    async clickSubMenuTextBox() {
        await this.submenuTextBx.click();
    }

    async enterName(name: string) {
        await this.txtBxName.click();
        await this.txtBxName.fill(name);
    }

    async enterEmail(email: string) {
        await this.txtBxEmail.click();
        await this.txtBxEmail.fill(email);
    }

    async enterAddress(address: string) {
        await this.txtBxAddress.click();
        await this.txtBxAddress.fill(address);
    }

    async clickSubmit() {
        await this.btnSubmit.click();
    }


    async clickdesktop() {
        await this.desktopButton.click();
    }

    async clickdocuments() {
        await this.documentsButton.click();
    }

    async clickdownloads() {
        await this.downloadsButton.click();

    }


    async clicksubmenuRadioButton() {
        await this.submenuRadioButton.click();
    }
    async clicksiteFeedback() {
        await this.siteFeedback.click();
    }


    async clickmenuWebTables() {
        await this.menuWebTables.click();
    }
    async clickaddButton() {
        await this.addButton.click();

    }
    async enterFrstName(name: string) {
        await this.tableFrstName.click();
        await this.tableFrstName.fill(name);

    }
    async enterLastName(name: string) {
        await this.tableLastName.click();
        await this.tableLastName.fill(name);
    }
    async clickSubmitButton() {
        await this.submitButton.click();
    }
    async clickcloseButton() {
        await this.closeButton.click();
    }

    async clickmenuButtons() {
        await this.menuButtons.click();
    }
    async clicksubmenuRightclick() {
        await this.submenuRightclick.click();
    }

    async clickmenuLinks() {
        await this.menuLinks.click();
    }
    async clicksubmenuHome() {
        await this.page.getByRole('list').locator('#item-5').getByText('Links').click();
        const page1Promise = this.page.waitForEvent('popup');
        await this.page.locator('#simpleLink').click();
        const page1 = await page1Promise;
        await page1.close();
    }
    async clickchooseCloseButton() {
        await this.closeButton.click();
    }

    async clickmenuBrokenLinks() {
        await this.menuBrokenLinks.click();
    }
    async clicksubmenuValidLinks() {
        await this.submenuValidLinks.click();
    }





}
