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

    constructor(page: Page) {
        this.page = page;
        this.dropdownElements = page.getByRole('heading', { name: 'Elements' });
        this.txtBxName = page.getByPlaceholder('Full Name');
        this.submenuTextBx = page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.txtBxAddress = page.getByPlaceholder('Current Address');
        this.btnSubmit = page.getByRole('button', { name: 'Submit' });
        this.txtBxEmail = page.locator('#userEmail');
    }

    async clickMenuElements() {
        await this.dropdownElements.click();
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
}
