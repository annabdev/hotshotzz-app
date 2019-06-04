import React, { Component } from 'react';
import styled from 'styled-components';

const Main = styled.div`
display: flex;
border: 1px solid black;
flex-direction: column;
flex-wrap: wrap;
`

const StyledAdmin = styled.div`
display: flex;
color: #1A5276;
font-weight: bold;
font-size: 100px;
border: 1px solid black;
height: 300px;
width: 100%;
`


const Returning = styled.div`
display: flex;
border: 1px solid black;
flex-wrap: wrap;
width: 300px;
height: 300px;
`

const Results = styled.div`
display: flex;
border: 1px solid black;
flex-wrap: wrap;
width: 300px;
height: 300px;
`

const History = styled.div`
display: flex;
border: 1px solid black;
width: 300px;
height: 300px;
`

const Demos = styled.div`
display: flex;
border: 1px solid black;
flex-wrap: wrap;
width: 300px;
height: 300px;
`

const Container1 = styled.div`
display: flex;
flex-direction: row;
`

const Container2 = styled.div`
display: flex;
flex-direction: column;
`

const Container3 = styled.div`
display: flex;
flex-direction: column;
`

class Admin extends Component {
    render() {
        return (
            <Main>
                <StyledAdmin>
                    Welcome Admin!
                </StyledAdmin>
                <Container1>
                    <Container2>
                    <Results>
                        Results
                    </Results>
                    <Returning>
                        Returning
                    </Returning>
                    </Container2>
                    <Container3>
                    <History>
                        History
                    </History>
                    <Demos>
                        Demographics
                    </Demos>
                    </Container3>
                    </Container1>
            </Main>

        )
    };
};

export default Admin;
