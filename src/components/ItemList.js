import React, {Component} from "react";


class ItemList extends Component{
    constructor(props){
        super(props);
    }

    getItem(items) {
        return items.map(item => {
            return (
                <div className="col s12 l6 _item">
                    <div class="card">
                        <div class="card-image">
                            <img alt="" src={item.url} />
                            <span class="card-title">{item.title}</span>
                        </div>
                        <div class="card-content">
                            <p>{item.description}</p>
                        </div>
                    </div>
                </div>
            );
        });
    }




    render(){
        return (
            <div className="container">
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