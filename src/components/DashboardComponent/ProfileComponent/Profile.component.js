import React from 'react';

import {Button, FormTextInput} from './../../common';

export const ProfileComponentContent = ({process_user_input,saveProfileData,name, phone, position}) => {
    return (
        <div className="row">
             <div className="col-lg-6 col-md-6 align-items-center">
                <p className="baseline">Name:</p>
             </div>
             <div className="col-lg-6 col-md-6">
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
             </div>
             <div className="col-lg-6 col-md-6">
                 <p>Phone:</p>
              </div>
              <div className="col-lg-6 col-md-6">
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
              </div>
              <div className="col-lg-6 col-md-6">
                  <p>Position:</p>
               </div>
               <div className="col-lg-6 col-md-6">
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
               </div>
               <div className="col-lg-12 col-md-12">
                    <Button onClick={saveProfileData}>Update Profile</Button>
               </div>
        </div>
    )
}


