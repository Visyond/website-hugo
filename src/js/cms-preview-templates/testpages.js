import React from "react";
import format from "date-fns/format";

export default class TestPages extends React.Component {
	render() {
		const {entry, widgetFor, getAsset} = this.props;
    	let image = getAsset(entry.getIn(["data", "image"]));

    	return <div>
	    	<div className="simplepage-title-wrap" style={{
        		background:image && `url(${image}) center center no-repeat`
      		}}>
				<h1 className="simplepage__title">{ entry.getIn(["data", "title"]) }</h1>
	    	</div>
			<div className="simplepage-content">
				{ widgetFor("body") }
			</div>
    	</div>;
	}
}
