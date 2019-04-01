import React, {Component} from 'react';
import { connect } from 'react-redux';

class ForumComponent extends Component {

    render() {
        return (
           <div>
            <h3>I am in Forum</h3>
           </div>
        )
    }
}

const mapStateToProp = () => {
    return {}
}


export default connect (mapStateToProp)(ForumComponent);
