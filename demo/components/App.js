/**
 * Created by flybear on 15/11/18.
 */
import React from 'react'
import Dashboard from './Dashboard.js'
import Head from './Head.js'
import Footer from './Footer.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <Head />
                <div style={{ padding: 20 }}>
                    {this.props.children || <Dashboard />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default App