/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import styles from "./scss/ExploreAside.module.scss";
import img from "../../assets/Images/avatar.png";
import { useSelector } from "react-redux";
import { onXClick, onFollowClick } from "./CheckBlogController";
import { fetchBlogs } from "./CheckBlogServices";
function CheckBlog(props) {
  const { checkBlogs } = useSelector((state) => state.Explore);
  useEffect(fetchBlogs, []);
  return (
    <>
      <div className={styles["header"]}>
        <div>{props.tagName}</div>
      </div>
      <ul className="check-blog-list">
        {checkBlogs.map((blog, index) => {
          return (
            <li
              style={{ position: "relative" }}
              className="checkBlog"
              value={index}
              id={blog["_id"]}
              key={index}
            >
              <div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${blog.avatar}`}
                  alt=""
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = blog.avatar;
                  }}
                />
              </div>
              <div>
                <div style={{ overflow: "hidden" }}>{blog.handle}</div>
                <div>savage-words</div>
              </div>
              <div onClick={onFollowClick}>Follow</div>
              <div
                className={`${styles["cross-sign"]} cross-sign`}
                style={{ position: "absolute" }}
                onClick={onXClick}
              >
                X
              </div>
            </li>
          );
        })}
      </ul>

      {/* <li>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <div>savage-words</div>
            <div>savage-words</div>
          </div>
          <div>Follow</div>
        </li>
        <li>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <div>savage-words</div>
            <div>savage-words</div>
          </div>
          <div>Follow</div>
        </li>
        <li>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <div>savage-words</div>
            <div>savage-words</div>
          </div>
          <div>Follow</div>
        </li> */}
    </>
  );
}

export default CheckBlog;
