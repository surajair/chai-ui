import React from "react";
import PropTypes from "prop-types";

export const Sub = ({ content }) => {
  return React.createElement(
    `p`,
    { className: "text-lg leading-snug" },
    content
  );
};

Sub.propTypes = {
  content: PropTypes.string,
};

export default {
  title: `Blocks/Headings/Sub`,
  component: Sub,
  argTypes: {
    content: { control: "text" },
  },
  args: {
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
};
