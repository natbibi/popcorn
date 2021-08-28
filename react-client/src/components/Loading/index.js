import React from "react";
const loadingImg =
  "https://i.giphy.com/media/65LcwStZ4smNeDa6jQ/giphy.webp";

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
