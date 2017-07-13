import React from 'react';

class AutoComplete extends React.Component {
  constructor(props){
    super(props);
    this.state = { inputVal: '' };
    this.enterValue = this.enterValue.bind(this);
    this.selectName = this.selectName.bind(this);
  }//constructor ends

  enterValue(event){
    this.setState({ inputVal: event.currentTarget.value });
  }

  selectName(event) {
    let name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    const matches = [];
    if (this.state.inputVal.length === 0) {
      return this.props.names;
    }

    this.props.names.forEach(name => {
      let sub = name.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }
    return matches;
  }

  render(){
    let listValues = this.matches().map((name, idx) => {
        return (
          <li key={idx} onClick={this.selectName}>{name}</li>
        );
      });
    return(
      <div>

        <h1>Search</h1>
        <div className="autoComplete">
        <input
            onChange={this.enterValue}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
            { listValues }
          </ul>
        </div>
      </div>
    );
  }//render ends
}//class end

export default AutoComplete;
