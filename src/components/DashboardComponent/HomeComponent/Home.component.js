import React from 'react';

import {Button, FormTextInput} from './../../common';

export const HomeComponentContent = () => {
    return (
        <div className="row">
                            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <h1 style={{color:"#000", fontSize: '80px'}}> Home </h1>
                                    </div>
                                    <div className="col-lg-12 col-md-12">


                                      <svg class="chart" width="420" height="150" aria-labelledby="title desc" role="img">
                                        <title id="title">A bar chart showing information</title>
                                        <desc id="desc">4 apples; 8 bananas; 15 kiwis; 16 oranges; 23 lemons</desc>
                                        <g class="bar">
                                          <rect width="40" height="19"></rect>
                                          <text x="45" y="9.5" dy=".35em">4 apples</text>
                                        </g>
                                        <g class="bar">
                                          <rect width="80" height="19" y="20"></rect>
                                          <text x="85" y="28" dy=".35em">8 bananas</text>
                                        </g>
                                        <g class="bar">
                                          <rect width="150" height="19" y="40"></rect>
                                          <text x="150" y="48" dy=".35em">15 kiwis</text>
                                        </g>
                                        <g class="bar">
                                          <rect width="160" height="19" y="60"></rect>
                                          <text x="161" y="68" dy=".35em">16 oranges</text>
                                        </g>
                                        <g class="bar">
                                          <rect width="230" height="19" y="80"></rect>
                                          <text x="235" y="88" dy=".35em">23 lemons</text>
                                        </g>
                                      </svg>


                                      <svg viewBox="0 0 500 100" class="chart">

                                        <polyline
                                           fill="none"
                                           stroke="#0074d9"
                                           stroke-width="2"
                                           points="
                                             00,120
                                             20,60
                                             40,80
                                             60,20
                                             80,80
                                             100,80
                                             120,60
                                             140,100
                                             160,90
                                             180,80
                                             200, 110
                                             220, 10
                                             240, 70
                                             260, 100
                                             280, 100
                                             300, 40
                                             320, 0
                                             340, 100
                                             360, 100
                                             380, 120
                                             400, 60
                                             420, 70
                                             440, 80
                                           "
                                         />

                                      </svg>
                                    </div>

                                </div>
                            </div>
                </div>
    )
}

