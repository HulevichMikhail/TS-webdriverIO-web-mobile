import DynamicPage from '../pages/dynamic.page.js'
import {expect} from 'chai'

describe('dynamic loading', function () {
    it('should be an button on the page', async () => {
        await DynamicPage.open()
        let isDynamicTextLoading = await (await DynamicPage.loadedPage).isDisplayed()
        expect(isDynamicTextLoading).to.equal(false);

        await DynamicPage.btnStart.click()
        await DynamicPage.loadedPage.waitForExist()
        isDynamicTextLoading = await (await DynamicPage.loadedPage).isDisplayed()
        expect(isDynamicTextLoading).to.equal(true);
    })
})
