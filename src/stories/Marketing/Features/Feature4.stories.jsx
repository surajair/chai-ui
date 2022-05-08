import { SectionWrapper } from "../../components/SectionWrapper";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";

export const Feature4 = () => {
  return (
    <>
      <SectionWrapper>
        <div className={"space-y-10"}>
          <div className="grid grid-cols-1 items-center gap-y-5 lg:grid-cols-2 lg:gap-y-0">
            <div className="">
              <h1 className="max-w-xl text-4xl font-semibold dark:text-white lg:text-5xl">
                Perfect for sales, marketing and support
              </h1>
            </div>
            <div className="">
              <p className="max-w-lg lg:text-lg">
                Create screens directly in Method or add your images from Sketch
                or Figma. You can even sync designs from your cloud storage!
              </p>
            </div>
          </div>
          <div className="rounded-global bg-gray-100 dark:bg-gray-700">
            <img className="h-72 w-auto" src="" />
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3 lg:gap-y-0">
            <div className="flex ">
              <div className="mr-4">
                <div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="mx-4 py-4">
                    <BsFillBookmarkFill className="h-5 w-5 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className={"space-y-2"}>
                <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
                  Property Management
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="mx-4 py-4 ">
                    <MdEmail className="h-6 w-6 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className={"space-y-2"}>
                <h1 className="text-1xl font-semibold dark:text-white lg:text-2xl">
                  Email Marketing
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
            <div className="flex ">
              <div className="mr-4">
                <div className="h-14 w-14 rounded-full bg-gray-100 dark:bg-gray-700">
                  <div className="mx-4 py-4">
                    <MdPermContactCalendar className="h-6 w-6 dark:text-white" />
                  </div>
                </div>
              </div>
              <div className={"space-y-2"}>
                <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
                  Engage Customers
                </h1>
                <p>You can even sync designs from your cloud storage!</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 4",
  component: Feature4,
};
