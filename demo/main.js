
import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route } from 'react-router'
import App from './components/App'
import About from './routes/About/components/About.js'

const history = useBasename(createHistory)({
    basename: '/'
});


//const rootRoute = {
//    path: '/',
//    component: App,
//    childRoutes: [
//        require('./routes/About'),
//        require('./routes/Grades')
//    ]
//};

//render(
//    <Router history={history} routes={rootRoute}/>,
//    document.getElementById('app')
//)


render((
    <Router history={history}>
        <Route path="/" component={App}>
            <Route path="/about" component={About}/>
        </Route>
    </Router>),
    document.getElementById('app')
);