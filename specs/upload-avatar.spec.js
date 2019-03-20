import {LoginLogic} from "../specsLogic/loginLogic";
import {ProfileLogic} from "../specsLogic/profileLogic";

const loginLogic = new LoginLogic();
const profileLogic = new ProfileLogic();

describe('Login and upload avatar', () => {

    it('Login by new user', loginLogic.loginUser.bind(loginLogic));

    it('Upload avatar', profileLogic.uploadAvatar.bind(profileLogic));

});