import React from 'react';
import format from 'date-fns/format';
export default class HomeTest extends React.Component {
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "topImage"]));

        return (
            <div>
            <div className="hometest ht">

              <div className="ht-top">
                <h2 className="ht-top__title">
                  { entry.getIn(['data', 'topTitle']) }
                </h2>

                <div className="ht-top__under-title">
                  { entry.getIn(['data', 'topSubTitle']) }
                </div>

                <div className="ht-top__btns-wrap">
                  <a href={ entry.getIn(['data', 'signUpURL']) } className="ht-link ht-link--sign-up">
                    free sign up
                  </a>

                  <button className="ht-link ht-link--btn js-btn-video">
                    watch video
                  </button>

                  <a href={ entry.getIn(['data', 'requestURL']) } className="ht-link ht-link--request">
                    request a demo
                  </a>
                </div>

                <img src={ entry.getIn(['data', 'topImage']) } alt="image" className="ht-top__img"/>

                <div className="ht-top__popup js-popup">
                  <div className="ht-top__iframe-wrap">
                    <button className="ht-top__popup-close js-popup-close"></button>
                    <p>
                      { entry.getIn(['data', 'watchVideoURL']) }
                    </p>

                  </div>
                </div>
              </div>

              <section className="ht-capabilities">

                <ul className="ht-capabilities__modules">
                {(entry.getIn(["data", "capabilitiesList"]) || []).map((item, index) => {
                    return <li className="ht-capabilities__block" key={index}>
                    <img src={item.get('image')} alt="save time" className="ht-capabilities__img"/>

                    <div className="ht-capabilities__descr">
                      {item.get('text')}
                    </div>
                  </li>
                  })}
                </ul>
              </section>

              <section className="ht-trusted">
                <h3 className="ht-trusted__title">
                  { entry.getIn(['data', 'trustedTitle']) }
                </h3>
                <div className="ht-trusted__wrapper">
                <ul className="ht-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <li key={index} className="ht-trusted__logo-item">
                        <img src={ item.get('logo') } className="landing-trusted__img"/>
                       </li>
                  })}
                </ul>
                </div>
              </section>

              <ul className="ht-info">
              {(entry.getIn(["data", "infoBlockFirst"]) || []).map((item, index) => {
                  return <li className="ht-info__block" key={index}>
                  <img src={ item.get('image') } alt="collaborate on spreadsheets" className="ht-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="ht-info__block-lines"/>

                  <section className="ht-info__text-wrap">
                    <h3 className="ht-info__block-title">
                      { item.get('title') }
                    </h3>

                    <div className="ht-info__block-descr">
                      { item.get('descr') }
                    </div>
                    <a href={ item.get('link') } className="ht-link ht-link--learn-more">
                      learn more
                    </a>
                  </section>
                </li>
                })}
              </ul>

              <section className="ht-studies">
                <h3 className="ht-studies__title">
                  { entry.getIn(['data', 'studiesTitle']) }
                </h3>
                <ul className="ht-studies__blocks">
                {(entry.getIn(["data", "studiesBlock"]) || []).map((item, index) => {
                    return <li className="ht-studies__block" key={index}>
                    <div className="ht-studies__img-wrap">
                      <img src={item.get('image')} alt="case" className="ht-studies__img"/>
                    </div>

                    <section className="ht-studies__text-wrap">
                      <h3 className="ht-studies__block-title">
                        {item.get('title')}
                      </h3>

                      <cite className="ht-studies__block-descr">
                        {item.get('text')}
                      </cite>

                      <p className="ht-studies__block-author">
                        {item.get('author')}
                      </p>

                      <a href={item.get('linkUrl')} className="ht-studies__block-link">
                        {item.get('linkText')}>>
                      </a>
                    </section>
                  </li>
                })}
                </ul>
              </section>

              <section className="customers">
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
                </section>

              <div className="ht-provides">
                <section className="ht-provides__wrap">
                  <h3 className="ht-provides__title">
                    { entry.getIn(['data', 'providesTitle']) }
                  </h3>

                  <ul className="ht-provides__list">
                  {(entry.getIn(["data", "providesList"]) || []).map((item, index) => {
                      return <li className="ht-provides__item" key={index}>
                      {item.get('text')}
                    </li>
                  })}
                  </ul>
                </section>
                <div className="ht-provides__img-wrap">
                  <img src="/img/home/v_notebook.png" alt="notebook" className="ht-provides__img"/>
                </div>
              </div>

              <section className="ht-bottom">
                <h3 className="ht-bottom__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <button className="ht-link ht-link--request">
                  request a demo
                </button>
              </section>

            </div>
            </div>
        );
    }
}
