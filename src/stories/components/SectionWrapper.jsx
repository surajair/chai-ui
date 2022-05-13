
export const SectionWrapper = ({ id = "", children, classes = "" }) => {
  return (
    <div className={"py-14 px-4 xl:px-0 dark dark:bg-black dark:text-white" + classes}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </div>
  );
};
