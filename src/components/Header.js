import React from "react";
import _ from "lodash";

import { safePrefix } from "../utils";

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header">
        <a href="http://oasis-open-projects.org/">
          <img
            src={safePrefix(
              _.get(this.props, "pageContext.site.siteMetadata.header.logo_img")
            )}
            alt="Logo"
          />
        </a>
      </header>
    );
  }
}
