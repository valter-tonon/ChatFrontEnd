import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import {Container} from './styles'
import { Input,Form } from '@rocketseat/unform'
import { Link} from 'react-router-dom'
import { signRequest } from '../../store/modules/auth/actions'

const LoginAdmin = ()=>{ 
    const[form, setForm] = useState('')
    const dispatch = useDispatch()
function handleSubmit({name, password}){
    dispatch(signRequest(name, password))
    setForm({name: '', password: ''})
}

        return (
            <Container className="container-2 w-container">
            <Form className="lobby" method="post" onSubmit={handleSubmit}>
            <h1 className="heading">Admin</h1>
            <div>Informe seu nome para começar:</div>
            <Input className="div-block-3" name="name" style={{width: '100%'}}/><br/>
            <Input className="div-block-3" name="password" type='password' style={{width: '100%'}} />
            <input type="submit" className="w-button" value="Entrar" />
            <Link to='/'><input type="submit" className="btn-admin" value="voltar" /></Link>
            </Form>
            </Container>
        )
    }

export default LoginAdmin