import React from "react";
import _ from "lodash";

import { Link, safePrefix } from "../utils";

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header">
        <Link to={safePrefix("/")}>
          <img
            src={safePrefix(
              _.get(this.props, "pageContext.site.siteMetadata.header.logo_img")
            )}
            alt="Logo"
          />
        </Link>
      </header>
    );
  }
}
