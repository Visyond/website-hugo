import React from 'react';
import format from 'date-fns/format';

export default class Landings extends React.Component {
    render() {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));
        return <div>

            <h1>Hello, Landings</h1>
        </div>
    }
    
}