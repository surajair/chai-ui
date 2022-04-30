import React from "react";
import PropTypes from "prop-types";
import { FaBeer } from "react-icons/fa";

export const WithIcon = ({ count, text, suffix }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <span className={"rounded-full bg-gray-100 p-4"}>
        <FaBeer className={"mx-auto text-xl"} />
      </span>
      <div className={"mt-3 flex flex-col items-center"}>
        <h4 className={"text-primary text-3xl font-black"}>
          {count} {suffix}
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

WithIcon.propTypes = {
  count: PropTypes.any,
  text: PropTypes.string,
  suffix: PropTypes.string,
};

export default {
  title: `Blocks/Stats/With Icon`,
  component: WithIcon,
  argTypes: {
    count: { control: "text" },
    text: { control: "text" },
    suffix: { control: "text" },
  },
  args: {
    count: "100",
    text: "Registered Users",
    suffix: "+",
  },
};
