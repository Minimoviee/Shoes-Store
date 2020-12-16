import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Item from '../../Item/Item';
import NavBar from '../../NavBar/NavBar';

import eleven from '../../Images/jordan-jubilee.jpg';
import four from '../../Images/jordan4-firered.jpg';
import bred from '../../Images/bred.jpg'
import chicago from '../../Images/chicago.jpg'
import shutter from '../../Images/shutter.jpg'

import spacegam from '../../Images/spacegam.jpg'
import uptempo from '../../Images/uptempo.jpg'
import offwhite from '../../Images/offwhite.jpg'
import doraemon from '../../Images/doraemon.jpg'

export class Home extends Component {

    setItem = (item) => {

        if (localStorage.getItem("item")) {
            console.log(`${localStorage.getItem("item")} removed`);
            localStorage.removeItem("item");

        }
        localStorage.setItem("item", item);
        console.log(`${localStorage.getItem("item")} added`);
    }

    render() {
        return (
            <>
            <NavBar />
              <Container>
                    <Row>
                        <Item image={eleven} title={"Jordan 11's Jubilee"} desc={"$ 220"} />
                        <Item image={four} title={"Jordan 4's Fire Red"} desc={"$ 200"} />
                        <Item image={bred} title={"Jordan 1's Bred"} desc={"$ 180"} />
                    </Row>
                    <Row>
                        <Item image={chicago} title={"Jordan 11's Chicago"} desc={"$ 200"} />
                        <Item image={shutter} title={"Jordan 4's Shutter"} desc={"$ 200"} />
                        <Item image={doraemon} title={"Jordan 1's Doraemon"} desc={"$ 500" }/>
                    </Row>

                    <Row>
                        <Item image={spacegam} title={"Jordan 11's Space Jam"} desc={"$ 300"} />
                        <Item image={uptempo} title={"Nike Shoes Uptempo Black"} desc={"$ 200"} />
                        <Item image={offwhite} title={"Jordan 4's Retro x Off-white Sail"} desc={"$ 1000 "} />
                    </Row>
                </Container>
            </>
        )
    }
}

export default Home
