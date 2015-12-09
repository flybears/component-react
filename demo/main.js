///**
// * Created by flybear on 15/11/12.
// */
//
//import React from 'react';
//import { render } from 'react-dom';
//import { Router, Route, Link } from 'react-router';
//import Head from './structure/head.jsx';
//import Footer from './structure/footer.jsx';
//
//const App = React.createClass({
//    render(){
//        return (
//            <div>
//                <Head />
//                    {this.props.children}
//                <Footer />
//            </div>
//        )
//    }
//});
//
//const About = React.createClass({
//    render(){
//        return (
//            <div>This is About!</div>
//        )
//    }
//});
//
//const Users = React.createClass({
//    render(){
//        return (
//            <div>This is Users!</div>
//        )
//    }
//});
//
//const routes = {
//    path: '/',
//    component: App,
//    childRoutes: [
//        { path: 'about', component: About },
//        { path: 'users', component: Users }
//    ]
//};
//
//render(<Router routes={routes} />, document.getElementById('app'))


import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import App from './components/App'

const history = useBasename(createHistory)({
    basename: '/huge-apps'
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