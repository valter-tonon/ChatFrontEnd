import React from 'react'
import {Switch} from 'react-router-dom'
import Route from './Route'
import Login from './pages/login'
import Home from './pages/home'
import LoginAdmin from './pages/loginAdmin'
import Users from './pages/Users'


const Routes = ()=>{
    return(
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/chat" component={Home} />
            <Route path='/admin' component={LoginAdmin} />
            <Route path='/users' component={Users} />
        </Switch>
    )
}
export default Routes


