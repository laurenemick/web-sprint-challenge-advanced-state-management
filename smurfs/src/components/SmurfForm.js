import React from 'react';
import { connect } from "react-redux";

import { addNewFriend } from "../actions";

const SmurfForm = props => {


    return (
        <div>
            <input
                type="text"
                value={props.newSmurfs}
                onChange={props.handleChanges}
                placeholder="Add new smurf"
            />
            <button>Add Smurf</button>
        </div>
    )
};

const mapStateToProps = state => {
    return {

    }
};

export default connect(
    mapStateToProps,
    {  }
)(SmurfForm);