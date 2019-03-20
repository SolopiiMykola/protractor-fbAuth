import { stringGen } from '../utils/utils';
const randomEmail = `${stringGen(5)}@i.ua`;
const randomNameAndLastName = `Mykola${stringGen(3)}`;

export const newSignUpInfo = {
    firstName: randomNameAndLastName,
    lastName: randomNameAndLastName,
    email: randomEmail,
    password: "paswword12345",
    birthDay: 1,
    birthMonth: 1,
    birthYear: 1990,
    gender: {
        female: 1,
        male: 2,
    }
};

export const loginInfo = {
    email: "test_zkwytmr_user@tfbnw.net",
    password: "OmnigonPassword",
    profileName: "Test",
    profileSureName: "User"
};
