import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  value: "Click Me!",
  backgroundColor: "bg-primary-1",
  hoverColor: "hover:bg-primary-2",
  activeColor: "active:bg-primary-3",
};

export const Secondary = Template.bind({});

Secondary.args = {
  value: "READ MORE",
  backgroundColor: "bg-secondary-1",
  hoverColor: "hover:bg-secondary-2",
  activeColor: "active:bg-secondary-3",
};
