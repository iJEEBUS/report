import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Firebase from '../../../firebase';

export const PrivateRoute = ({ component : Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            Firebase.auth().currentUser ? ( 
                <Component {...props } />
            ) : (
                <Redirect 
                to={{
                    pathname: "/", 
                    state: { from: props.location }
                }}
                />
            ) 
        }
    />
);