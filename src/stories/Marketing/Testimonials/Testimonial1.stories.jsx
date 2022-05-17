import React from "react";
import { SectionWrapper } from "../../components/SectionWrapper";
import {
  SectionHeading,
  SectionHeadingWrapper,
} from "../../components/SectionHeading";
import { SectionSubHeading } from "../../components/SectionSubHeading";
import { FaCaretDown } from "react-icons/all";
import { startCase, toLower } from "lodash";
const { faker } = require("@faker-js/faker");

export const Testimonial1 = () => {
  return (
    <SectionWrapper classes={""}>
      <SectionHeadingWrapper classes={"text-center"}>
        <SectionHeading>What people are saying</SectionHeading>
        <SectionSubHeading>
          Listen to what our customers have to say about us
        </SectionSubHeading>
      </SectionHeadingWrapper>
      <div className="mt-10 grid gap-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(() => (
          <div className="text-center">
            <div className="rounded-global bg-gray-50 py-8 px-4 shadow-lg">
              <h2 className="text-xl font-semibold xl:text-2xl">
                {startCase(toLower(faker.lorem.words(3)))}
              </h2>
              <p className="pt-4">{faker.lorem.words(12)}</p>
            </div>
            <div className="flex justify-center pt-0">
              <FaCaretDown className={"-mt-4 text-4xl text-gray-50"} />
            </div>
            <div className="px-4 pt-3">
              <img
                alt={"User avatar"}
                className="mx-auto h-14 w-14 rounded-full "
                src={faker.image.avatar()}
              />
              <h3 className="pt-4 text-lg font-semibold  xl:text-xl">
                {faker.name.findName()}
              </h3>
              <p className="text-sm">CEO at {faker.company.companyName()}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

Testimonial1.propTypes = {};

export default {
  title: `Marketing/Testimonials/Testimonial 1`,
  component: Testimonial1,
};
