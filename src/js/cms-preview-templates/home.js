import React from 'react';
import format from 'date-fns/format';
export default class Home extends React.Component { 
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "topImage"]));

        return (
            <div>
                <section className="homepage-cards">
                    <ul className="homepage-cards__list">
                    {(entry.getIn(["data", "cards"]) || []).map((item, index) => {


                        <li className="homepage-cards__item" key={index}>
                        {index}
                        <article className="function-card">
                            <div className="function-card__bg" style="background: url({item.get('cardBackground')}) center center no-repeat"></div>
                            <a href="#" className="function-card__link">
                                <span className="function-card__icon">
                                    <img src={item.get('cardIcon')} />
                                </span>
                                <h3 className="function-card__title">
                                    {item.get('cardTitle')}
                                </h3>
                                <p className="function-card__descr">
                                    {item.get('cardDescr')}
                                </p>
                            </a>
                        </article>
                        </li>
                    })}
                    </ul>
                </section>
            </div>
        );
    }
}