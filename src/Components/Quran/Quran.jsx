import React, { Component } from 'react';
import talk from '../../images/mushaf-slam.jpg';
import Zoom from 'react-reveal/Zoom';

class Quran extends React.Component {
    getIdQuran = (number) => {
        this.props.history.push(`/idQuran/${number}`)
    }
    render() {
        let { QuranProps } = this.props;
        console.log(this.props)
        return (
            <React.Fragment>
                <section className="">
                    <div className="container hedar">
                        <h1 className="text-center mt-5 pt-5">القرأن الكريم</h1>
                        <div className="row my-5">
                            {QuranProps.map((Q) =>
                                <div key={Q.number} onClick={() => { this.getIdQuran(Q.number) }} className="col-xl-2 col-lg-4 col-md-6 col-sm-6 mb-4 QuranS">
                                    <Zoom>
                                        <div className="memder ">
                                            <p></p>
                                            <div className="member-caption d-flex  justify-content-center align-items-center">
                                                <h2>{Q.name}</h2>
                                            </div>
                                        </div>
                                    </Zoom>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Quran;