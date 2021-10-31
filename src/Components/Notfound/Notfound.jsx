import React, { Component } from 'react';


import NotfoundStyle from './NotfoundStyle.module.css';
class Notfound extends React.Component {
    render() {
        return (
            <React.Fragment>

                <div className={`${NotfoundStyle.caption} d-flex justify-content-center align-items-center vh-100 text-center`}>
                    <h1>Notfound 404</h1>
                </div>

            </React.Fragment>
        );
    }
}

export default Notfound;