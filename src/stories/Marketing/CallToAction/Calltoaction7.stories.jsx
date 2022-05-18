import { SectionWrapper } from "../../components/SectionWrapper";
import { Button } from "react-bootstrap";
export const Calltoaction7 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="justify-center lg:flex">
          <div className="px-5 py-3 text-center">
            <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
              Make Made Maden
            </h1>
          </div>
          <div className="flex justify-center py-3 px-5">
            <form>
              <div className="lg:flex">
                <div className="px-2 py-2">
                  <input
                    type="text"
                    placeholder="Type Your e-mail"
                    className="h-12 w-72 rounded-lg border-0 bg-gray-200"
                  />
                </div>
                <div className="px-2 py-2">
                  <Button className="bg-primary h-12 w-72 rounded-lg text-white">
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 7",
  component: Calltoaction7,
};
