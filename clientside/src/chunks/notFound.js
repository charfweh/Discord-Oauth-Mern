import React, { Component } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import {Link }from "react-router-dom"
class NotFound extends Component {
    render() {
        return (
            <div className = "infoContainer">
                 <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                </Alert>
            <Link to="/">
                Go Home
            </Link>
            </div>
        );
    }
}

export default NotFound;