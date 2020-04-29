import {takeLatest, call, put, all } from 'redux-saga/effects'
import api from '../../../services/api'
import { signInSuccess } from './actions'

export function signIn({payload }){
    const {username, password} = payload

    const response =  call(api.post,'admin',{
        username,
        password
    })
    const { token, user } = response.data

    put(signInSuccess(token,user))
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])