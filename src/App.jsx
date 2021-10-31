import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Quran from './Components/Quran/Quran';
import PrayerTime from './Components/PrayerTime/prayerTime';
import Conversations from './Components/Conversations/Conversations';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import Notfound from './Components/Notfound/Notfound';
import idQuran from './Components/idQuran/idQuran';
import axios from 'axios';

class App extends Component {

     state = {
          ConversationsArr: [],
          QuranArr: [],
     };

     getConversations = async () => {
          let x = await axios.get(`https://api.hadith.sutanlab.id/books/muslim?range=1-300`)
          // console.log(x.data.data.hadiths);          
          this.setState({ ConversationsArr: x.data.data.hadiths })
     }

     getQuran = async () => {
          let x = await axios.get(`http://api.alquran.cloud/v1/meta`)
          // console.log(x.data.data.surahs);          
          this.setState({ QuranArr: x.data.data.surahs.references })
     }

     componentDidMount = () => {
          this.getConversations();
          this.getQuran();
     }

     render() {
          let { ConversationsArr, QuranArr } = this.state
          return (
               <>
                    < Navbar />
                    <Switch>
                         <Route exact path="/Home" component={Home} />
                         {/* <Route exact path="/Quran" component={Quran}/>  */}
                         <Route exact path="/Quran" render={(props) => <Quran {...props} QuranProps={QuranArr} />} />

                         <Route exact path="/PrayerTime" component={PrayerTime} />
                         <Route exact path="/Conversations" render={(props) => <Conversations {...props} ConversationsProps={ConversationsArr} />} />

                         <Route exact path="/Notfound" component={Notfound} />
                         <Route exact path="/idQuran/:number" component={idQuran} />
                         <Redirect from="/" exact to="/Home" />
                         <Redirect to="/Notfound" />
                    </Switch>
                    {/* < Footer /> */}
               </>
          );
     }
}

export default App;
