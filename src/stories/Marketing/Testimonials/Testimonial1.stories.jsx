import React from "react";
import PropTypes from "prop-types";
import { Simple as SimpleStat } from "../../Blocks/Stats/Simple.stories";
import { Section } from "../../Blocks/Headings/Section.stories";
import { Sub } from "../../Blocks/Headings/Sub.stories";

export const Testimonial1 = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="">
        <Section level={2} content={" Our Clients Speak"} />
        <Sub content={" We have been working with clients around the world"} />
      </div>
      <div className="mx-auto  grid grid-cols-1 gap-5 px-5 pt-20 lg:max-w-7xl lg:grid-cols-3">
        <div className="drop-shadow-xl">
          <div className=" rounded-md border-0 bg-white py-7 px-3">
            <h2 className="pt-4 text-2xl  font-semibold">Quo Collabarating</h2>
            <p className="px-1 pt-4 pb-4 ">
              Quo impedit nemo est blanditiis voluptas sed illo impedit in sint
              voluptatem qui suscipit quia.
            </p>
          </div>
          <div className="flex justify-center pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill=""
              className="bi bi-caret-down-fill"
              viewBox="0 5 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <div className="pt-3">
            <div className="flex justify-center">
              <img
                className="h-16 w-16 rounded-full "
                src="https://picsum.photos/40/40"
              />
            </div>
            <h3 className="pt-4 text-2xl  font-semibold">Jane Cooper</h3>
            <p className="">CEO at ABC Corporation</p>
          </div>
        </div>
        <div className="drop-shadow-xl">
          <div className=" rounded-md border-0 bg-white py-7 px-3">
            <h2 className="pt-4  text-2xl font-semibold">Eum Collabarating</h2>
            <p className="px-1  pt-4 pb-4">
              Eum enim maiores qui dolor maiores qui officiis consequuntur ut
              galisum tenetur.
            </p>
          </div>
          <div className="flex justify-center pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill=""
              className="bi bi-caret-down-fill"
              viewBox="0 5 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <div className="pt-3">
            <div className="flex justify-center">
              <img
                className="h-16 w-16 rounded-full "
                src="https://picsum.photos/40/40"
              />
            </div>
            <h3 className="pt-4  text-2xl font-semibold">Jane Cooper</h3>
            <p className="">CEO at ABC Corporation</p>
          </div>
        </div>
        <div className="drop-shadow-xl">
          <div className=" rounded-md border-0 bg-white py-7 px-3">
            <h2 className="pt-4  text-2xl font-semibold">Sunt Collabarating</h2>
            <p className="px-1  pt-4 pb-4">
              Et sunt illo id enim ipsum ut doloremque minus est voluptatum
              sequi ad provident voluptatum.{" "}
            </p>
          </div>
          <div className="flex justify-center pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill=""
              className="bi bi-caret-down-fill"
              viewBox="0 5 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <div className="pt-3">
            <div className="flex justify-center">
              <img
                className="h-16 w-16 rounded-full "
                src="https://picsum.photos/40/40"
              />
            </div>
            <h3 className="pt-4  text-2xl font-semibold">Jane Cooper</h3>
            <p className="">CEO at ABC Corporation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial1.propTypes = {};

export default {
  title: `Marketing/Testimonials/Testimonial 1`,
  component: Testimonial1,
};
