import React from "react";

const Base_Layout = (props: { children: React.ReactNode }) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default Base_Layout;
