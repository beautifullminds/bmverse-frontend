/* eslint-disable @typescript-eslint/no-unused-vars */
import { PureComponent } from "react";
import Header from "./Header";

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
        <Header scrollH={this.props.scroll} />
        <div className="main-container relative">
          <div className={className}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
