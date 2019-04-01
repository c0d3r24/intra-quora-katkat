import React from 'react';
import {Button} from './../common';
export const LogoutComponent = ({onSignOutClick}) => {
 return(
        <Button onClick={onSignOutClick}> Sign Out</Button>
    );
}
