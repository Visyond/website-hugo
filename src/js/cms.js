import React from "react";
import CMS from "netlify-cms";

import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import SimplePage from './cms-preview-templates/simplepages';
import Solutions from './cms-preview-templates/solutions';
import TestPages from './cms-preview-templates/testpages';
import CaseStudy from './cms-preview-templates/casestudy';
import Landings from './cms-preview-templates/landings';
import Home from "./cms-preview-templates/home";
import HomeNew from "./cms-preview-templates/home-new";
import Contacts from "./cms-preview-templates/contacts";


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
CMS.registerPreviewTemplate("testpages", TestPages);
CMS.registerPreviewTemplate("casestudy", CaseStudy);
CMS.registerPreviewTemplate("landings", Landings);
CMS.registerPreviewTemplate("home", Home);
CMS.registerPreviewTemplate("home-new", HomeNew);
CMS.registerPreviewTemplate("contacts", Contacts);
CMS.registerWidget("color", ColorControl);
