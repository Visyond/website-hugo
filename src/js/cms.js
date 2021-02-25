import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import SimplePage from './cms-preview-templates/simplepages';
import Solutions from './cms-preview-templates/solutions';
import Features from './cms-preview-templates/features';
import CaseStudy from './cms-preview-templates/casestudy';
import Home from "./cms-preview-templates/home";
import Contacts from "./cms-preview-templates/contacts";
import CaseStudies from "./cms-preview-templates/casestudies";
import Pricing from "./cms-preview-templates/pricing";
import Pricings from "./cms-preview-templates/pricings";
import FeaturesPage from "./cms-preview-templates/features-page";
import SolutionsPage from "./cms-preview-templates/solutions-page";
import Press from "./cms-preview-templates/press";
import WhyPage from "./cms-preview-templates/why-visyond"
import PartnerPage from "./cms-preview-templates/partner-page"

// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("simplepages", SimplePage);
CMS.registerPreviewTemplate("solutions", Solutions);
CMS.registerPreviewTemplate("features", Features);
CMS.registerPreviewTemplate("casestudy", CaseStudy);
CMS.registerPreviewTemplate("home", Home);
CMS.registerPreviewTemplate("contacts", Contacts);
CMS.registerPreviewTemplate("casestudies", CaseStudies);
CMS.registerPreviewTemplate("pricing", Pricing);
CMS.registerPreviewTemplate("pricings", Pricings);
CMS.registerPreviewTemplate("features-page", FeaturesPage);
CMS.registerPreviewTemplate("solutions-page", SolutionsPage);
CMS.registerPreviewTemplate("press", Press);
CMS.registerPreviewTemplate("why-visyond", WhyPage);
CMS.registerPreviewTemplate("partner-page", PartnerPage);
CMS.registerWidget("color", ColorControl);
