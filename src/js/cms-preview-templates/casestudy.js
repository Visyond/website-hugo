import React from 'react';
import format from 'date-fns/format';

export default class CaseStudy extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(["data", "image"]));
        let client = getAsset(entry.getIn(["data", "client"]));
        return (
            <div>
                <div 
                    className="case-study-title-wrap" 
                    style={{ background:image && `url(${image}) center center no-repeat` }}
                >
                    <div className="container container--case-study-title-wrap">
                        <h1 className="case-study__title">
                            { entry.getIn(["data", "title"]) }
                        </h1>
                        <ul className="case-study-params__list">
                        {(entry.getIn(["data","tooltip"]) || []).map((item, index) => {
                            return <li className="case-study-params__item" key={index}>{ item.get('title') }</li>
                        })}
                        </ul>
                    </div>
                </div>
                <div className="container container--case-study case-study--maincontent">
                    <div className="container--case-study__left-column">
                        <figure className="case-study__person">
                            <div className="case-study__person-img">
                                <img src={client} alt="client" />
                            </div>

                            <figcaption className="cast-study__person-comment">
                                {widgetFor('client_ask')}
                            </figcaption>
                        </figure>
                        {widgetFor('body')}
                    </div>
                    <div className="container--case-study__right-column">
                        {
                            (entry.getIn(["data", "aside"]) || []).map((item, index) => {
                                return <section className="case-study__widget" key={index}>{item.get('content') }</section>
                            })
                        }
                    </div>
                </div>
                <div className="case-study-sub-block">
                    <h3 className="case-study-sub-block__section-title">Related Solutions</h3>
                    <div className="container">
                        <section className="case-study-sub-block__section">
                            <h3 hidden></h3>
                            <article className="case-study-sub-block__article">
                                {widgetFor('first_solution')}
                            </article>
                            <article className="case-study-sub-block__article">
                                {widgetFor('second_solution')}
                            </article>
                            <article className="case-study-sub-block__article">
                                {widgetFor('third_solution')}
                            </article>
                        </section>
                    </div>  
                </div>
            </div>
            );
    }
}