import React from "react";
import { Simple as SimpleStat } from "../../Blocks/Stats/Simple.stories";
import { SectionWrapper } from "../../components/SectionWrapper";
import {
  SectionHeading,
  SectionHeadingWrapper,
} from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";

export const Stat1 = () => {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeadingWrapper>
          <SectionHeading>Some count that matters</SectionHeading>
          <SectionSubHeading>
            Our achievement in the journey depicted in numbers
          </SectionSubHeading>
        </SectionHeadingWrapper>
        <div className="row-gap-8 mt-10 grid grid-cols-2 gap-y-4 md:grid-cols-4">
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
    </SectionWrapper>
  );
};

Stat1.propTypes = {};

export default {
  title: `Marketing/Stats/Stat 1`,
  component: Stat1,
};
