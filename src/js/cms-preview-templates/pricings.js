import React from 'react';
import format from 'date-fns/format';

export default class Pricings extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        return (
          <div>
          <div className="first-section prs1st">
            
            <h2 className="prs1st__title">
              {entry.getIn(['data', 'topTitle'])}
            </h2>

            <div className="prs1st__under-title">
              {entry.getIn(['data', 'topSubTitle'])}
            </div>
          </div>



          <section className="second-section prs2nd">
              <div className="container">
                  <h3 className="prs2nd__title">{entry.getIn(['data', 'pricingTitle'])}</h3>
                  <h4 className="prs2nd__subtitle">{entry.getIn(['data', 'firstPricingSubTitle'])}
                      <p>{entry.getIn(['data', 'secondPricingSubTitle'])}</p>
                  </h4>

                  <ul className="prs2nd__list">
                      <li className="prs2nd__item prs2nd__item--left">
                          <article className="prs2nd__card">
                              <div className="prs2nd__title-wrap">
                                  <h3 className="prs2nd__title">{entry.getIn(['data', 'leftCard.leftcardtitle'])}</h3>
                                  <h4 className="prs2nd__card-subtitle">{entry.getIn(['data', 'leftCard.leftCardSubTitle'])}</h4>
                              </div>
                              <div className="prs2nd__markdown">
                                { entry.getIn(['data', 'leftCard.leftCardMarkdown']) }
                              </div>
                          </article>
                      </li>

                      <li className="prs2nd__item prs2nd__item--middle">
                          <article className="prs2nd__card">
                              <div className="prs2nd__title-wrap">
                                  <h3 className="prs2nd__title">{entry.getIn(['data', 'middleCard.middleCardTitle'])}</h3>
                                  <h4 className="prs2nd__card-subtitle">{entry.getIn(['data', 'middleCard.middleCardSubTitle'])}</h4>
                              </div>
                              <div className="prs2nd__markdown">
                                { entry.getIn(['data', 'middleCard.middleCardMarkdown']) }
                              </div>
                          </article>
                      </li>

                      <li className="prs2nd__item prs2nd__item--right">
                          <article className="prs2nd__card">
                              <div className="prs2nd__title-wrap">
                                  <h3 className="prs2nd__title">{entry.getIn(['data', 'rightCard.rightCardTitle'])}</h3>
                                  <h4 className="prs2nd__card-subtitle">{entry.getIn('data', rightCard.rightCardSubTitle)}</h4>
                              </div>
                              <div className="prs2nd__markdown">
                                { entry.getIn(['data', 'rightCard.rightCardMarkdown']) }
                              </div>
                          </article>
                      </li>
                  </ul>

                  <div className="prs2nd__btn-wrap">
                      <a href={entry.getIn(['data', 'cardsLink'])} className="prs2nd__btn" aria-label="button">FREE 14 DAY TRIAL</a>
                  </div>

                  <div className="prs2nd__asked-wrap">
                      <p className="prs2nd__asked-descr">
                          {entry.getIn(['data', 'priceClientAsked'])}
                      </p>
                      <address className="prs2nd__asked-company">{entry.getIn(['data', 'priceClientAsked'])}</address>
                      <img src={entry.getIn(['data', 'priceClientCompanyLogo'])} alt="" className="prs2nd__asked-img" />
                  </div>
              </div>
          </section>



          <section className="third-section prs3rd">
            <h3 className="prs3rd__title">
              {entry.getIn(['data', 'titleBottom'])}
            </h3>
            <a href={entry.getIn(['data', 'linkBottom'])} className="prs3rd__btn prs3rd__btn--request">
              request a demo
            </a>
          </section>
          </div>
        );
    }
}
