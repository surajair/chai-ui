import React from "react";

export const SectionHeading = ({ children }) => {
  return (
    <h2 className={"text-3xl font-bold leading-7 md:text-4xl 2xl:text-5xl"}>
      {children}
    </h2>
  );
};

export const SectionHeadingWrapper = ({ children, classes = "" }) => {
  return <div className={"space-y-2 " + classes}>{children}</div>;
};
