import React from "react";
import PropTypes from "prop-types";
import { Simple as SimpleStat } from "../../Blocks/Stats/Simple.stories";
import { Section } from "../../Blocks/Headings/Section.stories";
import { Sub } from "../../Blocks/Headings/Sub.stories";

export const Stat1 = () => {
  return (
    <div className="mx-auto max-w-5xl py-10 text-center">
      <div className="pb-8">
        <Section level={2} content={"Some count that matters"} />
        <Sub content={"Our achievement in the journey depicted in numbers"} />
      </div>
      <div className="row-gap-8 grid grid-cols-2 gap-y-4 md:grid-cols-4">
        <div className="text-center md:border-r">
          <SimpleStat count={"100"} text={"Emergency"} />
        </div>
        <div className="text-center md:border-r">
          <SimpleStat count={"300"} text={"Lead users"} />
        </div>
        <div className="text-center md:border-r">
          <SimpleStat count={"400"} text={"Employees"} />
        </div>
        <div className="text-center">
          <SimpleStat count={"34"} text={"Team members"} />
        </div>
      </div>
    </div>
  );
};

Stat1.propTypes = {};

export default {
  title: `Marketing/Stats/Stat 1`,
  component: Stat1,
};
