import React from 'react';
import format from 'date-fns/format';

export default class CaseStudy extends React.Component {
    render () {
        const { entry, widgetFor, getAsset } = this.props;

        return (
            <div>
                <section className="privacyPolicy">
                    <div className="privacyPolicyWrapper container">
                        <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8">{widgetFor('body')}</div>
                            <div className="col-md-2" />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}