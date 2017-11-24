import React, {Component} from "react";


class ItemList extends Component{

    getItem(items) {
        return items.map(item => {
            return (
                <div className="col s12 l6 _item" key={item.id}>
                    <div className="card">
                        <div className="card-image">
                            <img alt="" src={item.url} />
                            <span className="card-title">{item.title}</span>
                        </div>
                        <div className="card-content">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }




    render(){
        return (
            <div>
                {this.props.children}
                <div className="row">
                    {this.getItem(this.props.items)}
                </div>
            </div>
        )
    }






}
export {ItemList}
export default ItemList