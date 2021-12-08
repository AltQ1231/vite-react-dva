import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.less";

const About: React.FC<any> = (props) => {
  console.log(props);

  return (
    <>
      <div className={styles.title}>Welcome About</div>
      <Link to="/">home</Link>
    </>
  );
};

export default About;
