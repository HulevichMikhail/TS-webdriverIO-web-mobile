import Page from './page.js'
import { allureStep} from '../../../helper/allureHelper.js'

class FormPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitButton () { return $('#login button[type=submit]') }
    get submitButton2 () { return $('#login button[type=submit2]') }
    get flash () { return $('#flash') }

    /**
     * define or overwrite page methods
     */
    open () {
        return allureStep('Open Login page', () => 
            super.open('login')
        )
    }

    async submit () {
        return allureStep('Click on submit button', async () => 
            await this.submitButton.click()
        )
    }

    async submitSecondIncorrectButton () {
        return allureStep('Click on submit button', async () => 
            await this.submitButton2.click()
        )
    }

}

export default new FormPage()
