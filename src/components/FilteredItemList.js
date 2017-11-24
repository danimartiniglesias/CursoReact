import React, {Component} from "react";
import ItemList from "../components/ItemList";


class FilteredItemList extends Component{
    constructor(props){
        super(props);

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

    componentWillMount(){
        this.setState({
            items:this.props.items,
            filter:""
        });

        console.time("Component Mount");
    }

    componentDidMount(){
        console.timeEnd("Component Mount");
    }
    componentWillUpdate(){
        console.time("Component Update");
    }
    componentDidUpdate(){
        console.timeEnd("Component Update");
    }

    componentWillReceiveProps(newprops){
        if(newprops.items && newprops.items !== this.props.items){
            this.setState({
                items:newprops.items,
                filter: ""
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState !== this.state){
            return true;
        }
        return false;
    }

    render(){
        return(
            <ItemList items={this.state.items}>
                <div className="row">
                    <form className="col s12">
                        <div className="input-field">
                            <i className="material-icons prefix">search</i>
                            <input placeholder="Filtra por el título o la descripción" id="icon_prefix" type="text" className="validate _filter" value={this.state.filter} onChange={this.changeFilter} defaultValue="Default"/>
                        </div>
                    </form>
                </div>
            </ItemList>
        )
    }
}

export {FilteredItemList}