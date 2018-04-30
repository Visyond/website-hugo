import React from 'react';
import format from 'date-fns/format';

export default class Solutions extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        return (
            <div>
            <div className="solutions sol">

              <div className="sol-top">
                <h2 className="sol-top__title">
                  { entry.getIn(['data', 'topTitle']) }
                </h2>

                <div className="sol-top__under-title">
                  { entry.getIn(['data', 'topSubTitle']) }
                </div>

                <div className="sol-top__btns-wrap">
                  <button className="sol-link sol-link--sign-up">
                    sign up
                  </button>

                  <button className="sol-link sol-link--request">
                    request a demo
                  </button>
                </div>

                <img src={ entry.getIn(['data', 'topImage']) } alt="image" className="sol-top__img"/>
              </div>

              <section className="sol-trusted">
                <h3 className="sol-trusted__title">
                  { entry.getIn(['data', 'trustedTitle']) }
                </h3>

                <ul className="sol-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <li key={index}>
                        <img src={ item.get('logo') } className="landing-trusted__img"/>
                       </li>
                  })}
                </ul>
              </section>

              <ul className="sol-info">
              {(entry.getIn(["data", "infoBlockFirst"]) || []).map((item, index) => {
                  return <li className="sol-info__block" key={index}>
                  <img src={ item.get('image') } alt="collaborate on spreadsheets" className="sol-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="sol-info__block-lines"/>

                  <section className="sol-info__text-wrap">
                    <h3 className="sol-info__block-title">
                      { item.get('title') }
                    </h3>

                    <div className="sol-info__block-descr">
                      { item.get('descr') }
                    </div>

                    <a href={ item.get('link') } className="sol-link sol-link--learn-more">
                      learn more
                    </a>
                  </section>
                </li>
                })}
              </ul>

              <section className="sol-capabilities">
                <h3 className="sol-capabilities__title">
                  { entry.getIn(['data', 'capabilitiesTitle']) }
                </h3>

                <ul className="sol-capabilities__modules">
                {(entry.getIn(["data", "capabilitiesList"]) || []).map((item, index) => {
                    return <li className="sol-capabilities__block" key={index}>
                    <img src={item.get('image')} alt="save time" className="sol-capabilities__img"/>

                    <div className="sol-capabilities__descr">
                      {item.get('text')}
                    </div>
                  </li>
                  })}
                </ul>
              </section>

              <section className="sol-studies">
                <h3 className="sol-studies__title">
                  { entry.getIn(['data', 'studiesTitle']) }
                </h3>
                <ul className="sol-studies__blocks">
                {(entry.getIn(["data", "studiesBlock"]) || []).map((item, index) => {
                    return <li className="sol-studies__block" key={index}>
                    <div className="sol-studies__img-wrap">
                      <img src={item.get('image')} alt="case" className="sol-studies__img"/>
                    </div>

                    <section className="sol-studies__text-wrap">
                      <h3 className="sol-studies__block-title">
                        {item.get('title')}
                      </h3>

                      <cite className="sol-studies__block-descr">
                        {item.get('text')}
                      </cite>

                      <p className="sol-studies__block-author">
                        {item.get('author')}
                      </p>

                      <a href={item.get('linkUrl')} className="sol-studies__block-link">
                        {item.get('linkText')}>>
                      </a>
                    </section>
                  </li>
                })}
                </ul>

              </section>

              <div className="sol-provides">
                <div class="sol-provides__img-wrap">
                  <img src="/img/home/v_notebook.png" alt="notebook" class="sol-provides__img"/>
                </div>
                <section className="sol-provides__wrap">
                  <h3 className="sol-provides__title">
                    { entry.getIn(['data', 'providesTitle']) }
                  </h3>

                  <ul className="sol-provides__list">
                  {(entry.getIn(["data", "providesList"]) || []).map((item, index) => {
                      return <li className="sol-provides__item" key={index}>
                      {item.get('text')}
                    </li>
                  })}
                  </ul>
                </section>
              </div>

              <section className="sol-bottom">
                <h3 className="sol-bottom__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <button className="sol-link sol-link--request">
                  request a demo
                </button>
              </section>

            </div>
            </div>
        );
    }
}
