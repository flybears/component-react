
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import App from './components/App'

let history = useBasename(createHistory)({
    basename: '/'
});


const rootRoute = {
    path: '/',
    component: App,
    childRoutes: [
        require('./routes/About')
    ]
}

render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('app')
)