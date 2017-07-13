 import React from 'react';

 class Counts extend React.Component {

 // constructor(props){
 // super(props)
 // }
 // render () {
 // return (
 // 	<ul>
 // 	{
 // 		this.props.previousCounts.map(count => <li>{count}</li>)
 // 	}
 // 	</ul>
 // 	)
 // }
 // }

///*****------------------------------------
/// this is functional component, so define a method instead..
/// use functional whenever there is only render function in the class.

 // const Counts = ({ previousCounts }) => (
 // <ul>
 // 	{
 // 		props.previousCounts.map(count, idx => <li key={idx}>{count})
 // 	}
 // </ul>
 //  );
///*****------------------------------------

class Counts extend React.Component {
	///Component life cycle:
	componentWillMount() 
	componentDidMount() // Will use a lot
	// get info to display info to user 
	// put ajax request

	componentWillReceiveProps(nextProps) 
	// link with click and event 
	// Reset comes back here
	// interact with user, such as another ajax request
	
	componentWillUpdate (nextProps, nextState)
	componentDidUpdate(nextProps, nextState)
	ComponentWillUnmount()

// render () {
 // return (
 // 	<ul>
 // 	{
 // 		this.props.previousCounts.map(count => <li>{count}</li>)
 // 	}
 // 	</ul>
 // 	)
 // }


}



 export default Counts;



