import React from "react";
import { comment } from "./dbase/Comment";
import "../style/comment.css";

const Comment = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center">
        <h1 className="text-center mb-5 comment-title">
          A few words from people that choose to work with me
        </h1>
      </div>
      <div className="comment-col-cart">
        {comment.map((item, index) => {
          return (
            <div>
              <div key={index} className="comment-cart">
                <div className="comment-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="comment-text">
                  <p>{item.comment}</p>
                  <h4>{item.name}</h4>
                </div>
              </div>
              <div className="d-lg-none d-md-none">
                <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
