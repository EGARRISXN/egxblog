"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-lg sm:text-2xl font-semibold pt-2">
        Oh no! Something went wrong.
      </p>
      <br />
      <Button variant="outline" onClick={reset} className="px-8 bg-red-400">
        Refresh
      </Button>
    </div>
  );
}
