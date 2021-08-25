import React from 'react';
import Education from './Education';
import Experience from './Experience';
import General from './General';

class DisplayMain extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props) {
			console.log(this.props.data.generalData);
			return (
				<div>
					<h1>Cv Preview</h1>
					<General data={this.props.data.generalData} />
					<Education data={this.props.data.educationData} />
					<Experience data={this.props.data.experienceData} />
				</div>
			);
		}
	}
}

export default DisplayMain;
