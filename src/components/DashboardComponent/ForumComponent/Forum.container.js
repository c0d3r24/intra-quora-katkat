import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';



import {ForumComponentContent} from './Forum.component';

class ForumComponent extends Component {
    render() {
        return (
            <ForumComponentContent/>
        )
    }
}

const mapStateToProp = ({}) => {

    return {}
}


export default connect (mapStateToProp)(ForumComponent);
