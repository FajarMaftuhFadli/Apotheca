import { ComponentStory, ComponentMeta } from "@storybook/react";
import LogoFull from "./LogoFull";

export default {
  title: "Design System/Logo",
  component: LogoFull,
} as ComponentMeta<typeof LogoFull>;

const Template: ComponentStory<typeof LogoFull> = (args) => (
  <LogoFull {...args} />
);

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "fill-primary-1",
};
