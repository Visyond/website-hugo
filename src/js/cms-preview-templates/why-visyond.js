import React from "react";

export default class WhyPage extends React.Component {
  render() {
    const { entry, widgetsFor } = this.props;

    return (
      <div>
        <section className="cover">
          <h1 className="cover-header">
            {entry.getIn(["data", "coverHeader"])}
          </h1>

          <div className="cover-header--sub">
            <p>{entry.getIn(["data", "coverDescription"])}</p>
          </div>
        </section>

        <section className="section primary">
          <h2 className="header-section">
            {entry.getIn(["data", "sectionOneHeader"])}
          </h2>
          <div className="header-section--divider" />
          <img src={entry.getIn(["data", "sectionOneImg"])} />
        </section>

        <section className="section">
          <h2 className="header-section">
            {entry.getIn(["data", "sectionTwoHeader"])}
          </h2>
          <div className="header-section--divider" />

          <div className="ftr-features__cards">
            {widgetsFor("cards").map((card, index) => {
              const header = card.getIn(["data", "header"]);
                const icon = card.getIn(["data", "icon"]);
                const link = card.getIn(["data", "link"]);
                const description = card.getIn(["data", "description"]);

                return (
                <a href={link} className="ftr-features__card" key={index}>
                  <div className="ftr-features__card-image-wrap">
                    <img
                      src={icon}
                      alt="icon"
                      className="ftr-features__card-image"
                    />
                  </div>
                  <h3 className="ftr-features__card-title">{header}</h3>
                  <p className="ftr-features__card-text">{description}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section">
          <h2 className="header-section">
            {entry.getIn(["data", "sectionThreeHeader"])}
          </h2>
          <div className="header-section--divider" />

          <div className="comparation-table">
            <table>
              <thead>
                <tr>
                  <td />

                  <td>
                    <img src="/img/visyond-white.svg" alt="Visyond Logo" />
                  </td>

                  <td>SPREADSHEETS + ADDONS</td>

                  <td>COLLABORATIVE SPREADSHEETS</td>

                  <td>FILE SHARING TOOLS</td>

                  <td>DATA VISUALIZATION</td>

                  <td>FINANCIAL APPS</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Spreadsheet, debug and audit</td>
                  <td>
                    <i className="icon compare plus" />
                  </td>

                  <td>
                    <i className="icon compare plus" />
                    <i className="icon compare divider" />
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>
                </tr>

                <tr>
                  <td>
                    Selective sharing and workflows on a single source of truth
                  </td>
                  <td>
                    <i className="icon compare plus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare plus" />
                    <i className="icon compare divider" />
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare plus" />
                    <i className="icon compare divider" />
                    <i className="icon compare minus" />
                  </td>
                </tr>

                <tr>
                  <td>Collaborative what-if analysis in real time</td>
                  <td>
                    <i className="icon compare plus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare plus" />
                    <i className="icon compare divider" />
                    <i className="icon compare minus" />
                  </td>
                </tr>

                <tr>
                  <td>
                    Spreadsheet driven interactive presentations and reports
                  </td>
                  <td>
                    <i className="icon compare plus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare plus" />
                    <i className="icon compare divider" />
                    <i className="icon compare minus" />
                  </td>

                  <td>
                    <i className="icon compare minus" />
                  </td>
                </tr>

                <tr>
                  <td>Cost / Value</td>
                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                        <i className="icon compare plus" />
                        <i className="icon compare plus" />
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>

                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>

                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>

                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>

                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>

                  <td>
                    <span className="icon stacked">
                      <span className="icon stacked">
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                        <i className="icon compare dollar" />
                      </span>

                      <i className="icon compare divider" />

                      <span className="icon stacked">
                        <i className="icon compare plus" />
                        <i className="icon compare plus" />
                      </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
            </section>
            </div>
    );
  }
}
