/**
 * Created by flybear on 15/11/18.
 */
import React from 'react'

export default class Head extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("---")
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="javascript:">Brand</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="javascript:">Link <span className="sr-only">(current)</span></a></li>
                                <li><a href="javascript:">Link</a></li>
                                <li className="dropdown">
                                    <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="javascript:">Action</a></li>
                                        <li><a href="javascript:">Another action</a></li>
                                        <li><a href="javascript:">Something else here</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="javascript:">Separated link</a></li>
                                        <li role="separator" className="divider"></li>
                                        <li><a href="javascript:">One more separated link</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="nav navbar-nav navbar-right lh50">
                                <button className="btn btn-primary m-r-sm" onClick={this.handleClick} >登陆</button>
                                <button className="btn btn-default" href="javascript:">注册</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}