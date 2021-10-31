import React, { Component } from 'react';
import axios from 'axios';
import Slide from 'react-reveal/Slide';

class idQuran extends React.Component {
    state = {
        allQuran: [],
        allQuranHedar: [],
    }
    IdQuran = async () => {
        let IdQ = await axios.get(`http://api.alquran.cloud/v1/surah/${this.props.match.params.number}`);
        // console.log(IdQ.data.data);
        // console.log(IdQ.data.data.name);
        // console.log(IdQ.data.data.ayahs);
        this.setState({ allQuran: IdQ.data.data.ayahs })    // جيت كل ايه 
        this.setState({ allQuranHedar: IdQ.data.data })    // جيت كل ايه 
    }
    componentDidMount() {
        this.IdQuran();
    }

    render() {
        // console.log(this.props.match.params.number)
        return (
            <React.Fragment>
                <section className="">
                    <Slide right>
                        <div className="container">
                            <div className="nameQuran text-center hedar mt-5 pt-5">
                                <h1 className=" my-2">{this.state.allQuranHedar.name} </h1>
                            </div>
                            <div className="text-center mt-4">
                                {this.state.allQuran.map((Ayat) =>
                                    <p className="Ayat mt-3">{Ayat.numberInSurah} - {Ayat.text}</p>
                                )}
                            </div>
                        </div>
                    </Slide >
                </section>
            </React.Fragment >
        );
    }
}

export default idQuran;