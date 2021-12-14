import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Footer from "../../components/footer/footer.component";

import './sign-in-sign-up.styles.scss';

const SignInAndSignUp = () => (
    <div>
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
        <Footer className="footer"/>
     </div>
)

export default SignInAndSignUp;
