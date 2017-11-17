import React, {Component} from "react";
import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import MainContentHeader from "../components/MainContentHeader";

class ContentClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            sectionSelected: props.sections[0]
        };
        this.onSectionSelected = this.onSectionSelected.bind(this);
    }

    onSectionSelected(idSecion, e){
        e.preventDefault();
        const selectedSection = this.props.sections.find(e => e.id === idSecion);
        this.setState({
            sectionSelected:selectedSection
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <h1>Hola Mundo</h1>
                    <div className={"card-panel blue lighten-"+this.state.sectionSelected.id}>
                        <p className="center-align">
                            Estas en la Seccion <strong>"{this.state.sectionSelected.name}"</strong>
                        </p>
                    </div>
                    <SideBar
                        sections={this.props.sections}
                        selectSetion={this.onSectionSelected}
                    />
                    {/*<MainContent*/}
                        {/*content={this.state.sectionSelected.content}*/}
                        {/*mainContentHeader={<MainContentHeader/> }*/}
                    {/*/>*/}
                    <MainContent content={this.state.sectionSelected.content}>
                        <MainContentHeader/>
                    </MainContent>
                </div>
            </div>
        )
    }
}

export {ContentClass};