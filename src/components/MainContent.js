import React from 'react';

const MainContent = (props) => {
    return(

            <div className="col s9">
                {props.children}
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">{props.content.title}</span>
                    <p>{props.content.description}</p>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Ejercicios Clase 1</span>
                        <p>Ej.1 Hacer click en un hijo y que el padre haga algo. Mirar states en lugar de props en documentacion</p>
                        <p>Ej.2 Que el MainContent pueda renderizar components sin definirlos (recibirlos por props). Mirar childrens</p>
                        <p>Mirar states y childrens en documentacion</p>
                    </div>
                </div>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Ejercicios Clase 2</span>
                        <p>Ej.1 Cuando cambie de seccion lateral el filered itemList debe cammbiar (mirar lifeCicle</p>
                    </div>
                </div>
            </div>


    );
};


export default MainContent;