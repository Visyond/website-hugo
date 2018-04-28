import React from 'react';
import format from 'date-fns/format';
export default class HomeNew extends React.Component {
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        // let image = getAsset(entry.getIn(["data", "topImage"]));

        return (
            <div>
            <div className="new-home nh">

              <div className="nh-top">
                <h2 className="nh-top__title">
                  { entry.getIn(['data', 'topTitle']) }
                </h2>

                <div className="nh-top__under-title">
                  { entry.getIn(['data', 'topSubTitle']) }
                </div>

                <div className="nh-top__btns-wrap">
                  <button className="nh-link nh-link--sign-up">
                    sign up
                  </button>

                  <button className="nh-link nh-link--request">
                    request a demo
                  </button>
                </div>

                <img src={ entry.getIn(['data', 'topImage']) } alt="image" className="nh-top__img"/>
              </div>

              <section className="nh-trusted">
                <h3 className="nh-trusted__title">
                  { entry.getIn(['data', 'trustedTitle']) }
                </h3>

                <ul className="nh-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <li key={index}>
                        <img src={ item.get('logo') } className="landing-trusted__img"/>
                       </li>
                  })}
                </ul>
              </section>

              <ul className="nh-info">
              {(entry.getIn(["data", "infoBlockFirst"]) || []).map((item, index) => {
                  return <li className="nh-info__block" key={index}>
                  <img src={ item.get('image') } alt="collaborate on spreadsheets" className="nh-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="nh-info__block-lines"/>

                  <section className="nh-info__text-wrap">
                    <h3 className="nh-info__block-title">
                      { item.get('title') }
                    </h3>

                    <div className="nh-info__block-descr">
                      { item.get('descr') }
                    </div>

                    <a href={ item.get('link') } className="nh-link nh-link--learn-more">
                      learn more
                    </a>
                  </section>
                </li>
                })}
              </ul>

              <section className="nh-capabilities">
                <h3 className="nh-capabilities__title">
                  { entry.getIn(['data', 'capabilitiesTitle']) }
                </h3>

                <ul className="nh-capabilities__modules">
                {(entry.getIn(["data", "capabilitiesList"]) || []).map((item, index) => {
                    return <li className="nh-capabilities__block" key={index}>
                    <img src={item.get('image')} alt="save time" className="nh-capabilities__img"/>

                    <div className="nh-capabilities__descr">
                      {item.get('text')}
                    </div>
                  </li>
                  })}
                </ul>
              </section>

              <section className="nh-studies">
                <h3 className="nh-studies__title">
                  Featured case studies
                </h3>

                <div className="nh-studies__block">
                  <div className="nh-studies__img-wrap">
                    <img src="/img/home/v_case_1.png" alt="case" className="nh-studies__img"/>
                    <span className="nh-studies__img-text nh-studies__img-text--first">from 7 weeks</span>
                    <span className="nh-studies__img-text nh-studies__img-text--second">to 2 hours</span>
                  </div>

                  <section className="nh-studies__text-wrap">
                    <h3 className="nh-studies__block-title">
                      Elettronica reduced its sales planning cycle
                    </h3>

                    <cite className="nh-studies__block-descr">
                      When i used Visyond, I see my accuracy and ability to answer questions about my work go up. I can do more and have peace of mind.
                    </cite>

                    <p className="nh-studies__block-author">
                      Fernando Rizzo, Area Manager, Elettronica
                    </p>

                    <a href="#" className="nh-studies__block-link">
                      learn more>>
                    </a>
                  </section>
                </div>

                <div className="nh-studies__block">
                  <div className="nh-studies__img-wrap">
                    <img src="/img/home/v_case_2.png" alt="case" className="nh-studies__img"/>
                    <span className="nh-studies__img-text nh-studies__img-text--third">from 2 weeks</span>
                    <span className="nh-studies__img-text nh-studies__img-text--fourth">to 1 hour</span>
                  </div>

                  <section className="nh-studies__text-wrap">
                    <h3 className="nh-studies__block-title">
                      Now eLearnSecurity decreased time spent for financial statements preparation
                    </h3>

                    <cite className="nh-studies__block-descr">
                      When i used Visyond, I see my accuracy and ability to answer questions about my work go up. I can do more and have peace of mind.
                    </cite>

                    <p className="nh-studies__block-author">
                      Fernando Rizzo, Area Manager, Elettronica
                    </p>

                    <a href="#" className="nh-studies__block-link">
                      learn more>>
                    </a>
                  </section>
                </div>
              </section>

              <div className="nh-provides">
                <section className="nh-provides__wrap">
                  <h3 className="nh-provides__title">
                    { entry.getIn(['data', 'providesTitle']) }
                  </h3>

                  <ul className="nh-provides__list">
                  {(entry.getIn(["data", "providesList"]) || []).map((item, index) => {
                      return <li className="nh-provides__item" key={index}>
                      {item.get('text')}
                    </li>
                  })}
                  </ul>
                </section>
              </div>

              <section className="nh-bottom">
                <h3 className="nh-bottom__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <button className="nh-link nh-link--request">
                  request a demo
                </button>
              </section>

            </div>
            </div>
        );
    }
}
