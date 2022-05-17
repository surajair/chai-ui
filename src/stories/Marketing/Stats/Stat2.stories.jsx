import React from "react";
import { WithIcon } from "../../Blocks/Stats/WithIcon.stories";
import { SectionWrapper } from "../../components/SectionWrapper";

export const Stat2 = () => {
  return (
    <SectionWrapper>
      <div className="rounded-global mx-auto max-w-5xl py-5 text-center">
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
    </SectionWrapper>
  );
};

Stat2.propTypes = {};

export default {
  title: `Marketing/Stats/Stat 2`,
  component: Stat2,
};
