import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Weather from './frontend/weather';
import AutoComplete from './frontend/autocomplete';
import Tab from './frontend/tabs';

const Names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const Panes = [
	 {title: 'one', content: 'I am the first'},
   {title: 'two', content: 'Second pane here'},
   {title: 'three', content: 'Third pane here'}
];

class Root extends React.Component {
  render() {
    return(
      <div>
        <Clock />
        <Weather />
				<br />
        <div className='interactive'>
				  <AutoComplete names={Names} />
					<Tab panes={Panes}/>
        </div>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Root/>, root);
});
