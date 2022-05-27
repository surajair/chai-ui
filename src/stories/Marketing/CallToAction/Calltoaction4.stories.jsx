import { SectionWrapper } from "../../components/SectionWrapper";
import { IoMdLock } from "react-icons/io";
import { RiFlashlightFill } from "react-icons/ri";
import { MdDownload, MdCloudUpload } from "react-icons/md";
export const Calltoaction4 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="grid lg:grid-cols-3">
          <div className="lg:-mr-52">
            <div className="mx-auto my-2 h-12 w-12 rounded-full bg-gray-200 px-3 py-3">
              <IoMdLock className="h-6 w-6" />
            </div>
            <div className="py-2 text-center">
              <h1 className="text-lg font-semibold">Proxy Access</h1>
            </div>
            <div className="py-2 text-center">
              <h3>
                Create screens directly in Method
                <br className="md:hidden" /> or add{" "}
                <br className="hidden md:inline" />
                your images from Sketch or <br className="md:hidden" />
                Figma. You <br className="hidden md:inline" />
                can even sync designs
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <button className="bg-primary rounded-lg px-3">
                <div className="flex">
                  <div className="my-auto h-7 w-7 rounded-full bg-white px-1 py-1">
                    <RiFlashlightFill className="text-primary h-5 w-5" />
                  </div>
                  <div className="px-3 py-2">
                    <h1 className="font-semibold text-white">Get Access</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="hidden lg:inline lg:flex lg:justify-center">
            <img src="https://res.cloudinary.com/dw8gdozpq/image/upload/v1652789808/Divider_ay0eut.png" />
          </div>
          <div className="py-5 lg:hidden">
            <hr />
          </div>
          <div className="lg:-ml-52">
            <div className="mx-auto my-2 h-12 w-12 rounded-full bg-gray-200 px-3 py-3">
              <MdCloudUpload className="h-6 w-6" />
            </div>
            <div className="py-2 text-center">
              <h1 className="text-lg font-semibold">File Hosting</h1>
            </div>
            <div className="py-2 text-center">
              <h3>
                Create screens directly in Method <br className="md:hidden" />
                or add <br className="hidden md:inline" />
                your images from Sketch or <br className="md:hidden" />
                Figma. You <br className="hidden md:inline" />
                can even sync designs
              </h3>
            </div>
            <div className="flex justify-center py-2">
              <button className="rounded-lg border-2 px-3">
                <div className="flex">
                  <div className="my-auto h-7 w-7 rounded-full bg-white px-1 py-1">
                    <MdDownload className=" h-5 w-5" />
                  </div>
                  <div className="px-3 py-2">
                    <h1 className="font-semibold">Download Free</h1>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 4",
  component: Calltoaction4,
};
