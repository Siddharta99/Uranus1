import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter as Router
import About from "./About";
import HomePage from "./Home";

const AllRoutes = () => {
  const memes = [
    
    <>
      <img className="h-20 w-20 bg-red" src="" alt=""></img>
        
    
    <img src="" alt=""></img>
      </>
      
  
  //   {
  //     image:
  //       "",
  //   },
  //   {
  //   image:
  //   "",
  // },
  // {
  //   image:
  //   "",
  // },
  //   {
  //     image:
  //       "",
  //   },
  //   // {
  //     //   image:
  //     //     "",
  //     // },
  //     {
  //       image:
  //       "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2Faa5d7905-001d-4421-a62b-20d06dc94e56%2FUntitled.png?table=block&id=8f87aebd-40c4-40da-bf39-1a6189c260e1&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
  //     },
  //     {
  //       image:
  //       "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F7c8c6796-19f1-40a3-9ed9-9392ec086769%2FUntitled.png?table=block&id=86243842-6f26-41a3-9f93-bb80a78f3fb2&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=1420&userId=&cache=v2",
  //     },
  //     {
  //       image:
  //         "https://persistventure.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ff78663f8-78b0-4675-9f1f-807e68f53ff1%2F855fd03b-cb37-4e2c-8214-fef34086a412%2FUntitled.png?table=block&id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&width=800&userId=&cache=v2",
  //     },
      
  ];
  
  return (
    <Routes>
      <Route path="/" element={<HomePage memes={memes} />} />
      <Route path="/about" element={<About memes={memes} />} />
    </Routes>
  );
};

export default AllRoutes;