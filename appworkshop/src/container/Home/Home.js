import React, { Component, Fragment } from 'react';
import Button from '../../components/Button/Button';
import Picture from '../../components/Picture/Picture';
import Person from '../../components/Person/Person';
import zeroImage from '../../images/0.png';
import tenImage from '../../images/10.png';
import twentyImage from '../../images/20.png';
import thirtyImage from '../../images/30.png';
import fiftyImage from '../../images/50.png';
import defaultData from '../../Api/data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          born: false,
          image: '',
          age: 0,
          name: '',
          salary: 0,
        }
    }

    componentDidMount() {
        this.setState({ age: defaultData.age, name: defaultData.name });
    }

    getImage = (age) => {
        switch(age)
        {
            case 10:
                return tenImage;
            case 20:
                return twentyImage;
            case 30:
                return thirtyImage;
            case 50:
                return fiftyImage;
            default:
                return this.state.image;
        }
    }

    componentWillUnmount = () => {
        this.setState({ born: false, image: '', age: 0, name: '', salary: 0});
    }

    createHandler = () => {
        if(!this.state.born){
            this.setState({ born: true, image: zeroImage});
            return;
        }
        this.componentWillUnmount();
    }

    inceremetAgeHandler = () => {
        const newAge = this.state.age + 10;
        const newSalary = this.state.salary + 500;
        this.setState({ age: newAge, image: this.getImage(newAge), salary: newSalary});
    }

    render() {
        return (
            <div>
                <Button css='test' onActionHandler={this.createHandler} text={this.state.born ? 'Kill' : 'Create'} />
                {this.state.born ? 
                <Fragment>
                    <Picture css='test' picture={this.state.image} />
                    <Person name={this.state.name} age={this.state.age} salary={this.state.salary} />
                    <Button css='test' onActionHandler={this.inceremetAgeHandler} text='+' />        
                </Fragment>
                : '' }     
            </div>  
        );
    };
}

export default Home;