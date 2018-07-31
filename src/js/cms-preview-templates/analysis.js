import React from 'react';
import format from 'date-fns/format';

export default class Analysis extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        return (
          <div>
          {/* FIRST SECTION */}
          <div className="first-section an1st">
            
            <h2 className="an1st__title">
              {entry.getIn(['data', 'topTitle'])}
            </h2>

            <div className="an1st__under-title">
              {entry.getIn(['data', 'topSubTitle'])}
            </div>

          </div>
          {/* //FIRST SECTION */}

          </div>
        );
    }
}
