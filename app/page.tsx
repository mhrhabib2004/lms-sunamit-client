'use client';
import React, { FC} from "react";
import Heading from "../utils/Heading";
import Header from "./components/Header"
import Hero from "./components/Root/Hero"


// interface Props {}

const Page: FC = () => {
  
  // const [open,setOpen]=useState(false);
  // const [activeItem,setActiveItem]=useState(0);
  return (
    <div>
      <Heading
        title="sunam it center"
        description="ELearning is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, digital marketing, CPA marketing"
      />
      <Header />
      <Hero />
    </div>
  );
};

export default Page;
