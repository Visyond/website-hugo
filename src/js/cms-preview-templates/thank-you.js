import React from 'react';
import format from 'date-fns/format';

export default class Thx extends React.Component {
    render() {
      const { entry, widgetFor, getAsset, widgetsFor } = this.props;
      let image = getAsset(entry.getIn(["data", "image"]));
      let client = getAsset(entry.getIn(["data", "client"]));
      return (
        <div className="thx">

            <header className="thx__header">

                <h1 className="thx__header-text">
                    { entry.getIn(["data", "title"]) }
                </h1>                
            </header>

            <div className="thx__body">
                <p className="thx__text">
                    { entry.getIn(["data", "text"]) }
                </p>
                {{ end }}
            </div>
        </div>
      );
    }
}