/* eslint-disable react/jsx-filename-extension */
import React from "react";
import styles from "./scss/ExploreSuggestionList.module.scss";
import img from "../../../assets/Images/icons8-chevron-right-60.png";
import img1 from "../../../assets/Images/icons8-chevron-right-60.png";
import { useEffect } from "react";
import ExploreSuggestionListCard from "./ExploreSuggestionListCard";
import { getTags, onArrowClick } from "./ExploreSuggestionListServices";
import { useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
/**
 * Component to render the whole suggestion list container in Explore page
 * @author Abdalla Mahmoud
 *
 * @component
 */
function ExploreSuggestionList() {
  const { items, tags } = useSelector((state) => state.suggestedList);
  const length = items.length;
  const backgroundColors = [
    "#247273",
    "#1169ba",
    "#247273",
    "#734f24",
    "#7c7c7c",
    "#723e25",
    "#925f29",
    "#145383",
    "#7f2e18",
  ];
  const buttonColor = [
    "#247273",
    "#1169ba",
    "#247273",
    "#734f24",
    "#7c7c7c",
    "#723e25",
    "#925f29",
    "#145383",
    "#7f2e18",
  ];
  useEffect(getTags, []);

  return (
    <div className={styles["suggestion-list"]}>
      <div className={styles["before"]} onClick={onArrowClick}>
        <img src={img} alt="" />
      </div>
      {items.map((value, index) => {
        if (value.length === 0) return <></>;
        if (value.length === 1)
          return (
            <ExploreSuggestionListCard
              background={backgroundColors[index % length]}
              color={buttonColor[index % length]}
              tag={tags[index]}
              img1={value[0]}
              img2={value[0]}
              key={index}
            />
          );
        else
          return (
            <ExploreSuggestionListCard
              background={backgroundColors[index % length]}
              color={buttonColor[index % length]}
              tag={tags[index]}
              img1={value[0]}
              img2={value[1]}
              key={index}
            />
          );
      })}

      <div className={styles["after"]} onClick={onArrowClick}>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default ExploreSuggestionList;
