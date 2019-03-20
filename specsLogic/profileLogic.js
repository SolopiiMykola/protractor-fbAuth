import { ProfilePage } from '../pages/profile';
import {browser} from "protractor";
import { loginInfo } from '../dataMock/fbUser';
import * as path from "path";
import Base from "../utils/Base";

const IMG_UPLOAD = 'dataMock/user.png';
const EXPECTED_UPDATED_AVATAR_TEXT = `${loginInfo.profileName} ${loginInfo.profileSureName} обновила фото проф`;

export class ProfileLogic extends Base {
    constructor() {
        super();
        this.page = new ProfilePage();
    }

    uploadAvatar() {
        browser.waitForAngularEnabled(false);
        const ABSOLUTE_PATH = path.resolve(IMG_UPLOAD);
        this.page.profileIcon.click();
        this.waitUntilElementDisplayed(this.page.updateAvatarButton);
        this.page.updateAvatarButton.click();
        this.waitUntilElementDisplayed(this.page.uploadPhotoButton);
        this.page.avatarInput.sendKeys(ABSOLUTE_PATH);
        this.waitUntilElementDisplayed(this.page.avatarSaveButton);
        this.page.avatarSaveButton.click();
        this.waitUntilElementDisplayed(this.page.storyTitle);
        expect(this.page.storyTitle.getText()).toContain(EXPECTED_UPDATED_AVATAR_TEXT)
    }
}
