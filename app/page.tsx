'use client'
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="sunam it center"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming , MERN, Redux, Machine Learning"
      />
    </div>
  );
};

export default Page;
