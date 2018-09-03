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
                <a href={ entry.getIn(['data', 'signUpURL']) } className="sol-link sol-link--sign-up">
                  free sign up
                </a>

                <button className="sol-link sol-link--btn js-btn-video">
                  watch video
                </button>

                <a href={ entry.getIn(['data', 'requestURL']) } className="sol-link sol-link--request">
                  request a demo
                </a>
                </div>

                <div className="sol-top__popup js-popup">
                  <div className="sol-top__iframe-wrap">
                    <button className="sol-top__popup-close js-popup-close"></button>
                    <p>
                      { entry.getIn(['data', 'watchVideoURL']) }
                    </p>

                  </div>
                </div>
              </div>

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

              <div className="sol-solutions">
                <h2 className="sol-solutions__title">
                  { entry.getIn(['data', 'solutionsTitle']) }
                </h2>
                <div className="sol-solutions__cards">
                {(entry.getIn(['data', 'solutionsCards']) || []).map((cards, index) => {return <a href={cards.get('link')} className="sol-solutions__card">
                    <div className="sol-solutions__card-image-wrap">
                      <img src={cards.get('icon')} alt="icon" className="sol-solutions__card-image" />
                    </div>
                    
                    <h3 className="sol-solutions__card-title">
                      {cards.get('title')}
                    </h3>

                    <p className="sol-solutions__card-text">
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

              <section className="sol-capabilities">

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

              <section className="sol-trusted">
                <h3 className="sol-trusted__title">
                  { entry.getIn(['data', 'trustedTitle']) }
                </h3>
                <div className="sol-trusted__wrapper">
                <ul className="sol-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <li key={index} className="home-trusted__logo-item">
                        <img src={ item.get('logo') } className="landing-trusted__img"/>
                       </li>
                  })}
                </ul>
                </div>
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

              <div className="sol-sub-block">
                    
                  <h3 className="sol-sub-block__section-title">
                      { entry.getIn(["data", "solTitle"]) }
                  </h3>

                  <div className="container">
                      <section className="sol-sub-block__section">
                          <h3 hidden></h3>
                          {(entry.getIn(["data","solArticle"]) || []).map((item, index) => {
                              return <a href={item.get('link')} className="sol-sub-block__article" key="index">
                                  <h2>
                                      { item.get('title') }
                                  </h2>

                                  <img src={ item.get('image') } alt="{ item.get('title') }"/>
                                  
                                  <p>
                                      { item.get('descr') }
                                  </p>
                              </a>
                          })}

                      </section>
                  </div>  
              </div>

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

                <a href="{ entry.getIn(['data', 'botRequestURL']) }" className="sol-link sol-link--request">
                  request a demo
                </a>
              </section>

            </div>
            </div>
        );
    }
}
