import React from 'react';
import format from 'date-fns/format';
export default class HomeNew extends React.Component {
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "topImage"]));

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

                <div className="nh-trusted__logos-wrap">
                  {(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
                      return <img src={item.get("trutrustedLogo") && getAsset(item.get("trustedLogo"))} className="landing-trusted__img"/>
                  })}
                </div>
              </section>

              <div className="nh-info">

                <div className="nh-info__block">
                  <img src="/img/home/v_clip_group_1.png" alt="collaborate on spreadsheets" className="nh-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="nh-info__block-lines"/>

                  <section className="nh-info__text-wrap">
                    <h3 className="nh-info__block-title">
                      collaborate on spreadsheets
                    </h3>

                    <p className="nh-info__block-descr">
                      ...without back-and-forth emails and data chaos and enjoy the benefits of <span>data tracking, version control and secure selective sharing</span> - allow access to only certain cells, worksheets, or linked reports and slides.
                    </p>

                    <button className="nh-link nh-link--learn-more">
                      learn more
                    </button>
                  </section>
                </div>

                <div className="nh-info__block">
                  <img src="/img/home/v_clip_group_2.png" alt="collaborate on spreadsheets" className="nh-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="nh-info__block-lines"/>

                  <section className="nh-info__text-wrap">
                    <h3 className="nh-info__block-title">
                      build robust model
                    </h3>

                    <p className="nh-info__block-descr">
                      ...as a team without the risk of accidentally overriding data or formulas with Visyonds <span>granular permissions control</span>, support of different coexisting cases, <span>scenario comparison</span>, dependency & errors root cause analysis.
                    </p>

                    <button className="nh-link nh-link--learn-more">
                      learn more
                    </button>
                  </section>
                </div>

                <div className="nh-info__block">
                  <img src="/img/home/v_clip_group_3.png" alt="collaborate on spreadsheets" className="nh-info__block-img"/>

                  <img src="/img/home/lines.png" alt="lines" className="nh-info__block-lines"/>

                  <section className="nh-info__text-wrap">
                    <h3 className="nh-info__block-title">
                      analyze data
                    </h3>

                    <p className="nh-info__block-descr">
                      ...and <span>in a few clicks gain valuable insights</span> by performing advanced analysis (Sensitivity, Scenario and many more!). Add the charts to Visyonds interactive slides and <span>share only what each stakeholder needs to see</span>.
                    </p>

                    <button className="nh-link nh-link--learn-more">
                      learn more
                    </button>
                  </section>
                </div>

                <div className="nh-info__block">
                  <img src="/img/home/v_clip_group_4.png" alt="collaborate on spreadsheets" className="nh-info__block-img"/>

                  <section className="nh-info__text-wrap">
                    <h3 className="nh-info__block-title">
                      share the results
                    </h3>

                    <p className="nh-info__block-descr">
                      ...safely without the risk of damaging or losing any data. Prepare <span>data visualizations, presentations and reports</span> in a few simple steps. <span>Create dashboards &amp; apps</span> powered by the spreadsheet calculation engine <span>without programming</span>.
                    </p>

                    <button className="nh-link nh-link--learn-more">
                      learn more
                    </button>
                  </section>
                </div>

              </div>

              <section className="nh-capabilities">
                <h3 className="nh-capabilities__title">
                  With Visyond you can
                </h3>

                <div className="nh-capabilities__modules">
                  <div className="nh-capabilities__block">
                    <img src="/img/home/v_icon.png" alt="save time" className="nh-capabilities__img"/>

                    <p className="nh-capabilities__descr">
                      Save up to <span>80%</span> of time
                    </p>
                  </div>

                  <div className="nh-capabilities__block">
                    <img src="/img/home/v_icon2.png" alt="reduce costs" className="nh-capabilities__img"/>

                    <p className="nh-capabilities__descr">
                      Reduce costs up to <span>$420</span>
                    </p>
                  </div>

                  <div className="nh-capabilities__block">
                    <img src="/img/home/v_icon3.png" alt="reduce error" className="nh-capabilities__img"/>

                    <p className="nh-capabilities__descr">
                      Reduce errors by <span>90%</span>
                    </p>
                  </div>
                </div>
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
                    Visyond provides
                  </h3>

                  <ul className="nh-provides__list">
                    <li className="nh-provides__item">
                      A flexible and familiar spreadsheet inter-face that is <span>cross-compatible</span> with Excel.
                    </li>
                    <li className="nh-provides__item">
                      Low entry barrier - Visyond is easy <span>to use and learn</span>.
                    </li>
                    <li className="nh-provides__item">
                      Low entry barrier - Visyond is easy <span>to use and learn</span>
                    </li>
                  </ul>
                </section>
              </div>

              <section className="nh-bottom">
                <h3 className="nh-bottom__title">
                  Dramatically improve your decision-making process today!
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
