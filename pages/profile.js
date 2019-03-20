import {element} from "protractor";

export class ProfilePage {

    get profileName() { return element(by.xpath('//*[@id="u_0_a"]/div[1]/div[1]/div/a/span/span')); }
    get profileIcon() {return element(by.css('[data-click="profile_icon"]'))}
    get updateAvatarButton() {return element(by.xpath('//*[@id="u_fetchstream_1_f"]'))}
    get avatarInput() { return element(by.css('input[type="file"]'))}
    get avatarSaveButton() { return element(by.buttonText('Опубликовать'))}
    get storyTitle() { return element(by.css('#js_q > span'))}
}
