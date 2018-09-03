import React from 'react';
import format from 'date-fns/format';

export default class Features extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        return (
            <div>
            <div className="features ftr">

              <div className="ftr-top">
                <h2 className="ftr-top__title">
                  { entry.getIn(['data', 'topTitle']) }
                </h2>

                <div className="ftr-top__under-title">
                  { entry.getIn(['data', 'topSubTitle']) }
                </div>

                <div className="ftr-top__btns-wrap">
                <a href={ entry.getIn(['data', 'signUpURL']) } className="ftr-link ftr-link--sign-up">
                  free sign up
                </a>

                <button className="ftr-link ftr-link--btn js-btn-video">
                  watch video
                </button>

                <a href={ entry.getIn(['data', 'requestURL']) } className="ftr-link ftr-link--request">
                  request a demo
                </a>
                </div>

                <div className="ftr-top__popup js-popup">
                  <div className="ftr-top__iframe-wrap">
                    <button className="ftr-top__popup-close js-popup-close"></button>
                    <p>
                      { entry.getIn(['data', 'watchVideoURL']) }
                    </p>

                  </div>
                </div>
              </div>

              <ul className="ftr-info">
              {(entry.getIn(["data", "infoBlockFirst"]) || []).map((item, index) => {
                  return <li className="ftr-info__block" key={index}>
                  <img src={ item.get('image') } alt="collaborate on spreadsheets" className="ftr-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="ftr-info__block-lines"/>

                  <section className="ftr-info__text-wrap">
                    <h3 className="ftr-info__block-title">
                      { item.get('title') }
                    </h3>

                    <div className="ftr-info__block-descr">
                      { item.get('descr') }
                    </div>

                    <a href={ item.get('link') } className="ftr-link ftr-link--learn-more">
                      learn more
                    </a>
                  </section>
                </li>
                })}
              </ul>

              {/*<section className="ftr-capabilities">

                <ul className="ftr-capabilities__modules">
                {(entry.getIn(["data", "capabilitiesList"]) || []).map((item, index) => {
                    return <li className="ftr-capabilities__block" key={index}>
                    <img src={item.get('image')} alt="save time" className="ftr-capabilities__img"/>

                    <div className="ftr-capabilities__descr">
                      {item.get('text')}
                    </div>
                  </li>
                  })}
                </ul>
              </section>*/}

              <div className="ftr-features">
                <h2 className="ftr-features__title">
                  { entry.getIn(['data', 'featuresTitle']) }
                </h2>
                <div className="ftr-features__cards">
                {(entry.getIn(['data', 'featuresCards']) || []).map((cards, index) => {return <a href={cards.get('link')} className="ftr-features__card">
                    <div className="ftr-features__card-image-wrap">
                      <img src={cards.get('icon')} alt="icon" className="ftr-features__card-image" />
                    </div>
                    
                    <h3 className="ftr-features__card-title">
                      {cards.get('title')}
                    </h3>

                    <p className="ftr-features__card-text">
                      {cards.get('text')}
                    </p>
                  </a>})}
                </div>
              </div>

              <section className="ftr-trusted">
                <h3 className="ftr-trusted__title">
                  { entry.getIn(['data', 'trustedTitle']) }
                </h3>
                <div className="ftr-trusted__wrapper">
                <ul className="ftr-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <li key={index} className="home-trusted__logo-item">
                        <img src={ item.get('logo') } className="landing-trusted__img"/>
                       </li>
                  })}
                </ul>
                </div>
              </section>

              {/*<section className="ftr-studies">
                <h3 className="ftr-studies__title">
                  { entry.getIn(['data', 'studiesTitle']) }
                </h3>
                <ul className="ftr-studies__blocks">
                {(entry.getIn(["data", "studiesBlock"]) || []).map((item, index) => {
                    return <li className="ftr-studies__block" key={index}>
                    <div className="ftr-studies__img-wrap">
                      <img src={item.get('image')} alt="case" className="ftr-studies__img"/>
                    </div>

                    <section className="ftr-studies__text-wrap">
                      <h3 className="ftr-studies__block-title">
                        {item.get('title')}
                      </h3>

                      <cite className="ftr-studies__block-descr">
                        {item.get('text')}
                      </cite>

                      <p className="ftr-studies__block-author">
                        {item.get('author')}
                      </p>

                      <a href={item.get('linkUrl')} className="ftr-studies__block-link">
                        {item.get('linkText')}>>
                      </a>
                    </section>
                  </li>
                })}
                </ul>
              </section>*/}

              {/*<section className="customers">
                    <h3 className="customers__title homepage-title">{ entry.getIn(['data', 'studiesTitle']) }</h3>

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
                </section>*/}

              <div className="ftr-provides">
                <div class="ftr-provides__img-wrap">
                  <img src="/img/home/v_notebook.png" alt="notebook" class="ftr-provides__img"/>
                </div>
                <section className="ftr-provides__wrap">
                  <h3 className="ftr-provides__title">
                    { entry.getIn(['data', 'providesTitle']) }
                  </h3>

                  <ul className="ftr-provides__list">
                  {(entry.getIn(["data", "providesList"]) || []).map((item, index) => {
                      return <li className="ftr-provides__item" key={index}>
                      {item.get('text')}
                    </li>
                  })}
                  </ul>
                </section>
              </div>

              <section className="ftr-bottom">
                <h3 className="ftr-bottom__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <a href="{ entry.getIn(['data', 'botRequestURL']) }" className="ftr-link ftr-link--request">
                  request a demo
                </a>
              </section>

            </div>
            </div>
        );
    }
}
