import { ComponentStory, ComponentMeta } from "@storybook/react";

import BtnArrow from "./BtnArrow";

export default {
  title: "Design System/Banner/Arrow Button",
  component: BtnArrow,
} as ComponentMeta<typeof BtnArrow>;

const Template: ComponentStory<typeof BtnArrow> = (args) => (
  <BtnArrow {...args} />
);

export const Left = Template.bind({});

Left.args = {
  direction: "left",
};

export const Right = Template.bind({});

Right.args = {
  direction: "right",
};
