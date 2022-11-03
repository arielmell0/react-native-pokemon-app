import axios from 'axios'

const getPokemons = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default getPokemons