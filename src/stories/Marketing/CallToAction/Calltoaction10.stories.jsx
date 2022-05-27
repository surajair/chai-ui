import { SectionWrapper } from "../../components/SectionWrapper";
import {
  BsApple,
  BsFillFileEarmarkMusicFill,
  BsClockFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { IoMdBasket } from "react-icons/io";
import { HiPuzzle } from "react-icons/hi";
import { MdPermContactCalendar } from "react-icons/md";
export const Calltoaction10 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="mx-auto">
          <div className="flex">
            <div className="mx-auto mt-14 h-10 w-10 rounded-full bg-gray-200 px-2 py-2">
              <BiSearch className="h-5 w-5" />
            </div>
            <div className="mx-auto mb-14 h-10 w-10 rounded-full bg-gray-200 px-2 py-2">
              <IoMdBasket className="h-5 w-5" />
            </div>
            <div className="mx-auto mt-14 h-9 w-9 rounded-full bg-gray-200 px-2 py-2">
              <MdPermContactCalendar className="h-5 w-5" />
            </div>
          </div>
          <div className="flex">
            <div className="my-auto mx-3 h-10 w-10 rounded-full bg-gray-200 px-3 py-3 lg:mx-14">
              <BsFillBookmarkFill className="h-4 w-4" />
            </div>
            <div className="text-center">
              <div className="-mx-24 py-3 md:mx-14 lg:mx-48 2xl:mx-24">
                <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                  The fast & visual way to <br className="hidden md:inline" />{" "}
                  understand your users
                </h1>
              </div>
              <div className="-mx-5 py-3">
                <h3 className=" leading-6 lg:text-lg">
                  Create screens directly in Method or add your images from
                  Sketch or <br className="hidden md:inline" />
                  Figma.{" "}
                  <span className="hidden md:inline">
                    You can even sync designs from your cloud storage!
                  </span>
                </h3>
              </div>
              <div className="-mx-10 flex justify-center py-3 md:mx-0">
                <div>
                  <button className="bg-primary rounded-lg py-1 lg:px-3">
                    <div className="flex">
                      <div className="my-auto px-1">
                        <BsApple className="h-6 w-6 text-white" />
                      </div>
                      <div className="px-1">
                        <div>
                          <h1 className="text-xs text-white">
                            Download on the{" "}
                          </h1>
                        </div>
                        <div>
                          <h4 className="text-white">App Store</h4>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="px-3">
                  <button className="bg-primary rounded-lg py-1 lg:px-3">
                    <div className="flex">
                      <div className="my-auto px-1">
                        <FaGooglePlay className="h-6 w-6 text-white" />
                      </div>
                      <div className="px-1">
                        <div>
                          <h1 className="text-xs text-white">Get it on </h1>
                        </div>
                        <div>
                          <h4 className="text-white">Google Play</h4>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="my-auto mx-4 h-10 w-10 rounded-full bg-gray-200 px-2 py-2 lg:mx-14">
              <AiFillCamera className="h-5 w-5" />
            </div>
          </div>
          <div className="flex">
            <div className="mx-auto mt-10 h-10 w-10 rounded-full bg-gray-200 px-2 py-2 lg:mt-14">
              <HiPuzzle className="h-5 w-5" />
            </div>
            <div className="mx-auto mt-16 h-12 w-12 rounded-full bg-gray-200 px-3 py-3 lg:mt-24">
              <BsFillFileEarmarkMusicFill className="h-5 w-5" />
            </div>
            <div className="mx-auto  h-10 w-10 rounded-full bg-gray-200 px-3 py-3 lg:mt-14">
              <BsClockFill className="h-4 w-4" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 10",
  component: Calltoaction10,
};
