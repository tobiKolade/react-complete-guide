import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()')
        this.inputElement.focus();
    }

    render() {
        console.log('[Person.js] Inside render()')

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} {this.props.ageType} old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => {this.inputElement = inp}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}
// const person = (props) => {
//     return (
//         <div className={styles.Person}>
//             <p onClick={props.click}>I'm {props.name} and I am {props.age} {props.ageType} old!</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name} />
//         </div>
//     )
// };

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    ageType: PropTypes.string,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
