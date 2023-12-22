import FormPage from '../pages/form.page.js'
import { allureStep } from '../../../helper/allureHelper.js'

describe('auth form', () => {
    it('should deny access with wrong creds', async () => {
        await FormPage.open()
        await FormPage.username.setValue('foo')
        await FormPage.password.setValue('bar')
        await FormPage.submit()

        await FormPage.flash.waitForDisplayed()

        //correct ver - Your username is invalid! , I made this error for demo how working screenshot feature and steps marked with "RED" color
        await allureStep('CheckFlashError', async () => 
            await expect(FormPage.flash).toHaveTextContaining('Your username is ERROR!')
        )
    })

    it('should allow access with correct creds', async () => {
        await FormPage.open()
        await FormPage.username.setValue('tomsmith')
        await FormPage.password.setValue('SuperSecretPassword!')
        await FormPage.submitSecondIncorrectButton()

        await FormPage.flash.waitForDisplayed()
        await expect(FormPage.flash).toHaveTextContaining('You logged into a secure area!')
    })
})
