import { Button } from "react-bootstrap";
export const Calltoaction13 = () => {
  return (
    <>
      <div className="lg:py-14 py-0">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2">
          <div className="bg-gray-100 text-center lg:text-left">
            <div className="py-3 mx-14">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Newsletter
              </h1>
            </div>
            <div className="py-3 mx-14">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add <br className="hidden lg:inline"/>
                your images from Sketch or Figma.
              </h3>
            </div>
            <form>
              <div className="justify-center lg:justify-start py-3 md:flex">
                <div className="py-3 md:pl-14">
                  <input
                    type="text"
                    placeholder="Type Your e-mail"
                    className="h-12 w-72 rounded-lg border-0 bg-gray-200"
                  />
                </div>
                <div className="md:px-3 px-14   py-3">
                  <Button className="bg-primary h-12 w-72 lg:w-56 rounded-lg text-white">
                    Subscribe
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="bg-gray-200 h-64"></div>
        </div>
      </div>
    </>
  );
};

export default {
  title: "Marketing/CallToAction/Calltoaction 13",
  component: Calltoaction13,
};
