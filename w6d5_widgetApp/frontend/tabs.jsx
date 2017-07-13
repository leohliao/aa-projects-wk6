import React from 'react';

class Tab extends React.Component {
  constructor(props){
    super(props);
    this.state = { currentPane: 0 };
    this.selectedTab = this.selectedTab.bind(this);
  }//constructor

  selectedTab(num){
    this.setState({ currentPane: num });
  }//selectedTab

  render(){
    let paneNum = this.props.panes[this.state.currentPane];

    return(
      <div>
        <h1>Tabs</h1>
      </div>
    );
  }//render
}//class end

export default Tab;
