import React from 'react';
import format from 'date-fns/format';

export default class FeaturesPage extends React.Component {
	render() {
		const { entry, widgetFor, getAsset } = this.props;
		let image = getAsset(entry.getIn(['data', 'image']));

		return (
			<div>
			{/*//FIRST SECTION*/}
			<div className="fp1st">
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

			{/*THIRD SECTION*/}
			<section className="fp3rd">
                <h3 className="fp3rd__title">
                  { entry.getIn(['data', 'titleBottom']) }
                </h3>

                <a href="{ entry.getIn(['data', 'botRequestURL']) }" className="fp1st fp1st--request">
                  request a demo
                </a>
            </section>
            {/*THIRD SECTION*/}
			</div>
		);
	}
}
