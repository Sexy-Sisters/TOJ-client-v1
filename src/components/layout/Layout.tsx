import React from "react";

const Layout = (props: { children: React.ReactNode }) => {
  return <>{props.children}</>;
};

const Content = (props: { children: React.ReactNode }) => {
  return <div style={{ paddingTop: "60px" }}>{props.children}</div>;
};

export { Layout, Content };
