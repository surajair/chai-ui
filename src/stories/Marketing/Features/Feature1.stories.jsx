import { SectionWrapper } from "../../components/SectionWrapper";
import { AiFillPlayCircle, AiOutlineArrowRight } from "react-icons/ai";

export const Feature1 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-y-5">
            <h1 className="max-w-xl text-2xl font-semibold drop-shadow-lg dark:text-white lg:text-5xl">
              A new and better way to acquire engage and retain customers
            </h1>
            <p className={"max-w-sm text-lg"}>
              Create screens directly in Method or add your images from sketch
              or Figma. You can even sync designs from your cloud storage!
            </p>
            <a
              href={"#"}
              className="bg-primary rounded-global font-xl flex w-fit items-center gap-x-3 p-3 text-white"
            >
              Learn More
              <AiOutlineArrowRight />
            </a>
          </div>
          <div className="rounded-global my-auto flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700 ">
            <AiFillPlayCircle className={"text-primary text-5xl"} />
          </div>
        </div>
        <div className="py-8">
          <hr className={"dark:border-gray-800"} />
        </div>
        <div className="grid grid-cols-1 gap-x-8 text-left lg:grid-cols-3">
          <div className="">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Email Marketing
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Marketing Automation
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold dark:text-white lg:text-2xl">
              Engage Customers
            </h1>
            <p className="py-3 text-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.{" "}
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Features/Feature 1",
  component: Feature1,
};
