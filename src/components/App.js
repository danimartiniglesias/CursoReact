import React, { Component } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import {sections} from "../data";
import {ContentClass} from "./ContentClass";
class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <ContentClass sections={sections}/>
            <Footer/>
        </div>
    );
  }
}

export default App;
