import React from 'react';
import format from 'date-fns/format';

export default class Press extends React.Component {
    render () {
        const {entry, getAsset, widgetFor} = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));
        let whiteSpace = / /gi;

        let topBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgImage']).replace(whiteSpace, '%20') + ")"}

        return (<div>
            {/*first section*/}
            <div className="press1st" style={topBgImage}>
                <h1 className="press1st__title">
                    {entry.getIn('topTitle')}
                </h1>
            </div>
            {/*//first section*/}

            {/*second section*/}
            <div className="press2nd">
                <ul className="press2nd__list">
                    {(entry.getIn(['data', 'pressarticles']) || []).map((item, index) => {
                        return <li className="press2nd__item" key={index}>
                            <a href={item.get('url')} className="press2nd__link">
                                <div className="press2nd__top">
                                    <span className="press2nd__company-wrap">
                                        <img src={item.get('logo')} />
                                    </span>
                                    <div className="press2nd__company-person-wrap">
                                        <span className="press2nd__company-person-img">
                                            <img src={item.get('photo')} alt="photo" />
                                        </span>
                                        <div>
                                            <span className="press2nd__company-person-name">{item.get('name')}</span>
                                            <span className="press2nd__company-person-company-name">
                                                {item.get('company')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="press2nd__bottom">
                                    <h3 className="press2nd__title">{item.get('title')}</h3>
                                    <ul className="press2nd__tag-list">
                                        {(item.get('tags') || []).map((item, index) => {
                                            return <li className="press2nd__tag-item" key={index}>
                                            {item.get('tagTitle')}
                                            </li> 
                                        })}
                                    </ul>
                                </div>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
            {/*//second section*/}
        </div>)
    };
}