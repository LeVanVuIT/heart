import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from 'antd'
import {images} from '../../config/images'
import Lottie from 'react-lottie'
import json01 from '../../config/json/animation01.json'
import json02 from '../../config/json/animation02.json'
import json03 from '../../config/json/animation03.json'

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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: contain;
    background-image: url(/static/image/heart.jpeg)
    border-radius: 25px;
`
const ImageWrap = styled.div`
    width: 100%;
    height: 200px;
    @media screen and (max-width: 768px) {
      height: 200px;
    }
    border-radius: 50%;
`
const LottieWrap01 = styled.div`
`
const LottieWrap02 = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const HeartScreen = () =>{
    const [isShow, setIsShow] = useState(false)
    const [step, setStep] = useState(1)
    const ShowVideo = () =>{
        return(
            <div>
                <Lottie
                    options={{
                        loop: false,
                        autoplay: true,
                        animationData: json03
                    }}
                    width='300px'
                    height='300px'
                    eventListeners={[
                    {
                        eventName: 'complete',
                        callback: () => setIsShow(true)
                    }]}
                />
            </div>
        )
    }
    return(
        <Container className="wrapper">
            {step === 1? 
                <div onClick={() => setStep(2)}>
                <Action >
                    xxx
                </Action>
                <LottieWrap01>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: json02
                        }}
                        width='300px'
                        height='300px'
                    />
                </LottieWrap01>
            </div>
            :
               <ShowVideo/> 
            }
            {isShow && <div>
                <ImageWrap>
                    <Image />
                </ImageWrap>
                <LottieWrap02>
                    <Lottie
                        options={{
                            loop: true,
                            autoplay: true,
                            animationData: json01
                        }}
                        width='300px'
                        height='300px'
                    />
                </LottieWrap02>
            </div>}
        </Container>
    )
}
export default HeartScreen