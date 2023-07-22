/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ExploreAside from "../../components/ExploreAside/ExploreAside";
import styles from "../Explore/scss/explore.module.scss";

import SearchSection from "../../components/SearchSection/SearchSection";
function Search() {
  return (
    <div>
      <div className={styles["explore-container"]}>
        <SearchSection />
        <ExploreAside tagName="Checkout related blogs" />
      </div>
    </div>
  );
}

export default Search;
