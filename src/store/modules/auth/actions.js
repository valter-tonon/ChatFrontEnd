export function signRequest (username, password){
    return{
        type: '@auth/SIGN_REQUEST',
        payload: { username, password}
    }
}
export function signInSuccess(token, user){
    return {
        type: '@auth/SIGN_IN_SUCCESS',
        payload: { token, user }

    }
}

export function signInFailure(){
    return {
        type: '@auth/SIGN_IN-FAILURE'
    }
}
