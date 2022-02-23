import PropsTypes from "prop-types";
import { Component } from "react";

class MyConponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

MyConponent.defaultProps = {
  name: " 기본 이름 "
};

MyConponent.prototype = {
  name: PropsTypes.string,
  favoriteNumber: PropsTypes.number.isRequired
};

export default MyConponent;
