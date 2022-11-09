import React from "react";
import styled from "styled-components";
import { Button } from 'antd'
import images from '../../config/images'

const Container = styled.div`
`
const Action = styled(Button)`
`
const HeartScreen = () =>{
    return(
        <Container className="wrapper">
            <Action>
                Hiiiiiii!
            </Action>
        </Container>
    )
}
export default HeartScreen