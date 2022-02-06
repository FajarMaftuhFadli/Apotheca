import { ComponentStory, ComponentMeta } from "@storybook/react";

import Layout from "./Layout";

export default {
  title: "Design System/Layout",
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <Layout>{args.children}</Layout>
);

export const Default = Template.bind({});

Default.args = {
  children: <div className="bg-base-2 h-64"></div>,
};

export const NoChildren = Template.bind({});
