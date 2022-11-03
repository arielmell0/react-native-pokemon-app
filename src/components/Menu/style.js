import styled from 'styled-components/native'

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    width: 100%;
    height: 10%;

    background-color: black;
`

const MenuItem = styled.Text`
    color: white;
    font-size: 20px;
    font-family: 'Roboto';
    margin: 0 25px 0 25px;
`
 
export { Container, MenuItem }