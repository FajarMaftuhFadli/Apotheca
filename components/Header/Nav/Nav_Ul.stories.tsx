import { ComponentStory, ComponentMeta } from "@storybook/react";
import Nav_Ul from "./Nav_Ul";

export default {
  title: "Design System/Header/Ul",
  component: Nav_Ul,
} as ComponentMeta<typeof Nav_Ul>;

const Template: ComponentStory<typeof Nav_Ul> = (args) => <Nav_Ul {...args} />;

export const Default = Template.bind({});

Default.args = {
  textColor: "text-secondary-1",
  hoverColor: "hover:text-secondary-2",
  activeColor: "active:text-secondary-3",
  className: "flex space-x-4",
};
