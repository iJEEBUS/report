import React, { Component, } from 'react';
import Clock from 'react-live-clock';
import Title from './Title';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.displayName,
            email : this.props.email,
            photoURL : this.props.photoURL,
            emailVerified : this.props.emailVerified,
            uid : this.props.uid,
        }
    }


    render(){
        console.log(this.props);
        return(
            <React.Fragment>
                <Title>{this.state.name}</Title>
                <Title><Clock format={'HH:mm:ss'} ticking={true} /></Title>
            </React.Fragment>
        )
    };
}

export default Welcome;