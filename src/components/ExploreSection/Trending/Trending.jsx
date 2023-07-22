import React from "react";
import { useSelector } from "react-redux";
import TrendingList from "../TrendingList/TrendingList";
import FourFlexData from "../FourFlexData";
import ThreeFlexesData from "../ThreeFlexesData";
import TwoFlexesData from "../TwoFlexesData";
import OneFlexData from "../OneFlexData";
import { componentDidMount } from "../ExploreSectionController";
import { useEffect } from "react";
function Trending() {
  const { trendingPosts, flexesNumber } = useSelector((state) => state.Explore);
  useEffect(componentDidMount, []);
  return (
    <div style={{ minHeight: "250px" }}>
      {/* minHeight = 250px the height of the menu when no posts retrieved */}
      <TrendingList />
      {flexesNumber == 4 ? (
        <FourFlexData posts={trendingPosts} />
      ) : flexesNumber == 3 ? (
        <ThreeFlexesData posts={trendingPosts} />
      ) : flexesNumber == 2 ? (
        <TwoFlexesData posts={trendingPosts} />
      ) : (
        <OneFlexData posts={trendingPosts} />
      )}
    </div>
  );
}

export default Trending;
