import React from "react";
import { CircleLoader } from "react-spinners";

const LoaderContainer = ({ loading }) => (
  <div className="centered-background">
    <div className="centered">
      <CircleLoader color={"#fff"} loading={loading} size={100} />
    </div>
  </div>
);

export default LoaderContainer;
