describe('Android app from lab', () => {
    it('check buttons on main page', async () => {
        const openMenu = await $('~open menu');
        await openMenu.click();
        const menuItemCatalog = await $('~menu item catalog');
        await expect(menuItemCatalog).toBeDisplayed();
    });
    it('DEMO for show how screenshots displayed in allure report. check buttons on main page', async () => {
        const openMenu = await $('~open menu');
        await openMenu.click();
        const menuItemCatalog = await $('~menu item pg'); //correct - ~menu item catalog
        await expect(menuItemCatalog).toBeDisplayed();
    });
});