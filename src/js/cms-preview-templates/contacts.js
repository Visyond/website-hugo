import React from 'react';
import format from 'date-fns/format';
export default class Contacts extends React.Component { 
    render () {
        const { entry, widgetFor, getAsset, widgetsFor } = this.props;
        let image = getAsset(entry.getIn(["data", "topImage"]));

        return (
            <div>
                <div className="case-study-title-wrap contacts-title-wrap">
                
                    <div className="container container--case-study-title-wrap"
                    style={{ background:image && `url(${image}) center center no-repeat` }}
                    >
                        <h1 className="case-study__title">
                            { entry.getIn(["data", "title"]) }
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <section className="contacts-page">
                        <article className="contacts-page__item contacts-page__item--mail">
                            <h3 className="contacts-page__title">Mail</h3>
			                <span className="contacts-page__address">{ entry.getIn(["data","mail"]) }</span>
                            <div className="contacts-page__social-wrap">
				                
                            <address className="social">
                                <ul className="social__list">
                                    
                                {(entry.getIn(["data", "contactsSocial"]) || []).map((item, index) => {
                                    return <li className="social__item" key={index}>
                                        <a href={item.get('socialLink')} className="social__link">
                                            <img width="50" src={item.get('socialIcon')}/>
                                        </a>
                                    </li>
                                    })}    
                                </ul>
                            </address>

			                </div>
                        </article>

                        <article className="contacts-page__item contacts-page__item--email">
                            <h3 className="contacts-page__title">Telephone</h3>
                            <ul className="contacts-page__list">
                                {(entry.getIn(["data", "contactsPhone"]) || []).map((item, index) => {
                                return <li className="contacts-page__item" key={index}>
                                    <a href="#" className="contacts-page__link">{item.get('socialPhone')}</a>
                                </li>
                                })}
                            </ul>
                        </article>

                        <article className="contacts-page__item contacts-page__item--email">
                            <h3 className="contacts-page__title">Email</h3>
                            <ul className="contacts-page__list">
                                {(entry.getIn(["data", "contactsEmail"]) || []).map((item, index) => {
                                return <li className="contacts-page__item">
                                    <a href="#" className="contacts-page__link">{ item.get('socialEmail') }</a>
                                </li>
                                })}
                            </ul>
                        </article>

                        <article className="contacts-page__item contacts-page__item--form">
                            <h3 className="contacts-page__title">Contact us</h3>
                            <form className="contact__form-wrap">
                                <div className="contact__form-item">
                                    <input type="text" placeholder="Name" className="contact__form-input" name="name" required />
                                    <span className="contact__form-state"></span>
                                </div>
                                <div className="contact__form-item">
                                    <input type="email" placeholder="E-mail for answer" name="email" className="contact__form-input" required />
                                    <span className="contact__form-state"></span>
                                </div>
                                <div className="contact__form-item">
                                    <textarea name="message" placeholder="Your message" name="message" className="contact__form-input contact__form-input--message" required></textarea>
                                    <span className="contact__form-state"></span>
                                </div>
                                <div className="contact__form-item contact__form-item--submit">
                                    <button type="submit" className="contact__form-submit">contact us</button>
                                </div>
                            </form>
                        </article>
                    </section>
                </div>
                <div className="contacts-page__map-wrap">
                    <div className="contacts-page__map-left contacts-page__map-column">
                        <div className="contacts-page__map-title-wrap">
                            <h3 className="contacts-page__map-city">Moscow office</h3>
                            <span className="contacts-page__map-address">Druzhinnikovskaya ul., 15.</span>
                            <div className="contacts-page__map-address-img-wrap">
                                <img src="/img/vimages/mapsIco1.png" alt="Moscow" className="contacts-page__map-address-img" />
                            </div>
                        </div>
                        <div className="contacts-page__map-img">
                            <img src="/img/vimages/moscow.png" alt="" />
                        </div>
                    </div>
                    <div className="contacts-page__map-right contacts-page__map-column">
                        <div className="contacts-page__map-title-wrap">
                            <h3 className="contacts-page__map-city">London office</h3>
                            <span className="contacts-page__map-address">80-90 Paul Street</span>
                            <div className="contacts-page__map-address-img-wrap">
                                <img src="/img/vimages/mapsIco2.png" alt="Moscow" className="contacts-page__map-address-img" />
                            </div>
                        </div>
                        <div className="contacts-page__map-img">
                            <img src="/img/vimages/moscow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}