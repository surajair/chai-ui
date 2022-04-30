import React from "react";
import PropTypes from "prop-types";

export const WithBottomBorder = ({ count, text, suffix }) => {
  return (
    <div className={"flex flex-col"}>
      <div className={"border-b-2 pb-2"}>
        <h4 className={"text-3xl font-bold"}>
          {count} {suffix}
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

WithBottomBorder.propTypes = {
  count: PropTypes.any,
  text: PropTypes.string,
  suffix: PropTypes.string,
};

export default {
  title: `Blocks/Stats/With Bottom Border`,
  component: WithBottomBorder,
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
