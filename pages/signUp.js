import Base from '../utils/Base';
import {browser, element} from "protractor";
import config from "../configs/app";

export class SignUpPage extends Base {
    get url() { return browser.get(config.baseUrl, 3000); }

    get firsNameInput() { return element(by.name('firstname')); }
    get lastNameInput() { return element(by.name('lastname')); }
    get registrationEmailInput() { return element(by.name('reg_email__')); }
    get registrationEmailConfirmationInput() { return element(by.name('reg_email_confirmation__')); }
    get registrationPasswordInput() { return element(by.name('reg_passwd__')); }
    get submitRegistrationButton() { return element(by.name('websubmit')); }
    get confirmationHeaderTitle() { return element(by.css('h2.uiHeaderTitle')); }
    get registrationCodeInput() { return element(by.name('code')); }

    get birthdayValue() {
        return {
            birthdayDay: {
                select: day => element(by.css(`select#day option[value="${day}"]`)),
            },
            birthdayMonth: {
                select: month => element(by.css(`select#month option[value="${month}"]`)),
            },
            birthdayYear: {
                select: year => element(by.css(`select#year option[value="${year}"]`)),
            },

        }
    }

    get genderChoice() {
        return {
            select: sex => element(by.css(`input[name="sex"][value="${sex}"]`)),
        }
    }

    fillBirthDayValue(day) {
        this.birthdayValue.birthdayDay.select(day).click();

    }

    fillBirthMonth(month) {
        this.birthdayValue.birthdayMonth.select(month).click();
    }

    fillBirthYear(year) {
        this.birthdayValue.birthdayYear.select(year).click();
    }

    selectGender(sex) {
        this.genderChoice.select(sex).click();
    }
}

