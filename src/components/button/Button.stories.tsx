import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonSize, ButtonType } from "./types";

export default {
  title: "Banana Design/Button",
  component: Button,
  argTypes: {
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  type: ButtonType.Default,
  size: ButtonSize.Default,
  children: "Button",
};
