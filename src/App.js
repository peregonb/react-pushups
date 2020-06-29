import React from 'react';
import {Layout, Menu, Breadcrumb, Typography} from 'antd';
import {Route} from "react-router-dom";
import {GettingStarted} from './components/GettingStarted'
import styled from 'styled-components';

const {Title} = Typography;
const {Header, Content, Footer} = Layout;
const StyledFooter = styled(Footer)`
    padding: 10px 0;
    text-align: center;
    font-size: 12px;
`;

const StyledHeader = styled(Header)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px !important;
    height: 45px;
    
    @media (max-width: 600px) {
        padding: 0 20px !important;
    }
`;

const StyledLogo = styled(Title)`
    margin: 0 !important;
    white-space: nowrap;
    user-select: none;
`;

const StyledContent = styled(Content)`
    padding: 15px 40px;
    @media (max-width: 600px) {
        padding: 10px 20px;
    }
`;

const StyledLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const App = () => (
    <StyledLayout>
        <StyledHeader>
            <StyledLogo level={4}>100 отжиманий</StyledLogo>
            <div>
                навигация
            </div>
        </StyledHeader>
        <StyledContent>
            <Route exact path={'/'} render={() => <GettingStarted/>}/>
        </StyledContent>
        <StyledFooter>©{new Date().getFullYear()} Created by&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/peregonb">peregonb</a>
        </StyledFooter>
    </StyledLayout>
);

export default App;