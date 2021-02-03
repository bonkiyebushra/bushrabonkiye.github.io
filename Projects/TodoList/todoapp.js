
class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task,
        }
    }

    render () {
        return (<div className = 'list_item_container'>
           <label><input type = 'checkbox'></input>    {this.props.task}</label>
        </div>)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['buy food','5 pomodoros of studying'],
            deleteMode: false,
            disableAdd: true,
            input: ''
        }

        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addItem () {
        let currentList = this.state.list;
        currentList.push(this.state.input);
        console.log(currentList)
        this.setState({
            list : currentList
        }) 
    }

    removeItem () {
        
    }

    handleChange (event) {
        
        this.setState({
            input: event.target.value
        })
    }

    render() {
        const listItems = this.state.list.map ((item) =>  <ListItem task ={item} key = {item}/>)
        if(this.state.deleteMode) {
           return (<div>
                <div id='list'>
                {listItems}
                </div>
                <div id='buttons'>
                    <div className = "remove" ><button id = 'add_button' onClick = {this.addItem} >Add</button></div>
                    
                    <button id = 'remove_button' onClick = {this.removeItem} >Remove</button>
                </div>
                <input id = 'textfield' type='text' onChange = {this.handleChange} value= {this.state.input}/>
            </div>)
        } else {
            return (<div>
                <div id='list'>
                {listItems}
                </div>
                <div id='buttons'>
                    <button id = 'add_button' onClick = {this.addItem} >Add</button>
                    <button id = 'remove_button' onClick = {this.removeItem} >Remove</button>
                </div>
                <input id = 'textfield' type='text' onChange = {this.handleChange} value= {this.state.input}/>
            </div>)
        }
    }

}

ReactDOM.render(<App />, document.getElementById('container'));