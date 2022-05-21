import { Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { SectionWrapper } from "../../components/SectionWrapper";
export const Pricing3 = () => {
  return (
    <>
      <SectionWrapper>
        <div className="px-4">
          <div className="px-7 lg:flex">
            <div className="py-3 lg:px-4">
              <h1 className="text-3xl font-bold leading-7 md:text-5xl 2xl:text-6xl">
                Build the right plan
                <br className="hidden md:inline" /> for your team
              </h1>{" "}
            </div>
            <div className="py-3  text-left lg:px-20 2xl:px-10">
              <h3 className=" leading-6 lg:text-lg">
                Create screens directly in Method or add your images{" "}
                <br className="hidden md:inline" /> from Sketchor Figma. You can
                even sync designs <br className="hidden md:inline" /> from your
                cloud storage!
              </h3>
            </div>
          </div>
          <div className="justify-center py-3 lg:flex">
            <div className="mx-3 my-2 rounded-lg border-2 bg-slate-100 py-3">
              <div className="py-1  px-7">
                <h1 className="text-xl  font-bold">Starter</h1>
              </div>
              <div className="py-1 px-7">
                <h3 className="leading-6">
                  Go beyond email and customize your workflow
                </h3>
              </div>
              <div className="px-7 py-2">
                <div className="flex py-2">
                  <div className="py-1">
                    <FaCheck />
                  </div>
                  <div className="px-3">
                    <p>30 Non-Commercial Site</p>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="py-1">
                    <FaCheck />
                  </div>
                  <div className="px-3">
                    <p>Custom Branding</p>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="py-1">
                    <FaCheck />
                  </div>
                  <div className="px-3">
                    <p>100GB System Storage</p>
                  </div>
                </div>
                <div className="flex py-2">
                  <div className="py-1">
                    <FaCheck />
                  </div>
                  <div className="px-3">
                    <p>Ticket Support</p>
                  </div>
                </div>
              </div>
              <div className="flex py-3">
                <div className="px-7">
                  <h1 className="text-5xl font-bold">$19</h1>
                </div>
                <div className="px-3">
                  <div>
                    <p>Per User</p>
                  </div>
                  <div>
                    <p>Per Month</p>
                  </div>
                </div>
              </div>
              <div className=" px-5 py-3">
                <Button className="border-primary h-10 w-64 rounded-lg border-2 lg:w-80">
                  <p className="text-primary">Select Plan</p>
                </Button>
              </div>
              <div className=" px-5 py-2">
                <Button className="h-10 w-64 lg:w-80">
                  <p className="">Learn More</p>
                </Button>
              </div>
            </div>

            <div className="lg:mx-5 lg:flex lg:rounded-lg lg:border-2">
              <div className="mx-3 my-2 rounded-lg border-2 py-3 lg:border-0">
                <div className="py-1  px-7">
                  <h1 className="text-xl  font-bold">Method Plus</h1>
                </div>
                <div className="py-1 px-7">
                  <h3 className="leading-6">
                    Go beyond email and customize your workflow
                  </h3>
                </div>
                <div className="px-7 py-2">
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>30 Non-Commercial Site</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>Custom Branding</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>500GB System Storage</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>Email Support</p>
                    </div>
                  </div>
                </div>
                <div className="flex py-3">
                  <div className="px-7">
                    <h1 className="text-5xl font-bold">$29</h1>
                  </div>
                  <div className="px-3">
                    <div>
                      <p>Per User</p>
                    </div>
                    <div>
                      <p>Per Month</p>
                    </div>
                  </div>
                </div>
                <div className=" px-5 py-3">
                  <Button className="border-primary h-10 w-64 rounded-lg border-2 lg:w-80">
                    <p className="text-primary">Select Plan</p>
                  </Button>
                </div>
                <div className=" px-5 py-2">
                  <Button className="h-10 w-64 lg:w-80">
                    <p className="">Learn More</p>
                  </Button>
                </div>
              </div>
              <div className="mx-3 my-2 rounded-lg border-2 py-3 lg:border-0">
                <div className="py-1  px-7">
                  <h1 className="text-xl  font-bold">Method Pro</h1>
                </div>
                <div className="py-1 px-7">
                  <h3 className="leading-6">
                    Go beyond email and customize your workflow
                  </h3>
                </div>
                <div className="px-7 py-2">
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>30 Non-Commercial Site</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>Custom Branding</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>1TB System Storage</p>
                    </div>
                  </div>
                  <div className="flex py-2">
                    <div className="py-1">
                      <FaCheck />
                    </div>
                    <div className="px-3">
                      <p>Phone Support</p>
                    </div>
                  </div>
                </div>
                <div className="flex py-3">
                  <div className="px-7">
                    <h1 className="text-5xl font-bold">$39</h1>
                  </div>
                  <div className="px-3">
                    <div>
                      <p>Per User</p>
                    </div>
                    <div>
                      <p>Per Month</p>
                    </div>
                  </div>
                </div>
                <div className=" px-5 py-3">
                  <Button className="border-primary h-10 w-64 rounded-lg border-2 lg:w-80">
                    <p className="text-primary">Select Plan</p>
                  </Button>
                </div>
                <div className=" px-5 py-2">
                  <Button className="h-10 w-64 lg:w-80">
                    <p className="">Learn More</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default {
  title: "Marketing/Pricing/Pricing 3",
  component: Pricing3,
};
