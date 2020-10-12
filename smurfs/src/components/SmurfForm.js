import React, { useState } from 'react';
import { connect } from "react-redux";

import { addNewSmurf } from "../actions";

const SmurfForm = props => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

    const handleChanges = (e) => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    };

    const submitHandler = e => {
        e.preventDefault()
        setNewSmurf({name: '', age: '', height: ''})
    };

    return (
        <div className="smurf_form">
            <form onSubmit={submitHandler} className="add_smurf_form">
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={newSmurf.name}
                    onChange={handleChanges}
                    style={{padding: "1% 2%",marginBottom: "2%"}}
                />
                <input
                    placeholder="Age"
                    type="text"
                    name="age"
                    value={newSmurf.age}
                    onChange={handleChanges}
                    style={{padding: "1% 2%",marginBottom: "2%"}}
                />
                <input
                    placeholder="Height"
                    type="text"
                    name="height"
                    value={newSmurf.height}
                    onChange={handleChanges}
                    style={{padding: "1% 2%",marginBottom: "2%"}}
                />
                <button 
                    onClick={() => props.addNewSmurf(newSmurf)}
                    style={{padding: "1% 2%",marginBottom: "2%"}}
                >
                    Add Smurf
                </button>
            </form>
        </div>
    )
};

export default connect(
    null,
    { addNewSmurf }
)(SmurfForm);