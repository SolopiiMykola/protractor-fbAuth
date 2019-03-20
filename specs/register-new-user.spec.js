import { SignUpLogic }  from '../specsLogic/signUpLogic';

const signUpLogic = new SignUpLogic();

describe('Sign Up new user', () => {

    it('Sign up new user', signUpLogic.signUpUser.bind(signUpLogic));

});