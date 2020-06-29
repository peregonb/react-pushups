import React from "react";
import styled from 'styled-components';
import {Button} from "antd";


const StyledLogo = styled.img`
    width: 500px;
    max-width: calc(100vw - 40px);
`;

export const GettingStarted = props => {

    return (
        <>
            <h2>Тестов</h2>
            <div>
                Подсчитай сколько можешь отжаться правильно и для тебя будет подобрана оптимальная программа
                отжиманий
            </div>
            <StyledLogo src={require('../data/gifs/pushup.gif')} alt="правильное отжимание"/>
            <Button type="primary">Пройти тест</Button>
        </>
    )
}