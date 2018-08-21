import React from 'react';
import format from 'date-fns/format';

export default class FeaturesPage extends React.Component {
	render() {
		const { entry, widgetFor, getAsset } = this.props;
		let image = getAsset(entry.getIn(['data', 'image']));

		return (
			<div>
				<div className="first-section fp1st">
			
					<h2 className="fp1st__title">
				  	{entry.getIn(['data', 'topTitle'])}
					</h2>

					<div className="fp1st__under-title">
				  	{entry.getIn(['data', 'topSubTitle'])}
					</div>
		  		</div>

		  </div>
		);
	}
}
