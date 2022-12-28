import React from "react";
import StudentList from "./StudentList";

const MainPage = () => {
  const [studentsListState, studentListToggle] = React.useState<boolean>(true);

  return <StudentList />;
};

export default MainPage;
