import React from 'react';
import format from 'date-fns/format';

export default class Landings extends React.Component {
    render() {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "topImage"]));
        let bottomImage = getAsset(entry.getIn(["data", "bottomBg"]));
        return (
        <div className="landing">

            <div 
                className="landing-banner"
                style={{ background:image && `url(${image}) center center no-repeat` }}
                >
                <div className="container">
                    <section className="landing-banner__descr-wrap">
                        <h1 className="landing-banner__main-title">
                            { entry.getIn(["data", "title"]) }
                        </h1>
                        <p className="landing-banner__descr">
                            { entry.getIn(["data", "descr"]) }
                        </p>

                        <div className="landing-btn-wrap">
                            <a href="/signup/" className="landing-btn landing-btn--signup" aria-label="button">sign up</a>
                            <button className="landing-btn landing-btn--watch modal-btn" data-modal=".banner-modal">watch video</button>
                        </div>
                    </section>
                </div>
            </div>

            
            <div className="functions">
                <div className="container">
                    <ul className="functions__list">
                    {(entry.getIn(["data", "func"]) || []).map((item, index) => {
                        return <li className="functions__item" key={index}>
                                    <figure className="functions__img-container">
                                        <span className="function__img-wrap">
                                            <img src={item.get('icon')} alt="#" className="functions__img" />
                                        </span>
                                        <figcaption className="functions__img-descr">{ item.get('content') }</figcaption>
                                    </figure>
                                </li>   
                    })}
                                                      
                    </ul>
                </div>
            </div>

            <div className="features">
                <div className="container">
                    <ul className="features__list">
                    {(entry.getIn(['data', 'feature']) || []).map((item, index) => {
                        return <li className="features__item">
                                    <figure className="feature__img-container">
                                        <span className="feature__img-wrap">
                                            <img src={item.get('ico')} alt="lorem" />
                                        </span>
                                        <figcaption className="feature__descr-wrap">
                                            <h3 className="feature__img-title">{item.get('title')}</h3>
                                            <p className="feature__img-descr">{item.get('content')}</p>
                                        </figcaption>
                                    </figure>
                                </li>
                    })}
                        
                    </ul>
                </div>
            </div>

            <div className="testimonials">
                <div className="container testimonials--container">
                    <div className="testimonials__company-wrap">
                        <ul className="testimonials__company-list">
                        {(entry.getIn(['data', 'company']) || []).map((item, index) => { 
                            return  <li className="testimonials__company-item">
                                        <img src={item.get('logo')} alt="" className="testimonials__company-img" />
                                    </li>
                        })}
                        </ul>
                    </div>

                    <div className="testimonials__slider-wrap">
                        <h3 className="testimonials__title">Testimonials</h3>
                        <ul className="testimonials__slider-list">
                        {(entry.getIn(['data', 'testiSlider']) || []).map((item, index) => {
                            return
                            <li className="testimonials__slider-item">
                                    <p className="testimonials__slider-client-asked">{item.get('ask')}</p>

                                    <figure className="testimonials__slider-client-img-container">
                                        <span className="testimonials__slider-client-img-wrap">
                                            <img src={item.get('photo')} alt="client" />
                                        </span>
                                        <figcaption className="testimonials__slider-client-name">
                                            <span>{item.get('name')}</span>
                                        </figcaption>
                                    </figure>
                                </li>
                        })}
                        </ul>
                    </div>
                </div>
            </div>

            <section className="tour">
                <div className="container">
                    <h3 className="tour__main-title">Product tour</h3>

                    <ul class="tour__slider-button-list">
                        {(entry.getIn(['data', 'tour']) || []).map((item, index) => {
                            return
                                <li class="tour__slider-button-item">
                                    <button class="tour__slider-button">{item.get('btn')}</button>
                                </li>
                        })}
                    </ul>

                </div>

                <div className="tour__slider-wrap">
                    <ul className="tour__slider-list">
                    {(entry.getIn(['data', 'tour']) || []).map((item, index) => {
                        return
                            <li className="tour__slider-item">
                                <div className="container">
                                    <p className="tour__slider-descr">{item.get('descr')}</p>
                                    <figure className="tour__slider-img-container">
                                        <span className="tour__slider-img-wrap">
                                            <img src={item.get('img')} alt="" className="tour__slider-img" />
                                        </span>
                                    </figure>
                                </div>
                            </li>
                    })}
                    </ul>
                </div>
            </section>

            <div 
                className="errors"
                style={{ background:image && `url(${bottomImage}) center center no-repeat` }}
                >
                <div className="container">
                    <h3 className="errors__title">{entry.getIn(['data', 'bottomTitle'])}</h3>
                    <p className="errors__desc">
                        {entry.getIn(['data', 'bottomSubTitle'])}
                    </p>
                    <a href="/signup" className="header-user__link--sign-up sign-up--errors">sign up</a>
                </div>
            </div>
        </div>
        );
    }
    
}