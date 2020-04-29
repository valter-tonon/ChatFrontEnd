import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Container, Group } from './styles'


const api = axios.create({
    baseURL: 'http://localhost:3333/user'
})

class Users extends React.Component {
    state = {
        user: []
    }
    constructor(props){
        super(props)
        api.get('/').then(res=>{
            this.setState({ user: res.data})
            console.log(this.state.user.length)
        })
    }

   render(){
       const max =Math.ceil(this.state.user.length / 4)
       console.log(max)
       let grupo1 = this.state.user.slice(0,max)
       let grupo2 = this.state.user.slice(max,max*2)
       let grupo3 = this.state.user.slice(max*2,max*3)
       let grupo4 = this.state.user.slice(max*3,max*4)
    return(
        <Container>
        <h1>Nomes Participantes</h1>
        <Link to='/chat'><p>voltar</p></Link>
        <Group>
        <div>
        <h3>Grupo 1</h3>
            <ul>
            {grupo1.map(u =><li key={u._id}>{u.name}</li>) }
            </ul>
        </div>
        <div>
        <h3>Grupo 2</h3>
            <ul>
            {grupo2.map(u =><li key={u._id}>{u.name}</li>) }
            </ul>
        </div>
        <div>
        <h3>Grupo 3</h3>
            <ul>
            {grupo3.map(u =><li key={u._id}>{u.name}</li>) }
            </ul>
        </div>
        <div>
        <h3>Grupo 4</h3>
            <ul>
            {grupo4.map(u =><li key={u._id}>{u.name}</li>) }
            </ul>
        </div>
        </Group>
        </Container>
    )
}
}

export default Users