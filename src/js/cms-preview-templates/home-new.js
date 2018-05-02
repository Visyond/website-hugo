import React from 'react';
import format from 'date-fns/format';
export default class HomeNew extends React.Component {
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        // let image = getAsset(entry.getIn(["data", "bgBottom"]));

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
                  <a href="https://visyond.com/accounts/signup/" className="nh-link nh-link--sign-up">
                    free sign up
                  </a>

                  <a href="https://visyond.com/request-a-demo" className="nh-link nh-link--request">
                    request a demo
                  </a>
                </div>

                <img src={ entry.getIn(['data', 'topImage']) } alt="image" className="nh-top__img"/>
              </div>

              <section className="nh-capabilities">
                // <h3 className="nh-capabilities__title">
                //   { entry.getIn(['data', 'capabilitiesTitle']) }
                // </h3>

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

              <section className="nh-studies">
                <h3 className="nh-studies__title">
                  { entry.getIn(['data', 'studiesTitle']) }
                </h3>
                <ul className="nh-studies__blocks">
                {(entry.getIn(["data", "studiesBlock"]) || []).map((item, index) => {
                    return <li className="nh-studies__block" key={index}>
                    <div className="nh-studies__img-wrap">
                      <img src={item.get('image')} alt="case" className="nh-studies__img"/>
                    </div>

                    <section className="nh-studies__text-wrap">
                      <h3 className="nh-studies__block-title">
                        {item.get('title')}
                      </h3>

                      <cite className="nh-studies__block-descr">
                        {item.get('text')}
                      </cite>

                      <p className="nh-studies__block-author">
                        {item.get('author')}
                      </p>

                      <a href={item.get('linkUrl')} className="nh-studies__block-link">
                        {item.get('linkText')}>>
                      </a>
                    </section>
                  </li>
                })}
                </ul>

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
                <div class="nh-provides__img-wrap">
                  <img src="/img/home/v_notebook.png" alt="notebook" class="nh-provides__img"/>
                </div>
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
