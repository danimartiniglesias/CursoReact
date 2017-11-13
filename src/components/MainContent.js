import React from 'react';

const MainContent = (props) => {
    return(

            <div className="col s6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{props.content.title}</span>
                    <p>{props.content.description}</p>

                        <p>Ej.1 Hacer click en un hijo y que el padre haga algo. Mirar states en lugar de props en docu</p>
                        <p>Ej.2 Que el MainContent pueda renderizar components sinb definirlos (recibirlos por props). Mirar childrens</p>
                        <p>Mirar states y childrens en documentai</p>
                    </div>
                </div>
            </div>
    );
};


export default MainContent;