import React from 'react';
import format from 'date-fns/format';

export default class FeaturesPage extends React.Component {
	render() {
		const { entry, widgetFor, getAsset } = this.props;
		let image = getAsset(entry.getIn(['data', 'image']));
		let whiteSpace = / /gi;

        let topBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgImage']).replace(whiteSpace, '%20') + ")"}
        let bottomBgImage = {backgroundImage: "url(" + entry.getIn(['data', 'bgBottom']).replace(whiteSpace, '%20') + ")"}

		return (
			<div>
			{/*//FIRST SECTION*/}
			<div className="fp1st" style={topBgImage}>
				<h2 className="fp1st__title">
				{ entry.getIn(['data', 'topTitle']) }
				</h2>

				<div className="fp1st__under-title">
				{ entry.getIn(['data', 'topSubTitle']) }
				</div>

				<div className="fp1st__btns-wrap">
					<a href={ entry.getIn(['data', 'signUpURL']) } className="fp1st__link fp1st__link--sign-up">
					free sign up
					</a>

					<button className="fp1st__link fp1st__link--btn js-btn-video">
					watch video
					</button>

					<a href={ entry.getIn(['data', 'requestURL']) } className="fp1st__link fp1st__link--request">
					request a demo
					</a>
				</div>

				<div className="fp1st__popup js-popup">
					<div className="fp1st__iframe-wrap">
						<button className="fp1st__popup-close js-popup-close"></button>
						<p>
						{ entry.getIn(['data', 'watchVideoURL']) }
						</p>

					</div>
				</div>
			</div>
			{/*//FIRST SECTION*/}

			{/*SECOND SECTION*/}
			<div className="fp2nd">
			{(entry.getIn(['data', 'section']) || []).map((section, index) => {
                return <section className="fp2nd__section" key={index}>
				<h2 className="fp2nd__title">
					{section.get('title')}
				</h2>
				<div className="fp2nd__cards">
				{section.get('cards').map((cards, index) => {
                      return <a href={cards.get('link')} className="fp2nd__card" key={index}>
						<div className="fp2nd__card-image-wrap">
						<img src={cards.get('icon')} alt="icon" className="fp2nd__card-image" />
						</div>
						
						<h3 className="fp2nd__card-title">
							{cards.get('title')}
						</h3>

						<p className="fp2nd__card-text">
							{cards.get('text')}
						</p>
					</a>})}
				</div>
			</section>})}
			</div>
			{/*//SECOND SECTION*/}

			{/*THIRD SECTION*/}
			<section className="fp3rd" style={bottomBgImage}>
                <h3 className="fp3rd__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <a href="{ entry.getIn(['data', 'botRequestURL']) }" className="fp1st__link fp1st__link--request">
                  request a demo
                </a>
            </section>
            {/*//THIRD SECTION*/}
			</div>
		);
	}
}
