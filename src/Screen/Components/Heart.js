import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from 'antd'
import {images} from '../../config/images'
import Lottie from 'react-lottie'
import json01 from '../../config/json/animation01.json'
import json02 from '../../config/json/animation02.json'
import json03 from '../../config/json/animation03.json'
import json04 from '../../config/json/animation04.json'

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
     position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0.1, 0.1) translate(-50%, -50%);
    }
    25% {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0.3, 0.3) translate(-50%, -50%);
    }

    50% {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0.6, 0.6) translate(-50%, -50%);
    }

    75% {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(0.9, 0.9) translate(-50%, -50%);
    }

    100% {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: scale(1.2, 1.2) translate(-50%, -50%);
    }
`
const Image = styled.div`
    animation: ${AnimationImg} 1200ms ease-in 0ms;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-size: contain;
    background-image: url(/static/image/my-love.jpg)
`
const ImageWrap = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 25px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    @media screen and (max-width: 768px) {
      height: 200px;
    }
`
const LottieWrap01 = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Step1Wrap = styled.div`

`
const LottieWrap02 = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const LottieWrapLeft = styled.div`
 position: absolute;
top: 50%;
left: 0;
`
const LottieWrapRight = styled.div`
 position: absolute;
top: 50%;
right: 0;
`
const HeartScreen = () =>{
    const [isShow, setIsShow] = useState(false)
    const [step, setStep] = useState(1)
    const ShowVideo = () =>{
        return(
            <LottieWrap02>
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
            </LottieWrap02>
        )
    }
    return(
        <Container className="wrapper">
            {step === 1? 
                <Step1Wrap onClick={() => setStep(2)}>
                <Action >
                    Hi! My love.
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
            </Step1Wrap>
            :
                isShow ? <div>
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
                    <LottieWrapLeft>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: json04
                            }}
                            width='150px'
                            height='150px'
                        />
                    </LottieWrapLeft>
                    <LottieWrapRight>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: json04
                            }}
                            width='150px'
                            height='150px'
                        />
                    </LottieWrapRight>
                </div> : <ShowVideo/> 
            }
        </Container>
    )
}
export default HeartScreen