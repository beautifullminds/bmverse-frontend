/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface layoutProps {
  children: React.ReactNode;
  className?: string;
  scroll: number;
}

export default class Layout extends PureComponent<layoutProps> {
  componentDidMount() {}

  render() {
    const className = this.props.className ? this.props.className : "";

    return (
      <div id="layout" className="layout">
        <Header />
        <Sidebar />
        <div className="main-container relative">
          <div className={className}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
