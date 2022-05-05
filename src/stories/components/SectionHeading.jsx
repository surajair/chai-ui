import React from "react";

export const SectionHeading = ({ children }) => {
  return (
    <h2 className={"pt-4 lg:pt-16 text-2xl gap-y-9 font-semibold leading-7 lg:text-5xl 2xl:text-7xl"}>
      {children}
    </h2>
  );
};

export const SectionHeadingWrapper = ({ children, classes = "" }) => {
  return <div className={"space-y-2 " + classes}>{children}</div>;
};
