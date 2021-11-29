import React from "react";
import ReactLoading from "react-loading";
import PropTypes from 'prop-types'

const PageLoading = () => {
  return (
    <div className="page-loading">
      <ReactLoading
        type={"spin"}
        color="blue"
        height={70}
        width={70}
      />
    </div>
  );
};

PageLoading.propTypes = {
  style: PropTypes.object
}

export default PageLoading;
