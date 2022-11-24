/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from "react";
import Header from "./Header";

interface layoutProps {
  children: React.ReactNode;
  className?: string;
}

const mainBgStyle = {
  height: "4800px",
  background:
    "linear-gradient(-125deg, #2075E3 0%, #210E39 50vw, #1D1D1D 100vw, #FF006F 120vw, #2B022E 140vw, #0B305A 100%)"
};

export default class Layout extends PureComponent<layoutProps> {
  componentDidMount() {}

  render() {
    const className = this.props.className ? this.props.className : "";

    return (
      <div id="layout" className="layout">
        <Header />
        <div className="main-container relative" style={mainBgStyle}>
          <div className={className}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
