import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from "./Banner";

export default {
  title: "Design System/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});

Default.args = {};
