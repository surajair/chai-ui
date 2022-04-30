import React from "react";
import PropTypes from "prop-types";

export const Simple = ({ count, text }) => {
  return (
    <div className={"text-center"}>
      <h4 className={"text-3xl font-bold"}>{count}</h4>
      <p>{text}</p>
    </div>
  );
};

Simple.propTypes = {
  count: PropTypes.any,
  text: PropTypes.string,
};

export default {
  title: `Blocks/Stats/Simple`,
  component: Simple,
  argTypes: {
    count: { control: "text" },
    text: { control: "text" },
  },
  args: {
    count: "100",
    text: "Help",
  },
};
