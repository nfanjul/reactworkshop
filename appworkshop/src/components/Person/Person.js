import React, { Component } from 'react';
import Picture from '../Picture/Picture'
import imageSalaray from '../../images/money.png';

class Person extends Component {

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return {
            salaryDiference: this.props.salary - prevProps.salary,
          };
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        const moneyImage = document.querySelector('.MoneyImage');
        if (moneyImage) {
          let imageWidth = moneyImage.offsetWidth;
          if (moneyImage && snapshot.salaryDiference > 0) {
            imageWidth = imageWidth + 23;
            moneyImage.style.width = `${imageWidth}px`;
          }
          if (moneyImage && snapshot.salaryDiference < 0) {
            moneyImage.style.width = "0px";
          }
        }
    }

    render() {
        return (
            <div>
                <div className={this.props.css}>
                    Nombre: {this.props.name}
                </div>
                <div className={this.props.css}>
                    Edad: {this.props.age}
                </div>
                <div className={this.props.css}>
                    Salario: {this.props.salary}
                </div>
                <Picture css='MoneyImage' picture={imageSalaray} />
            </div>
        );
    };
}

export default Person;