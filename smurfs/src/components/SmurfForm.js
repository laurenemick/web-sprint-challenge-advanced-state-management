import React, { useState } from 'react';
import { connect } from "react-redux";

import { addNewSmurf } from "../actions";

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState("");

    const handleChanges = e => {
        setNewSmurf(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault()
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    label="name"
                    type="text"
                    name="name"
                    value={newSmurf}
                    onChange={handleChanges}
                />
                {/* <input
                    label="age"
                    type="text"
                    name="age"
                    value={newSmurf}
                    onChange={handleChanges}
                /> */}
                <button onClick={() => props.addNewSmurf(newSmurf)}>Add Smurf</button>
            </form>
        </div>
    )
};

export default connect(
    null,
    { addNewSmurf }
)(SmurfForm);