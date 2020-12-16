import React, { Component } from 'react';
import './Checkout.css';

import * as API from '../../../util/api';
import NavBar from '../../NavBar/NavBar';

export class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blocked: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const url = window.location.href;
        API.checkURL(url).then((result) => {
          console.log(result)
          if (result.status === 200) {
            this.setState({
                blocked: result.data.blocked
            })
          }
        }).catch((error) => {
          console.log(error)
        });
      }

    render() {
        const { blocked } = this.state;


        return (
            <>
                <NavBar />
                <h1>checkout</h1>
                <h2> shoes shoes </h2>


            </>
        )
    }
}

export default Checkout
