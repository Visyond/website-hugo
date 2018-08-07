import React from 'react';
import format from 'date-fns/format';

export default class Analysis extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));
        let whiteSpace = / /gi;

        let topBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgImage']).replace(whiteSpace, '%20') + ")"}
        let formBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'formImage']).replace(whiteSpace, '%20') + ")"}
        let bottomBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgBottom']).replace(whiteSpace, '%20') + ")"}

        return (
          <div>
          {/* FIRST SECTION */}
          <div className="first-section an1st" style={topBgImage}>
            
            <h2 className="an1st__title">
              {entry.getIn(['data', 'topTitle'])}
            </h2>

            <div className="an1st__under-title">
              {entry.getIn(['data', 'topSubTitle'])}
            </div>

          </div>
          {/* //FIRST SECTION */}

          {/* SECOND SECTION */}
          <div className="second-section an2nd">
            <div className="an2nd__text">
              {widgetFor('text')}
            </div>
          </div>
          {/* //SECOND SECTION */}

          {/* THIRD SECTION */}
          <div className="third-section an3rd">
            <h3 className="an3rd__title">
                { entry.getIn(['data', 'errorsTitle']) }
            </h3>

            <div className="an3rd__wrapper">
                <section className="an3rd__wrap">

                  <ul className="an3rd__list">
                    {(entry.getIn(['data', 'errorsList']) || []).map((item, index) => {
                      return <li className="an3rd__item" key={index}>
                        {item}
                      </li>
                    })}
                  </ul>
                </section>

                <div className="an3rd__img-wrap js-img-wrap">
                    <div className="an3rd__img-pointer">
                        Click to enlarge
                    </div>

                    <img src={entry.getIn(['data', 'errorsImage'])} className="an3rd__img" />
                </div>
            </div>
          </div>
          {/* //THIRD SECTION */}

          {/* FIFTH SECTION */}
          <div className="fifth-section an5th" style={formBgImage}>
              <h3 className="an5th__title">
                  upload your sreadsheet
              </h3>

              <div className="an5th__sub-title">
                  Please fill in the form <span>for free analysis</span>
              </div>
              
              <form action="" className="an5th__form js-form">
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Full name
                      </div>
                  </div>
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Work email
                      </div>
                  </div>
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Company
                      </div>
                  </div>
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Phone number
                      </div>
                  </div>
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Upload xls file
                      </div>
                  </div>
                  <div className="an5th__form-input-wrap">
                      <input type="text" className="an5th__form-input" required />
                      <div className="an5th__form-label">
                          Output work sheet
                      </div>
                  </div>

                  <button className="an5th__form-submit" type="submit">get free analysis</button>
              </form>
          </div>
          {/* //FIFTH SECTION */}

          {/* SIXTH SECTION */}
          <div className="six-section an6th">
            <section className="an6th__wrap">
              <h3 className="an6th__title">
                { entry.getIn(['data', 'providesTitle']) }
              </h3>

              <ul className="an6th__list">
                {(entry.getIn(['data', 'providesList']) || []).map((item, index) =>
                  {return <li className="an6th__item" key={index}>
                    {item}
                  </li>}
                  )}
              </ul>
            </section>
            <div className="an6th__img-wrap">
              <img src="/img/v_notebook.png" alt="notebook" className="an6th__img" />
            </div>
          </div>
          {/* //SIXTH SECTION */}

          {/* SEVENTH SECTION */}
          <section className="an7th" style={bottomBgImage}>
            <h3 className="an7th__title">
              {entry.getIn(['data', 'titleBottom'])}
            </h3>

            <a href="/request" className="an7th__link">
              request a demo
            </a>
          </section>
          {/* //SEVENTH SECTION */}

          </div>
        );
    }
}
