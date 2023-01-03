import React from "react";
import "./Topics.css";
import Topic from "./Topic/Topic";

function Topics() {
  const topics = [
    {
      title: "JavaScript",
      image: "images/js.jpeg",
      description: "Learn JavaScript. The worlds most popular language",
    },
    {
      title: "React",
      image: "images/react.png",
      description: "Learn React. The worlds most popular JS Library",
    },
    {
      title: "C++s",
      image: "images/c.png",
      description: "Learn C++.",
    },
    {
      title: "DSA",
      image: "images/dsa.png",
      description: "Learn DSA in C++.",
    },
  ];
  return (
    <div className="topics_container">
      {topics.map((item, index) => (
        <Topic
          title={item.title}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default Topics;
