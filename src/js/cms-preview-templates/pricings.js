import React from 'react';
import format from 'date-fns/format';
import ReactMarkdown from 'react-markdown';

export default class Pricings extends React.Component {
    render() {
        const { entry, widgetsFor, widgetFor, getAsset } = this.props;
        let cover = {
            backgroundImage: "url('" + entry.getIn(['data', 'bgImage']) + "')"
        };

        let pricingCards = widgetsFor('pricingCards').getIn(['data', 'cards']);
        let whyCards = widgetsFor('whyCards').getIn(['data', 'cards']);

        const cta = this.props.widgetsFor('whyCards').getIn(['data', 'cta']).toJS();

        return (
            <div>

            <section className="cover" style={cover}>

            <h2 className="cover-header">
            { entry.getIn(['data', 'topTitle']) }
            </h2>

            <div className="cover-header--sub">
            { entry.getIn(['data', 'topSubTitle']) }
            </div>
            </section>

            <section className="section half-gray">

            <div className="container">

            <h2 className="header-section">
            { this.props.widgetsFor('pricingCards').getIn(['data', 'title'])}
            </h2>
            <div className="header-section--divider"></div>

            <ul className="card__list">


            { pricingCards.toJS().map((card, index) => {
                return(
                    <li key={index} className="card__list-item">
                    <article className="card">
                    <div className="card__title-wrap">
                    <img src={ card.img } />
                    <h3 className="card__title">{ card.title }</h3>
                    <ReactMarkdown className="card__subtitle" source={ card.subTitleList } />

                    </div>
                    <hr className="divider-thin" />
                    <ReactMarkdown className="card__markdown" source={ card.markdown} />

                    <div className="btn-wrap">
                    <a href={ card.cta.url }
                    className="btn-primary fluid"
                    aria-label="button"
                    >
                    { card.cta.text }
                    </a>
                    </div>
                    </article>
                    </li>

                )
            }) }

            </ul>


            </div>

            </section>

            <section className="section half-gray">
            <div className="container">
            <h2 className="header-section">
            { this.props.widgetsFor('whyCards').getIn(['data', 'title'])}
            </h2>
            <div className="header-section--divider"></div>

            <ul className="card__list">
            { whyCards.toJS().map((card, index) => {

                return (
                    <li key={index} className="card__list-item primary">
                    <article className="card">
                    <div className="card__title-wrap">
                    <div className="rounded-icon-wrap">

                    <img src={card.icon} />
                    </div>
                    <h3 className="card__title">{ card.title }</h3>
                    <ul className="card__subtitle">
                    
                    {card.description.map((item, index) => {
                        return (
                            <li key={index}>{ item }</li>
                        )
                    })}
                    
                    
                    </ul>
                        
                        </div>
                        </article>
                        </li>
                )
            }) }
            </ul>

            <div className="btn-wrap" style={{marginTop: "1em"}}>
            <a
            href={ cta.url }
            className="btn-primary">
            { cta.text }
            </a>
            </div>
            
            </div>
            </section>
            


            </div>

        );
    }
}
