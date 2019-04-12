import React from 'react';

export default class PartnerPage extends React.Component {
    render() {
        const { entry, widgetFor, getAsset } = this.props;
        let image = getAsset(entry.getIn(['data', 'image']));

        let topBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgImage']).replace(whiteSpace, '%20') + ")"};

        return (
            <div className="partners-page">
                {/* FIRST SECTION */}
                <section className="cover" style={topBgImage}>

                    <h1 className="cover-header">
                        {entry.getIn(['data', 'topTitle'])}
                    </h1>

                    <div className="cover-header--sub">
                        {entry.getIn(['data', 'topSubTitle'])}
                    </div>
                </section>
                {/* //FIRST SECTION */}

                {/* SECOND SECTION */}
                <section className="benefits-section half-light-blue">

                    <div className="container">
                        <h2 className="header-section">
                            {entry.getIn(['data', 'benefitsHeader'])}
                        </h2>
                        <div className="header-section--divider"></div>

                        <div className="benefits">
                            {(entry.getIn(['data', 'benefitsItems']) || []).map((item, index) => {
                                return  <div className="benefit__item" key={index}>
                                    <img src={item.get('img')} alt="" className="benefit__icon"/>
                                        <h5 className="benefit__headline">
                                            { item.get('title') }
                                        </h5>
                                        <p className="benefit__text">
                                            { item.get('subTitle') }
                                        </p>
                                </div>
                            })}
                        </div>
                    </div>

                </section>
                {/* //SECOND SECTION */}

                {/* SECOND SECTION */}
                <section className="types-section">
                    <div className="container">
                        <h2 className="header-section">
                            {entry.getIn(['data', 'typesHeader'])}
                        </h2>
                        <div className="header-section--divider"></div>
                        {entry.getIn(['data', 'typesSection'])}
                    </div>
                </section>
                {/* //SECOND SECTION */}

                {/* FORM SECTION */}
                <section className="form">
                    <div className="container">
                        <h2 className="header-section">
                            { entry.getIn(['data', 'formHeader']) }
                        </h2>
                        <div className="header-section--divider"></div>
                        <form className="form__inputs-container" method="POST" action="">
                            <div className="form__left-column">
                                <input className="form__input" type="text" placeholder="Full name" />
                                <input className="form__input" type="text" placeholder="Email Address" />
                                <input className="form__input" type="text" placeholder="Company name" />
                                <input className="form__input" type="text" placeholder="Location" />
                            </div>
                            <div className="form__right-column">
                                <div className="form__checked">
                                    <p className="form__checked-title">Partner Type</p>
                                    <div className="form__radio-buttons-container">
                                        { entry.getIn(['data', 'radio']) }
                                        {(entry.getIn(['data', 'radio']) || []).map((item, index) =>
                                            { return <label className="radio-button" key={index}>
                                                <input className='radio-button__check-button' type="radio" name="radio" checked="checked"/>
                                                <span className="radio-button__label">{ item.get('labelRadioButton') }</span>
                                                <span className="radio-button__checkmark"></span>
                                            </label>
                                            }
                                        )};
                                    </div>
                                </div>
                                <input className="form__input" type="phone" placeholder="Phone Number" />
                                    <div className="form__textarea-container">
                                        <textarea className="form__textarea" placeholder="Message" rows='1'></textarea>
                                        <span className="form__textarea_optional">Optional</span>
                                    </div>
                            </div>
                        </form>
                        <div className="btn-wrap">
                            <button className="btn-primary">
                                { entry.getIn(['data', 'submitButtonTitle']) }
                            </button>
                        </div>
                    </div>
                </section>
                {/* FORM SECTION */}
            </div>
        )
    }
}