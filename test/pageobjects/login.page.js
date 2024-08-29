import { $ } from '@wdio/globals'
import Page from "./page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get usernameTextbox () {
        return $("#user-name")
    }

    get passwordTextbox () {
        return $("#password")
    }

    get loginBtn () {
        return $('button[type="submit"]')
    }

    async inputUsername(username){
        await this.usernameTextbox.setValue(username)
    }

    async inputPassword(password){
        await this.passwordTextbox.setValue(password)
    }
    
    async loginProcess(){
       await this.loginBtn.click()
    }
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */


    async login (username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.loginProcess()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open("login");
    }
}

export default new LoginPage();
