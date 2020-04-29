import { createGlobalStyle } from 'styled-components'
import Fundo from '../assets/imgs/woman-holding-a-yellow-string-light-3378993.jpg'

export default createGlobalStyle ` 
body{
    margin: 0;
    padding: 0;
    background: #222 url(${Fundo}) no-repeat;
    background-size: cover;
}
`