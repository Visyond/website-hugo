import React from 'react';
import format from 'date-fns/format';

export default class CaseStudies extends React.Component {
    render () {
        const {entry, getAsset, widgetFor} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        return <div>
            lorem
        </div>
    };
}