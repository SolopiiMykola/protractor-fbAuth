import {element} from "protractor";

export class ProfilePage {

    get profileName() { return element(by.xpath('//*[@id="u_0_a"]/div[1]/div[1]/div/a/span/span')); }
    get profileIcon() {return element(by.css('[data-click="profile_icon"]'))}
    get updateAvatarButton() {return element(by.xpath('//*[@id="u_fetchstream_1_f"]'))}
    get uploadPhotoButton() { return element(by.css('[data-action-type="upload_photo"]'))}
    get avatarInput() { return element.all(by.css('input[type="file"]')).last()}
    get avatarSaveButton() { return element(by.css('[data-testid="profilePicSaveButton"]'))}
    get storyTitle() { return element.all(by.css('span.fcg')).first()}
}
