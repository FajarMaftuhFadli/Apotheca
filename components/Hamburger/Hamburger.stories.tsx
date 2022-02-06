import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hamburger from "./Hamburger";

export default {
  title: "Design System/Header/Hamburger",
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => (
  <Hamburger {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "bg-secondary-1",
  hoverColor: "group-hover:bg-secondary-2",
  activeColor: "group-active:bg-secondary-3",
};
