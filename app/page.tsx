// 'use client';
import React, { FC } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = () => {
  return (
    <div>
      <Heading
        title="sunam it center"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, digital marketing, CPA marketing"
      />
    </div>
  );
};

export default Page;
