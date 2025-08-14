"use client";
import { LinkButton } from "@/components/button";
import Lottie from "lottie-react";
import notFoundAnimation from "@/assets/animations/not-found.json";

const NotFound = () => {
  return (
    <section
      className={
        "flex flex-col justify-center  items-center min-h-screen 2xl:mt-20 2xl:justify-start"
      }
    >
      <div className="overflow-hidden w-full max-w-[500px] h-[250px] md:h-[350px] xl:max-w-[600px] xl:h-[400px] 2xl:max-w-[700px] 2xl:h-[500px]">
        <Lottie
          animationData={notFoundAnimation}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
      <h3 className="mb-10 text-2xl my-2">Page Not Found</h3>
      <LinkButton href={"/"} title="back to Home Page">
        Back to Home Page
      </LinkButton>
    </section>
  );
};

export default NotFound;
