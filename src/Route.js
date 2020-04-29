import React from 'react'
import Proptypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
    component: Component,
    isPrivate = false,
    ...rest
}){
    const signed = false

    if (!signed && isPrivate){
        return <Redirect to='/'/>
    }
    if (signed && !isPrivate){
        return <Redirect to= '/chat'/>
    }
    return(
        <Route { ...rest }
        component={Component} />
    )
}

RouteWrapper.propTypes = {
    isPrivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func]).isRequired
}
RouteWrapper.defaultProps = {
    isPrivate: false
}