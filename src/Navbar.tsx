import React from "react";
import { Menu } from "antd";
import { MailOutlined, SettingOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export class Navbar extends React.Component {
  state = {
    current: "",
  };

  handleClick = (e: any) => {
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          key="menuForm"
          onClick={() => {
            const form = document.querySelector<HTMLElement>("#basic-form");
            console.log(form!.style.visibility);

            if (form && form.style.visibility === "visible") {
              form.style.visibility = "hidden";
            } else {
              form!.style.visibility = "visible";
            }
          }}
        >
          Display Form
        </Menu.Item>
        <Menu.Item
          key="menuRouterForm"
          onClick={() => {
            console.log("should jump to form endpoint");
          }}
        >
          Display Form
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Nav with Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="LinkedIn" icon={<MailOutlined />}>
          <a
            href="https://www.linkedin.com/in/minjie-huang/"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Me
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
