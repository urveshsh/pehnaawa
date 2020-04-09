import React from 'react';
import SignIn from '../../components/myAccount/sign-in/sign-in';
import SignUp from '../../components/myAccount/sign-up/sign-up';

import './accountAccess.scss';

const AccountAccess = () => {
    return (
        <div className='accountAccess'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default AccountAccess;