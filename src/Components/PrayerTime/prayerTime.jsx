import React, { Component } from 'react';
import axios from 'axios';
import Bounce from 'react-reveal/Bounce';

class PrayerTime extends React.Component {
    state = {
        PTime: [],
    }
    PrayerTimes = async () => {
        let IdQ = await axios.get(`http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8`);
        console.log(IdQ.data.data.timings);
        this.setState({ PTime: IdQ.data.data.timings })    // جيت كل ايه 
    }
    componentDidMount() {
        this.PrayerTimes();
    }

    render() {
        return (
            <React.Fragment>
                <section className="">
                    <div className="container ">
                        <div className=" text-center hedar my-5 pt-5">
                            <h1>توقيت الصلاه </h1>
                        </div>
                        <div className="container-PrayerTimes">
                            <div className="row d-flex  justify-content-center">

                                <div className="col-xl-3   col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce left>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>الفجر </p>
                                                <p>{this.state.PTime.Fajr}</p>
                                            </div>
                                        </div>
                                    </Bounce >
                                </div>

                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce top>

                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>شروق الشمس </p>
                                                <p>{this.state.PTime.Sunrise}</p>
                                            </div>
                                        </div>
                                    </Bounce >
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce top>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>الظهر </p>
                                                <p>{this.state.PTime.Dhuhr}</p>
                                            </div>
                                        </div>
                                    </Bounce >
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce right>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>العصر </p>
                                                <p>{this.state.PTime.Asr}</p>
                                            </div>
                                        </div>
                                    </Bounce >

                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce bottom>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>المغرب </p>
                                                <p>{this.state.PTime.Maghrib}</p>
                                            </div>
                                        </div>
                                    </Bounce >

                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>العشاء </p>
                                                <p>{this.state.PTime.Isha}</p>
                                            </div>
                                        </div>
                                    </Bounce >

                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                                    <Bounce bottom>
                                        <div className="boxPrayerTimes">
                                            <div>
                                                <p>منتصف الليل </p>
                                                <p>{this.state.PTime.Midnight}</p>
                                            </div>
                                        </div>
                                    </Bounce >
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default PrayerTime;