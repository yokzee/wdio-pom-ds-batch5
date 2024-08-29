import LoginPage from "../pageobjects/login.page";

describe('Demo Test', ()=>{
    it ('Login', async() =>{
        await LoginPage.open()
        await LoginPage.login("standard_user","secret_sauce")
    });

});