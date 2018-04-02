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
                            { entry.getIn(["data", "mainTitle"]) }
                        </h1>

                        <div className="landing-btn-wrap">
                            <a href="/signup/" className="landing-btn landing-btn--signup" aria-label="button">sign up</a>
                        </div>
                    </section>
                </div>
            </div>

            <section className="landing-preview">
                <div className="container column-wrap">
                    <div className="column-6">
                        <h3 className="landing-title">
                            { entry.getIn(['data', 'videoTitle']) }
                        </h3>
                        <p className="landing-text-content landing-preview__text-content">
                            { entry.getIn(['data', 'videoDescr']) }
                        </p>
                        <div className="landing-btn-wrap landing-btn-wrap--landing-preview">
                            <a href="/signup/" className="landing-btn landing-btn--landing-preview" aria-label="button">request a demo</a>
                        </div>
                    </div>
                    <div className="column-6">
                        <div className="landing-preview__video-wrap">
                            <img src="/img/vimages/laptop.png" alt=""/>
                            <button className="landing-preview__video-link modal-btn" data-modal=".banner-modal">
                                <img src="/img/vimages/play-laptop.png" alt="#"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section class="landing-infographic">
              <div class="container">

                <h3 class="landing-infographic__title">
                  { entry.getIn(['data', 'infoTitle']) }
                </h3>
                <p class="landing-infographic__descr">
                  { entry.getIn(['data', 'infoDescr']) }
                </p>
                <div class="landing-infographic__wrapper">
                  <img src={item.get('infoImg') && getAsset(item.get('infoImg'))} alt="infographic" class="landing-infographic__img"/>
                </div>
                <p class="landing-infographic__sub-descr">
                  { entry.getIn(['data', 'infoSubDescr']) }
                </p>

              </div>
            </section>

            <section className="landing-trusted">
                <div className="container">
                    <h3 className="landing-trusted__title">Trusted by:</h3>
                    <ul className="landing-trusted__list">
                        {(entry.getIn(["data", "trusted"]) || []).map((item, index) => {
                            return <li className="landing-trusted__item" key={index}>
                                <img src={item.get("logo") && getAsset(item.get("logo"))} className="landing-trusted__img"/>
                            </li>
                        })}
                    </ul>
                </div>
            </section>

            <section className="landing-features">
                <div className="container">
                    <h3 className="landing-title landing-title--features">
                        { entry.getIn(['data', 'featureTitle']) }
                    </h3>

                    <ul className="landing-features__list">
                        {(entry.getIn(["data", "feature"]) || []).map((item, index) => {
                            return <li className="landing-features__item" key={index}>
                                <figure className="landing-features__img-container">
                                    <span className="landing-features__img-wrap">
                                        <img src={item.get('ico') && getAsset(item.get('ico'))} alt="" />
                                    </span>
                                    <figcaption className="landing-features__img-descr">
                                        <p className="landing-text-content">
                                            { item.get('content') }
                                        </p>
                                    </figcaption>
                                </figure>
                            </li>
                        })}
                    </ul>
                </div>
            </section>


            <section className="landing-different">
                <div className="container">
                    <h3 className="landing-title landing-title--landing-different">How Visyond is different</h3>
                    <div className="column-wrap">
                        <div className="column-6 different--left">

                        { widgetFor('howTo') }
                        </div>
                        <div className="column-6 different--right">
                            <figure className="landing-different__img-container">
                                <span className="landing-different__img-wrap">
                                    <img src={getAsset(entry.getIn(['data', 'howToPhoto']))} alt="" />
                                </span>
                                <figcaption className="landing-different__img-descr-wrap">
                                    <p className="landing-different__img-descr">
                                        { entry.getIn(["data", "howToAsked"]) }
                                    </p>
                                    <address className="landing-different__img-address">
                                        {widgetFor('howToCompany')}
                                    </address>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="landing-different__btn-wrap">
                        <a href="#" className="landing-btn landing-btn--landing-preview" aria-label="button">request a demo</a>
                    </div>
                </div>
            </section>

            <section className="landing-casestudy">
                <div className="container">
                    <h3 className="landing-title landing-title--landing-casestudy">Case study</h3>

                    <ul className="landing-casestudy__list">
                        {(entry.getIn(["data", "case"]) || []).map((item, index) => {
                            return <li className="landing-casestudy__item" key={index}>
                                <a href={item.get('caseLink')} className="landing-casestudy__link">
                                    <img src={item.get('caseIco') && getAsset(item.get('caseIco'))} />
                                    <h3 className="landing-casestudy__title">
                                        { item.get('caseDescr') }
                                    </h3>
                                </a>
                            </li>
                        })}
                    </ul>

                </div>
            </section>

            <section className="landing-challenge">
                <div className="container">
                    <h3 className="landing-title landing-title--landing-challenge">{entry.getIn(['data', 'challengeTitle'])}</h3>

                    <ul className="landing-challenge__list">
                        {(entry.getIn(["data", "challenge"]) || []).map((item, index) => {
                            return <li className="landing-challenge__item" key={index}>
                                <a href="#" className="landing-challenge__link">
                                    <span className="landing-challenge__icon">
                                        <img src={item.get('caseIco') && getAsset(item.get('caseIco'))} alt="" />
                                    </span>
                                    <p className="landing-challenge__descr">
                                        {item.get('caseDescr')}
                                    </p>
                                </a>
                            </li>
                       })}
                    </ul>
                </div>
            </section>

            <section className="landing-features-reverse">
                <div className="container">
                    <h3 className="landing-title landing-title--landing-features-reverse">{ entry.getIn(["data", "featuresTitle"]) }</h3>
                    <div className="landing-features-reverse__item-wrap">
                        {(entry.getIn(["data", "features"]) || []).map((item, index) => {
                            return <article className="landing-features-reverse__item" key={index}>
                                <figure className="landing-features-reverse__img-container column-wrap">
                                    <span className="landing-features-reverse__img-wrap column-6">
                                        <img src={item.get('featureImg') && getAsset(item.get('featureImg'))} alt="" />
                                    </span>
                                    <figcaption className="landing-features-reverse__img-descr-wrap column-6">
                                        <h3 className="landing-features-reverse__img-title">
                                            { item.get('title') }
                                        </h3>
                                        <p className="landing-features-reverse__img-descr landing-text-content">
                                            { item.get('descr') }
                                        </p>
                                        <a href="{{ $el.linkPath }}" className="landing-features-reverse__link">
                                            { item.get('linkDescr') }
                                        </a>
                                    </figcaption>
                                </figure>
                            </article>
                        })}
                    </div>
                    <div className="landing-features-reverse__btn-wrap">
                        <a href="#" className="landing-btn landing-btn--landing-preview" aria-label="button">request a demo</a>
                    </div>
                </div>
            </section>

            <section className="landing-featured">
                <div className="container">
                    <h3 className="landing-title landing-title--landing-featured">As featured in</h3>

                    <ul className="landing-featured__list">
                        {(entry.getIn(["data", "featured"]) || []).map((item, index) => {
                            return <li className="landing-featured__item" key={index}>
                                <img src={ item.get('logo') && getAsset(item.get('logo'))} alt="" />
                            </li>
                        })}
                    </ul>

                    <ul className="landing-featured__list-comment">
                        {(entry.getIn(["data", "featured"]) || []).map((item, index) => {
                            return <li className="landing-featured__list-comment-item" key={index}>
                                <p>
                                    { item.get('descr') }
                                </p>
                            </li>
                        })}
                    </ul>
                </div>
            </section>


            <section className="pricing">
                <div className="container">
                    <h3 className="landing-title landing-title--pricing">
                        { entry.getIn(["data", "pricingTitle"]) }
                    </h3>
                    <h4 className="pricing__subtitle">
                        { entry.getIn(["data", "firstPricingSubTitle"]) }
                        <p>
                            { entry.getIn(["data", "secondPricingSubTitle"]) }
                        </p>
                    </h4>

                    <ul className="pricing__list">
                        <li className="pricing__item">
                            <article className="pricing__card">
                                <div className="pricing__title-wrap">
                                    <h3 className="pricing__title">
                                        { entry.getIn(["data", "leftCardTitle"]) }
                                    </h3>
                                    <h4 className="pricing__card-subtitle">
                                        { entry.getIn(["data", "leftCardSubTitle"]) }
                                    </h4>
                                </div>
                                <ul>
                                    {(entry.getIn(["data", "leftCardPoint"]) || []).map((item, index) => {
                                        return <li key={index}>
                                            { item.get('line') }
                                        </li>
                                    })}
                                </ul>
                                <div className="landing-btn-wrap landing-btn-wrap--pricing">
                                    <a href="/signup/" className="landing-btn landing-btn--landing-preview" aria-label="button">get quote</a>
                                </div>
                            </article>
                        </li>
                        <li className="pricing__item pricing__item--middle">
                            <article className="pricing__card">
                                <div className="pricing__title-wrap">
                                    <h3 className="pricing__title">{ entry.getIn(["data", "middleCardTitle"]) }</h3>
                                    <h4 className="pricing__card-subtitle">{ entry.getIn(["data", "middleCardSubTitle"]) }</h4>
                                </div>
                                <ul>
                                    {(entry.getIn(["data", "middleCardPoint"]) || []).map((item, index) => {
                                        return <li key={index}>
                                            { item.get('line') }
                                        </li>
                                    })}
                                </ul>
                                <div className="landing-btn-wrap landing-btn-wrap--pricing">
                                    <a href="/signup/" className="landing-btn landing-btn--landing-preview" aria-label="button">get quote</a>
                                </div>
                            </article>
                        </li>
                        <li className="pricing__item">
                            <article className="pricing__card">
                                <div className="pricing__title-wrap">
                                    <h3 className="pricing__title">
                                        { entry.getIn(["data", "rightCardTitle"]) }
                                    </h3>
                                    <h4 className="pricing__card-subtitle">
                                        { entry.getIn(["data", "rightCardSubTitle"]) }
                                    </h4>
                                </div>
                                <ul>
                                    {(entry.getIn(["data", "middleCardPoint"]) || []).map((item, index) => {
                                       return <li key={index}>
                                            {item.get('line')}
                                        </li>
                                    })}
                                </ul>
                                <div className="landing-btn-wrap landing-btn-wrap--pricing">
                                    <a href="/signup/" className="landing-btn landing-btn--landing-preview" aria-label="button">get  quote</a>
                                </div>
                            </article>
                        </li>
                    </ul>

                    <div className="price__asked-wrap">
                        <p className="price__asked-descr">
                        {entry.getIn(["data", "priceClientAsked"])}
                        </p>
                        <address className="price__asked-company">{ entry.getIn(['data', 'priceClientCompany']) }</address>
                        <img src={getAsset(entry.getIn(["data", "priceClientCompanyLogo"]))}  className="price__asked-img"/>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}
