import React from 'react';
import {Button, FormTextInput} from './../common';

const styles = {
    leftSideContainer: {
        background: '#5af4ea',
    },
    rightSideContainer: {
        background:"#3b4754"
    }
}


export const LoginComponentContent = ({ process_user_input,
                                       onSignInClick,
                                       email,
                                       password}) => {
    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-lg-6 col-md-6" style={styles.leftSideContainer}>
                    <h4>Plan your activities and control your progress online</h4>
                </div>
                <div className="col-lg-6 col-md-6" style={styles.rightSideContainer}>
                    <FormTextInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e)=> process_user_input('email', e.target.value)}
                        label="Email"
                        helpText="We'll never share your email with anyone else."
                    />
                    <FormTextInput
                        type="password"
                        id="password"
                        name="password"
                        label="Password"
                        value={password}
                        onChange={(e)=> process_user_input('password', e.target.value)}
                        placeholder="XXXXXXXXXX"
                    />
                    <Button onClick={onSignInClick}> Sign In</Button>
                </div>
            </div>
        </div>
    )

}


