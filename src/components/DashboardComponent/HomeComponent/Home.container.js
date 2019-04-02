import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {HomeComponentContent} from './Home.component';

class HomeComponent extends Component {

    render() {
        return (
            <HomeComponentContent/>
        )
    }
}

const mapStateToProp = () => {
    return {}
}


export default connect (mapStateToProp)(HomeComponent);
