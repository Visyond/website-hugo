import React from 'react';
import format from 'date-fns/format';

export default class CaseStudy extends React.Component {
    render() {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
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
                            (widgetsFor('aside') || []).map((item, index) => {
                                if (item) {
                                   return <section className="case-study__widget" key={index}>{ item.get('widgets') }</section>
                                }
                            })
                        }
                    </div>
                </div>

                <div className="case-study-section">
                    <h2 className="case-study-section__title">
                      { entry.getIn(['data', 'casestudyTitle']) }
                    </h2>
                    <div className="case-study-section__cards">
                    {(entry.getIn(['data', 'casestudyCards']) || []).map((cards, index) => {return <a href={cards.get('link')} className="case-study-section__card">
                        <div className="case-study-section__card-image-wrap">
                          <img src={cards.get('icon')} alt="icon" className="case-study-section__card-image" />
                        </div>
                        
                        <h3 className="case-study-section__card-title">
                          {cards.get('title')}
                        </h3>

                        <p className="case-study-section__card-text">
                          {cards.get('text')}
                        </p>
                      </a>})}
                    </div>
                </div>

                <div className="case-study-sub-block">
                    
                    <h3 className="case-study-sub-block__section-title">
                        { entry.getIn(["data", "solTitle"]) }
                    </h3>

                    <div className="container">
                        <section className="case-study-sub-block__section">
                            <h3 hidden></h3>
                            {(entry.getIn(["data","solArticle"]) || []).map((item, index) => {
                                return <a href={item.get('link')} className="case-study-sub-block__article" key="index">
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
            </div>
            );
    }
}