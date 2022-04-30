import React from "react";
import PropTypes from "prop-types";

const Heading = ({ level, content, classes }) => {
  return React.createElement(`h${level}`, { className: classes }, content);
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  content: PropTypes.string,
  classes: PropTypes.string,
};

export default {
  title: `Blocks/Heading`,
  component: Heading,
  argTypes: {
    level: { control: { type: "number", min: 1, max: 6 } },
    content: { control: "text" },
    classes: { control: "text" },
  },
  args: {
    level: 1,
    content: "Enter your heading",
    classes: "text-2xl",
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Heading {...args} />;

export const HeroHeading = Template.bind({});
HeroHeading.args = {
  level: 1,
  content: "Hero Heading",
  classes: "text-4xl md:text-5xl 2xl:text-6xl",
};

export const SectionHeading = Template.bind({});
SectionHeading.args = {
  level: 2,
  content: "Section Heading",
  classes: "text-3xl md:text-4xl 2xl:text-5xl",
};
