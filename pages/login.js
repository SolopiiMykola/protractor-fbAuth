import Base from '../utils/Base';
import {browser, element} from "protractor";
import config from "../configs/app";

export class LoginPage extends Base {
    get url() { return browser.get(config.baseUrl, 3000); }
    get emailInput() { return element(by.name('email')); }
    get passwordInput() { return element(by.name('pass')); }
    get loginButton() { return element(by.id('loginbutton')); }
}

