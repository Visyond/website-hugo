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


                        return <li className="homepage-cards__item" key={index}>
                        <article className="function-card">
                            <div className="function-card__bg"
                                style={{ background:`url(${item.get('cardBackground')}) center center no-repeat` }}
                            ></div>
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

                <section className="trusted">
                    <h3 className="trusted__title homepage-title">Trusted by</h3>

                    <ul className="trusted__list">
                    {(entry.getIn(["data", "client"]) || []).map((item, index) => {
                        return <li className="trusted__item" key={index}>
                          <img src={item.get('clientIcon')} alt="" className="trusted__img" />
                        </li>
                    })}    
                    </ul>
                    
                </section>

                <section className="customers">
                    <h3 className="customers__title homepage-title">What the customers say</h3>

                    <ul className="customers__list">
                    {(entry.getIn(["data", "slider"]) || []).map((item, index) => {
                        return <li className="customers__item" key={index}>
                            <figure className="customers__img-container">
                                <span className="customers__img-wrap">
                                    <img src={ item.get('sliderphoto') } alt="" />
                                </span>

                                <figcaption className="customers__img-descr-wrap">
                                    <p className="customers__img-descr">{ item.get('sliderDescr') }</p>

                                    <span className="customers__img-author">{ item.get('slidercompany') }</span>
                                    <img src={ item.get('sliderlogo') } alt="" className="customers__img-company"/>
                                </figcaption>
                            </figure>
                        </li>
                    })}    
                    </ul>
                </section>
            </div>
        );
    }
}