
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route } from 'react-router'
import App from './components/App'
import About from './routes/about/components/About.js'

const history = useBasename(createHistory)({
    basename: '/'
});


//const rootRoute = {
//    path: '/',
//    component: App,
//    childRoutes: [
//        require('./routes/About')
//    ]
//};

render((
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
        </Route>
    </Router>),
    document.getElementById('app')
);