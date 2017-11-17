import React, {Component} from "react";
import ItemList from "../components/ItemList";


class FilteredItemList extends Component{
    constructor(props){
        super(props);
        this.state = {
            items: props.items,
            filter: "Default"
        };

        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter(e){
        const filterValue = e.target.value;

        this.filterItems(filterValue);

        this.setState({
            filter: filterValue
        });
    }

    filterItems(filter){

        const items = this.props.items;

        const itemsFiltered = items.filter(item => {
            // if (item.title.match(filter) || item.description.match(filter)) {
            //     return true;
            // }
            // return false;
            return (item.title.match(filter) || item.description.match(filter))
        });

        this.setState({
            items: itemsFiltered
        });


    }

    render(){
        return(
            <ItemList items={this.state.items}>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" type="text" className="validate _filter" value={this.state.filter} onChange={this.changeFilter} defaultValue="Default"/>
                        </div>
                    </form>
                </div>
            </ItemList>
        )
    }
}

export {FilteredItemList}