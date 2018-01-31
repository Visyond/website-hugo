import React from 'react';
import format from 'date-fns/format';

export default class CaseStudies extends React.Component {
    render () {
        const {entry, getAsset, widgetFor} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));

        return (<div>
            <div className="case-study-title-wrap casestudies-title-wrap">
                <div className="container container--case-study-title-wrap">
                    <h1 className="case-study__title">
                        Case studies
                    </h1>
                </div>
            </div>
            <div className="container">
                <ul class="casestudies__list">
                {(entry.getIn(["data", "casestudies"]) || []).map((item, index) => {
                <li class="casestudies__item">
                    <a href={item.get('url')} class="casestudies__link">
                        <div class="casestudies__top">
                            <span class="casestudies__company-wrap">
                                <img src={item.get('logo')} />
                            </span>
                            <div class="casestudies__company-person-wrap">
                                <span class="casestudies__company-person-img">
                                    <img src={item.get('photo')} alt="" />
                                </span>
                                <div>
                                    <span class="casestudies__company-person-name">
                                        { item.get('name') }
                                    </span>
                                    <span class="casestudies__company-person-company-name">
                                        { item.get('company') }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="casestudies__bottom">
                            <h3 class="casestudies__title">
                                { item.get('title') }
                            </h3>
                            <ul class="casestudies__tag-list">
                                
                                <li class="casestudies__tag-item"></li>
                
                            </ul>
                        </div>
                    </a>
                </li>
                })}
            </ul>
            </div>
        </div>)
    };
}