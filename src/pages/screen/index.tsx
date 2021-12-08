// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./index.less";
import { Button } from "antd";

// const Home: React.FC<any> = (props) => {
//   return (
//     <>
//       <div className={styles.title}>Welcome Screen</div>
//       <Button>111</Button>
//       <Link to="/">home</Link>
//     </>
//   );
// };

// export default Home;
import { connect } from "umi";
import React, { Component } from "react";
import "./index.less";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 600,
      lineWidth: 1,
    };
  }

  componentDidMount() {
    const { history } = this.props;
    console.log(this.props);
  }

  handleClick = () => {
    const { history } = this.props;
    history.push("/");
  };

  componentWillUnmount() {}

  render() {
    const { width, lineWidth } = this.state;
    return (
      <div className="common-page test-page">
        <div className="common-chart-container">
          {width}
          {lineWidth}

          <Button onClick={this.handleClick}>回首页</Button>
        </div>
      </div>
    );
  }
}

export default TestPage;
