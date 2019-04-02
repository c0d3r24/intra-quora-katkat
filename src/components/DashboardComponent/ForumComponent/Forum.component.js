import React from 'react';

import {Button, FormTextInput} from './../../common';

export const ForumComponentContent = () => {
    return (
        <div className="row">
                            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <h1 style={{color:"#000", fontSize: '80px'}}> Forum/Questions </h1>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <p style={{color:"#000", fontSize: '20px'}}>
                                           WhatEver!
                                        </p>
                                        <table class="table table-striped table-dark">
                                          <thead>
                                            <tr>
                                              <th scope="col">#</th>
                                              <th scope="col">Question</th>

                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <th scope="row">1</th>
                                              <td>Mark</td>

                                            </tr>
                                            <tr>
                                              <th scope="row">2</th>
                                              <td>Jacob</td>

                                            </tr>
                                            <tr>
                                              <th scope="row">3</th>
                                              <td>Larry</td>

                                            </tr>

                                          </tbody>
                                        </table>


                                    </div>

                                </div>
                            </div>
                </div>
    )
}


