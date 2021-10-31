import { timers } from 'jquery';
import React, { Component } from 'react';
import $ from 'jquery';
import Fade from 'react-reveal/Fade';

class Conversations extends React.Component {
    componentDidMount = () => {
        $(".xxx").slice(0, 4).slideDown(800);
        $("#BtnMore").on("click", function () {
            $(".xxx:hidden").slice(0, 1).slideDown(800);
        })
    }

    render() {
        let { ConversationsProps } = this.props;
        // console.log(this.props)
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="text-center mt-5 pt-5">أحاديث</h1>
                    <div className="row  ">
                        {ConversationsProps.map((C) =>
                            <div key={C.id} id="colMore" className="xxx col-12 mb-3  text-center ConversationsCol">
                                <Fade left>
                                    <h6>{C.number}</h6>
                                    <h4 className="mt-2  w-75 m-auto">{C.arab}</h4>
                                </Fade >
                            </div>
                        )}
                        <button id="BtnMore" className="btn btn-dark px-5 ">المزيد</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Conversations;