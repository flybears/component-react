/**
 * Created by flybear on 15/11/18.
 */
import React from 'react';
import { Link } from 'react-router';

export default class Dashboard extends React.Component{
    render(){
        return (
            <div>
                This is Dashboard!
                <Link to="/about">About</Link>
            </div>
        )
    }
}