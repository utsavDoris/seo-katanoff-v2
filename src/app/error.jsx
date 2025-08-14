"use client";

import { Button, LinkButton } from "@/components/button";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h2
        className={`text-center text-xl md:text-2xl lg:text-5xl text-indigo font-semibold`}
      >
        Something went wrong!
      </h2>
      <p className="text-sm my-5">
        Please check browser console For more details!
      </p>
      <div className="mt-8 2xl:mt-12 w-fit flex justify-center items-center gap-5">
        <Button title={"Retry"} type={"button"} onClick={() => reset()}>
          Try again
        </Button>
        <LinkButton title={"home"} href={"/"}>
          Back to home
        </LinkButton>
      </div>
    </main>
  );
}
