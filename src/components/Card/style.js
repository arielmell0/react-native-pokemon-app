import styled from 'styled-components/native'

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: row;

    height: 45%;
    width: 100%;
`

const CardItem = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45%;
    height: 45%;
    margin: 0 2.5% 0 2.5%;

    background-color: black;
    border-radius: 15px;
`

const CardTitle = styled.Text`
    justify-self: flex-start;

    height: 100%;
    margin-top: 15px;

    font-size: 15px;
    color: white;
`

export { Container, CardItem, CardTitle } 