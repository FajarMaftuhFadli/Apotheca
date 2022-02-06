import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hamburger from "./Hamburger";

export default {
  title: "Design System/Hamburger",
  component: Hamburger,
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => (
  <Hamburger {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "bg-gray-500",
};
