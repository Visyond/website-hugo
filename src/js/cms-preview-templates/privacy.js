import React from "react";
import format from "date-fns/format";

export default class Privacy extends React.Component {
	render() {
		const {entry, widgetFor, getAsset} = this.props;
    	let image = getAsset(entry.getIn(["data", "image"]));

    	return <div>
	    	<section className="titleImage privacyPol">
	    		<div className="titleImageWrapper container-fluid" style={{backgroundImage: image && `url(${image})`}}>
		            <div className="row">
		                <h1 className="pagesTitle">{ entry.getIn(["data", "title"]) }</h1>
		            </div>
		        </div>
	    	</section>
	    	<section className="privacyPolicy">
	    		<div className="privacyPolicyWrapper container">
	    			<div className="row">
	    				<div className="col-md-2"></div>
	    					<div className="col-md-8">
								{ widgetFor("body") }
	    					</div>
	    				<div className="col-md-2"></div>
	    			</div>
	    		</div>
	    	</section>
    	</div>;
	}
}