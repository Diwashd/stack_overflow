"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
interface CustomInputInterface {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchBar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputInterface) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px]  grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="Search Icon"
          className="cursor-pointer"
        />
      )}

      <Input
        value=""
        type="text"
        placeholder="Search for questions "
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="Search Icon"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchBar;
