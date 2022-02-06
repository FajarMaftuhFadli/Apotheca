import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ClassNames } from "@storybook/theming";

import Main from "./Main";

export default {
  title: "Design System/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});

Default.args = {};
