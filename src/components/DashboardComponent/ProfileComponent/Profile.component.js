import React from 'react';

import {Button, FormTextInput} from './../../common';

export const ProfileComponentContent = ({process_user_input,saveProfileData,name, phone, position}) => {
    return (
    <div className="row">
               <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                     <div className="row">
                           <div className="col-lg-12 col-md-12">
                                    <h1 style={{color:"#000", fontSize: '80px'}}> Profile </h1>
                           </div>
                            <div className="col-lg-12 col-md-12 align-items-center">

                               <FormTextInput
                                   type="text"
                                   id="name"
                                   name="name"
                                   placeholder="Enter name"
                                   value={name}
                                   onChange={(e)=> process_user_input('name', e.target.value)}
                                   label="Name"
                                   helpText="Name goes here"
                               />

                                <FormTextInput
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter phone"
                                    value={phone}
                                    onChange={(e)=> process_user_input('phone', e.target.value)}
                                    label="Phone"
                                    helpText="phone goes here"
                                />

                                 <FormTextInput
                                     type="text"
                                     id="position"
                                     name="position"
                                     placeholder="Enter position"
                                     value={position}
                                     onChange={(e)=> process_user_input('position', e.target.value)}
                                     label="Position"
                                     helpText="Position goes here"
                                 />

                              <div className="col-lg-12 col-md-12">
                                   <Button onClick={saveProfileData}>Update Profile</Button>
                              </div>
                            </div>
                     </div>
             </div>
            </div>

    )
}


