import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconButton from "./IconButton";
import { HeartIcon } from "@heroicons/react/solid";

export default {
  title: "Banana Design/IconButton",
  component: IconButton,
  argTypes: {
    icon: { table: { disable: true } },
    className: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (props) => <IconButton {...props} />;

export const Default = Template.bind({});
Default.args = {
  icon: <HeartIcon />,
};
