import React, { useEffect } from 'react';
import { connect } from "react-redux";

import { fetchSmurfs } from "../actions";

const SmurfList = props => {
    useEffect(() => {
        // call the action creator
        props.fetchSmurfs();
    }, []);

    return (
        <div className="smurfList">
            {props.isLoading && <h4>Loading smurfs...</h4>}
            {props.error && (
                <p className="error">Something went wrong, please try again later... {props.error}</p>
            )}
            {props.smurfs.length > 0 && (
                <div className="smurfContainer">
                    {props.smurfs.map(smurf => (
                        <div className="smurf" key={smurf.id}>
                            <h3>{smurf.name}</h3>
                            <p>Age: {smurf.age}</p>
                            <p>Height: {smurf.height}</p>
                        </div>
                    ))}
                </div>
            )}   
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        error: state.error
    }
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfList);