import React from 'react';

import {Button, FormTextInput} from './../../common';

export const SettingsComponentContent = () => {
    return (
        <div className="row">
                    <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h1 style={{color:"#000", fontSize: '80px'}}> Setting </h1>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <p style={{color:"#000", fontSize: '20px'}}>
                                    All setting will appear here
                                </p>
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">#</th>
                                      <th scope="col">First</th>
                                      <th scope="col">Last</th>
                                      <th scope="col">Handle</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">1</th>
                                      <td>Mark</td>
                                      <td>Otto</td>
                                      <td>@mdo</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">2</th>
                                      <td>Jacob</td>
                                      <td>Thornton</td>
                                      <td>@fat</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">3</th>
                                      <td>Larry</td>
                                      <td>the Bird</td>
                                      <td>@twitter</td>
                                    </tr>
                                  </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
        </div>
    )
}


