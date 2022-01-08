import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonSize, ButtonType } from "./types";

export default {
  title: "Banana Design/Button",
  component: Button,
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
);

export const TextButton = Template.bind({});
TextButton.args = {
  type: ButtonType.Primary,
  size: ButtonSize.Small,
  children: "Button",
};
