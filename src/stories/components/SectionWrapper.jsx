export const SectionWrapper = ({ id = "", children, classes = "" }) => {
  return (
    <div className={"py-14 px-4 xl:px-0 " + classes}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};
