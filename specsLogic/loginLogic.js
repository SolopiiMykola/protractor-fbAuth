import { LoginPage } from '../pages/login';
import { ProfilePage } from '../pages/profile';
import Base from "../utils/Base";

import {browser} from "protractor";

import { loginInfo } from '../dataMock/fbUser';

export class LoginLogic extends Base {
    constructor() {
        super();
        this.page = new LoginPage();
        this.profilePage = new ProfilePage();
    }

    loginUser() {
        browser.waitForAngularEnabled(false);
        this.page.url;
        this.page.emailInput.sendKeys(loginInfo.email);
        this.page.passwordInput.sendKeys(loginInfo.password);
        this.page.loginButton.click();
        this.waitUntilElementDisplayed(this.profilePage.profileName);
        expect(this.profilePage.profileName.getText()).toEqual(loginInfo.profileName);
    }
}
