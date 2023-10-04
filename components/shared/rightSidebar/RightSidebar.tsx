import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../renderTag/RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: 1, title: "How do I use express as a custom server in NextJS?" },
    { _id: 2, title: "Can I get the course for free?" },
    { _id: 3, title: "Redux Toolkit Not Updating State as Expected?" },
    {
      _id: 4,
      title:
        "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    },
    { _id: 5, title: "Async/Await Function Not Handling Errors Properly" },
  ];
  const popularTags = [
    { _id: 1, name: "javascript", totalQuestions: 4 },
    { _id: 1, name: "Nextjs", totalQuestions: 4 },
    { _id: 2, name: "Reactjs", totalQuestions: 4 },
    { _id: 3, name: "node.js", totalQuestions: 4 },
    { _id: 4, name: "Python", totalQuestions: 4 },
    { _id: 5, name: "redux", totalQuestions: 4 },
  ];

  return (
    <section className=" background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div className="flex flex-col">
        <div>
          <h3 className="h3-bold text-dark200_light900"> Hot Network</h3>
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map((question) => (
              <Link
                href={`/questions/${question._id}`}
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>{" "}
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron-right"
                  className="invert-colors"
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="h3-bold text-dark200_light900"> Popular Tags</h3>
          <div className="mt-7 flex flex-col gap-4">
            {popularTags.map((tag) => (
              <RenderTag
                key={tag._id}
                name={tag.name}
                _id={tag._id}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
