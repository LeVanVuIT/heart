import React from "react";
import styled from "styled-components";
import { Button } from 'antd'
import images from '../../config/images'

const Container = styled.div`
`
const Action = styled(Button)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: linear-gradient(to right, #ff4b1f 0%, #1fddff  51%, #ff4b1f  100%);   
    padding: 15px 45px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 10px 5px 10px 0px #ff4b1f;
    border-radius: 10px; 
    border: none;

`
const HeartScreen = () =>{
    return(
        <Container className="wrapper">
            <Action>
                xxx
            </Action>
        </Container>
    )
}
export default HeartScreen