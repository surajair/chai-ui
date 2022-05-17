import { BsPlayFill, BsArrowRight } from "react-icons/bs";
import { MdFileDownload } from "react-icons/md";
import { Button } from "react-bootstrap";
export const Calltoaction3 = () => {
  return (
    <>
      <div className="dark -mr-4 -mt-4 px-4 dark:bg-black dark:text-white lg:py-14">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="my-auto pt-6 md:px-10 lg:pt-0">
            <div className="py-3">
              <h2 className="font-bold">Product of the day</h2>
            </div>
            <div className="py-3">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                The best customer
                <br className="hidden lg:inline" /> experiences are built{" "}
                <br className="hidden lg:inline" />
                with Method
              </h1>
            </div>
            <div className="py-3">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add your images
                <br className="hidden lg:inline" /> from Sketch or Figma. You
                can even sync designs
                <br className="hidden lg:inline" />
                from your cloud storage!
              </h3>
            </div>
            <div className="justify-left flex py-3">
              <div>
                <Button className="bg-transparent">
                  <div className="flex">
                    <div className="bg-primary h-10 w-12 rounded-full px-3 py-2">
                      <BsPlayFill className="h-6 w-6 text-white" />
                    </div>
                    <div className="px-3 py-2">
                      <h1 className="font-semibold">Play Video</h1>
                    </div>
                  </div>
                </Button>
              </div>
              <div className="hidden lg:inline">
                <Button className="bg-transparent px-3">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-gray-200 px-2 py-2">
                      <MdFileDownload className="h-6 w-6" />
                    </div>
                    <div className="px-3 py-2">
                      <h1 className="font-semibold">Download</h1>
                    </div>
                  </div>
                </Button>
              </div>
              <div className="lg:hidden">
                <Button className="bg-transparent px-3">
                  <div className="flex">
                    <div className="h-10 w-10 rounded-full bg-gray-200 px-2 py-2">
                      <BsArrowRight className="h-6 w-6" />
                    </div>
                    <div className="px-3 py-2">
                      <h1 className="font-semibold">Read More</h1>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className=" flex justify-end lg:-ml-5 lg:-mr-0 lg:mt-0 ">
            <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1651754274/Safari_hxxynx.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 3",
  component: Calltoaction3,
};
