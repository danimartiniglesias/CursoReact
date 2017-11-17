import React from 'react';
import MainContent from "../components/MainContent";
import SideBar from "../components/Sidebar";

const Content = (props) => {
    return (
        <div className="container">
            <div className="row">
            <h1>Hola Mundo</h1>
            <SideBar sections={props.sections}/>
            <MainContent content={props.sections[0].content} />
            </div>
        </div>
    );
};

export default Content;

