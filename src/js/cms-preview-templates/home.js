import React from 'react';
import format from 'date-fns/format';
export default class Home extends React.Component {
		render () {
				const { entry, widgetFor, getAsset, widgetsFor } = this.props;
				let image = getAsset(entry.getIn(["data", "topImage"]));

				return (
						<div>
						<div className="new-home nh">

							<div className="home-top">
								<h2 className="home-top__title">
									{ entry.getIn(['data', 'topTitle']) }
								</h2>

								<div className="home-top__under-title">
									{ entry.getIn(['data', 'topSubTitle']) }
								</div>

								<div className="home-top__btns-wrap">
									<a href={ entry.getIn(['data', 'signUpURL']) } className="home-link home-link--sign-up">
										free sign up
									</a>

									<button className="home-link home-link--btn js-btn-video">
										watch video
									</button>

									<a href={ entry.getIn(['data', 'requestURL']) } className="home-link home-link--request">
										request a demo
									</a>
								</div>

								<img src={ entry.getIn(['data', 'topImage']) } alt="image" className="home-top__img"/>

								<div className="home-top__popup js-popup">
									<div className="home-top__iframe-wrap">
										<button className="home-top__popup-close js-popup-close"></button>
										<p>
											{ entry.getIn(['data', 'watchVideoURL']) }
										</p>

									</div>
								</div>
							</div>

							<section className="home-capabilities">

								<ul className="home-capabilities__modules">
								{(entry.getIn(["data", "capabilitiesList"]) || []).map((item, index) => {
										return <li className="home-capabilities__block" key={index}>
										<img src={item.get('image')} alt="save time" className="home-capabilities__img"/>

										<div className="home-capabilities__descr">
											{item.get('text')}
										</div>
									</li>
									})}
								</ul>
							</section>

							<section className="home-trusted">
								<h3 className="home-trusted__title">
									{ entry.getIn(['data', 'trustedTitle']) }
								</h3>
								<div className="home-trusted__wrapper">
								<ul className="home-trusted__logos-wrap">
									{(entry.getIn(["data", "trustedLogos"]) || []).map((item, index) => {
											return <li key={index} className="home-trusted__logo-item">
												<img src={ item.get('logo') } className="home-trusted__img"/>
											 </li>
									})}
								</ul>
								</div>
							</section>

							<ul className="home-info">
							{(entry.getIn(["data", "infoBlockFirst"]) || []).map((item, index) => {
									return <li className="home-info__block" key={index}>
									<img src={ item.get('image') } alt="collaborate on spreadsheets" className="home-info__block-img"/>

									<img src="/img/home/lines.png" alt="lines" className="home-info__block-lines"/>

									<section className="home-info__text-wrap">
										<h3 className="home-info__block-title">
											{ item.get('title') }
										</h3>

										<div className="home-info__block-descr">
											{ item.get('descr') }
										</div>
										<a href={ item.get('link') } className="home-link home-link--learn-more">
											learn more
										</a>
									</section>
								</li>
								})}
							</ul>

							<section className="home-studies">
								<h3 className="home-studies__title">
									{ entry.getIn(['data', 'studiesTitle']) }
								</h3>
								<ul className="home-studies__blocks">
								{(entry.getIn(["data", "studiesBlock"]) || []).map((item, index) => {
										return <li className="home-studies__block" key={index}>
										<div className="home-studies__img-wrap">
											<img src={item.get('image')} alt="case" className="home-studies__img"/>
										</div>

										<section className="home-studies__text-wrap">
											<h3 className="home-studies__block-title">
												{item.get('title')}
											</h3>

											<cite className="home-studies__block-descr">
												{item.get('text')}
											</cite>

											<p className="home-studies__block-author">
												{item.get('author')}
											</p>

											<a href={item.get('linkUrl')} className="home-studies__block-link">
												{item.get('linkText')}>>
											</a>
										</section>
									</li>
								})}
								</ul>
							</section>

							<section className="customers">
										<h3 className="customers__title homepage-title">{ entry.getIn(['data', 'studiesTitle']) }</h3>

										<ul className="customers__list">
										{(entry.getIn(["data", "slider"]) || []).map((item, index) => {
												return <li className="customers__item" key={index}>
														<figure className="customers__img-container">
																<span className="customers__img-wrap">
																		<img src={ item.get('sliderphoto') } alt="" />
																</span>

																<figcaption className="customers__img-descr-wrap">
																		<p className="customers__img-descr">{ item.get('sliderDescr') }</p>

																		<span className="customers__img-author">{ item.get('slidercompany') }</span>
																		<img src={ item.get('sliderlogo') } alt="" className="customers__img-company"/>
																</figcaption>
														</figure>
												</li>
										})}
										</ul>
								</section>

							<div className="home-provides">
								<section className="home-provides__wrap">
									<h3 className="home-provides__title">
										{ entry.getIn(['data', 'providesTitle']) }
									</h3>

									<ul className="home-provides__list">
									{(entry.getIn(["data", "providesList"]) || []).map((item, index) => {
											return <li className="home-provides__item" key={index}>
											{item.get('text')}
										</li>
									})}
									</ul>
								</section>
								<div className="home-provides__img-wrap">
									<img src="/img/home/v_notebook.png" alt="notebook" className="home-provides__img"/>
								</div>
							</div>

							<section className="home-featured">
								<div className="container">
									<h3 className="home-title home-title--home-featured">
										{ entry.getIn(['data', 'featuredTitle']) }
									</h3>

									<ul className="home-featured__list">
										{(entry.getIn(["data", "featured"]) || []).map((item, index) => {
														return <li className="home-featured__item" key={index}>
												<img src={ item.get('logo') && getAsset(item.get('logo'))} alt="" />
											</li>
										})}
									</ul>

									<ul className="home-featured__list-comment">
										{(entry.getIn(["data", "featured"]) || []).map((item, index) => {
														return <li className="home-featured__list-comment-item" key={index}>
												<p>
													{ item.get('descr') }
												</p>
											</li>
										})}
									</ul>
								</div>
							</section>

							<section className="home-bottom">
								<h3 className="home-bottom__title">
									{ entry.getIn(['data', 'titleBottom']) }
								</h3>

								<button className="home-link home-link--request">
									request a demo
								</button>
							</section>

						</div>
						</div>
				);
		}
}
