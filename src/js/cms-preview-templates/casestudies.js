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
                <ul className="casestudies__list">
                {(entry.getIn(["data", "casestudies"]) || []).map((item, index) => {
                return <li className="casestudies__item" key={index}>
                    <a href={item.get('url')} className="casestudies__link">
                        <div className="casestudies__top">
                            <span className="casestudies__company-wrap">
                                <img src={item.get('logo')} />
                            </span>
                            <div className="casestudies__company-person-wrap">
                                <span className="casestudies__company-person-img">
                                    <img src={item.get('photo')} alt="" />
                                </span>
                                <div>
                                    <span className="casestudies__company-person-name">
                                        { item.get('name') }
                                    </span>
                                    <span className="casestudies__company-person-company-name">
                                        { item.get('company') }
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="casestudies__bottom">
                            <h3 className="casestudies__title">
                                { item.get('title') }
                            </h3>
                            <ul className="casestudies__tag-list">
                            {(item.get("tags") || []).map((tag, index) => {
                                return <li className="casestudies__tag-item" key={index}>
                                    {tag.get('tagTitle')}
                                </li>
                            })}
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