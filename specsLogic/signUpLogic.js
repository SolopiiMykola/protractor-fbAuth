import { SignUpPage } from '../pages/signUp';

import {browser} from "protractor";

import { newSignUpInfo } from '../dataMock/fbUser';
import Base from "../utils/Base";

export class SignUpLogic extends Base{
    constructor() {
        super();
        this.page = new SignUpPage();
    }

    signUpUser() {
        browser.waitForAngularEnabled(false);
        this.page.url;
        this.page.firsNameInput.sendKeys(newSignUpInfo.firstName);
        this.page.lastNameInput.sendKeys(newSignUpInfo.lastName);
        this.page.registrationEmailInput.sendKeys(newSignUpInfo.email);
        this.page.registrationEmailConfirmationInput.sendKeys(newSignUpInfo.email);
        this.page.registrationPasswordInput.sendKeys(newSignUpInfo.password);
        this.page.fillBirthDayValue(newSignUpInfo.birthDay);
        this.page.fillBirthMonth(newSignUpInfo.birthMonth);
        this.page.fillBirthYear(newSignUpInfo.birthYear);
        this.page.selectGender(newSignUpInfo.gender.male);
        this.page.submitRegistrationButton.click();
        this.waitUntilElementDisplayed(this.page.confirmationHeaderTitle);
        expect(this.page.confirmationHeaderTitle.isDisplayed()).toBe(true);
        expect(this.page.registrationCodeInput.isDisplayed()).toBe(true);
    }
}
