import { Container, CardItem, CardTitle } from './style.js'
import api from '../../services/api.js'
import { useEffect, useState } from 'react';

const Card = () => {
    const [ isLoading, setIsLoading ] = useState(true)
    const [listPokemons, setListPokemons] = useState([])
    
    const getPokemons = () => {

    }

    useEffect(() => {
        api.get('pokemon')
            .then(({ data }) => {
            setListPokemons(data)
        })

        setIsLoading(false)
    }, [])

    return (
        <Container>
            <CardItem>
                <CardTitle>Pokemon title</CardTitle>
            </CardItem>

            <CardItem />
        </Container>
    )
}

export default Card