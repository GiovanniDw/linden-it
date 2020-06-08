import React, { Component } from 'react';
import StyledHeading from './StyledHeading.js'

// class Title extends Component {
// 	render() {
// 		return (
// 			<StyledHeading>
// 				{this.props.title}
// 			</StyledHeading>
// 		);
// 	}
// }

export const Title = ({ title }) => {
	return (
		<StyledHeading>
			{title}
		</StyledHeading>
	);
}

export default Title;
