import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import SimplePage from './cms-preview-templates/simplepages';
import CaseStudy from './cms-preview-templates/casestudy';
import Landings from './cms-preview-templates/landings';
import Home from "./cms-preview-templates/home";
import Contact from "./cms-preview-templates/contact";
import CaseStudies from "./cms-preview-templates/casestudies";


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
CMS.registerPreviewTemplate("casestudy", CaseStudy);
CMS.registerPreviewTemplate("landings", Landings);
CMS.registerPreviewTemplate("home", Home);
CMS.registerPreviewTemplate("contact", Contact);
CMS.registerPreviewTemplate("casestudies", CaseStudies);
CMS.registerWidget("color", ColorControl);
