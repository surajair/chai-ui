import React from "react";
import PropTypes from "prop-types";

export const WithLeftBorder = ({ count, text, suffix }) => {
  return (
    <div className={"flex flex-col items-start"}>
      <div className={"border-l-2 pl-3"}>
        <h4 className={"text-2xl font-bold"}>
          {count} {suffix}
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

WithLeftBorder.propTypes = {
  count: PropTypes.any,
  text: PropTypes.string,
  suffix: PropTypes.string,
};

export default {
  title: `Blocks/Stats/With Left Border`,
  component: WithLeftBorder,
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
