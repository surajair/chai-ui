import React from "react";
import PropTypes from "prop-types";
import { Simple as SimpleStat } from "../../Blocks/Stats/Simple.stories";
import { Section } from "../../Blocks/Headings/Section.stories";
import { Sub } from "../../Blocks/Headings/Sub.stories";
import { WithIcon } from "../../Blocks/Stats/WithIcon.stories";

export const Stat2 = () => {
  return (
    <div className="px-4">
      <div className="rounded-global mx-auto max-w-5xl py-5 text-center shadow-md">
        <div className="row-gap-8 grid grid-cols-2 gap-y-8 md:grid-cols-4">
          <div className="text-center">
            <WithIcon suffix={"+"} count={"87"} text={"Emergency"} />
          </div>
          <div className="text-center">
            <WithIcon suffix={"+"} count={"11"} text={"Emergency"} />
          </div>
          <div className="text-center">
            <WithIcon suffix={"+"} count={"1000"} text={"Emergency"} />
          </div>
          <div className="text-center">
            <WithIcon suffix={"+"} count={"340"} text={"Emergency"} />
          </div>
        </div>
      </div>
    </div>
  );
};

Stat2.propTypes = {};

export default {
  title: `Marketing/Stats/Stat 2`,
  component: Stat2,
};
