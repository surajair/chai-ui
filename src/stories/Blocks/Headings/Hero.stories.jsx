import React from "react";
import PropTypes from "prop-types";

export const Hero = ({ level, content }) => {
  return React.createElement(
    `h${level}`,
    { className: "text-4xl font-bold md:text-5xl 2xl:text-6xl" },
    content
  );
};

Hero.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  content: PropTypes.string,
};

export default {
  title: `Blocks/Headings/Hero`,
  component: Hero,
  argTypes: {
    level: { control: { type: "number", min: 1, max: 6 } },
    content: { control: "text" },
  },
  args: {
    level: 1,
    content: "Enter your hero heading",
  },
};
