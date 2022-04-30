import React from "react";
import PropTypes from "prop-types";

export const Section = ({ level, content }) => {
  return React.createElement(
    `h${level}`,
    { className: "text-3xl font-bold md:text-4xl 2xl:text-5xl" },
    content
  );
};

Section.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  content: PropTypes.string,
};

export default {
  title: `Blocks/Headings/Section`,
  component: Section,
  argTypes: {
    level: { control: { type: "number", min: 1, max: 6 } },
    content: { control: "text" },
  },
  args: {
    level: 1,
    content: "Enter your section heading",
  },
};
