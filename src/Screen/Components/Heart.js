import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from 'antd'
import {images} from '../../config/images'
import Lottie from 'react-lottie'
import json01 from '../../config/json/animation01.json'

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
    cursor: pointer;
`
const AnimationImg = keyframes`
  0% {
        transform: scale(0.1, 0.1);
    }
    25% {
        transform: scale(0.3, 0.3);
    }

    50% {
        transform: scale(0.6, 0.6);
    }

    75% {
        transform: scale(0.9, 0.9);
    }

    100% {
        transform: scale(1.2, 1.2);
    }
`
const Image = styled.div`
    animation: ${AnimationImg} 900ms ease-in 10ms;
    width: 200px;
    height: 200px;
    position: relative; 
    margin: 0 auto;
    // top: -240px;
    background-size: contain;
    background-image: url(/static/image/heart.jpeg)
`
const ImageWrap = styled.div`
    width: 100%;
    height: 300px;
    @media screen and (max-width: 768px) {
      height: 300px;
    }
`
const HeartScreen = () =>{
    const [isShow, setIsShow] = useState(false)
    const Lottie = ()=>{

    } 
    return(
        <Container className="wrapper">
            {!isShow ? <Action onClick={() => setIsShow(true)}>
                xxx
            </Action> :
             <ImageWrap>
                <Image/>
            </ImageWrap>}
        </Container>
    )
}
export default HeartScreen