import React, { Component } from 'react';

class Picture extends Component {

    shouldComponentUpdate(nextProps, nextState){
        if(this.props.picture === nextProps.picture){
            return false;
        }
        return true;   
    }

    render() {
        return (
            <div className={this.props.css}>
                <img src={this.props.picture} />
            </div>
        );
    };
}

export default Picture;