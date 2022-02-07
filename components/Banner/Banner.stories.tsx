import { ComponentStory, ComponentMeta } from "@storybook/react";

import Banner from "./Banner";

import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props: any) => <OriginalNextImage {...props} unoptimized />,
});

export default {
  title: "Design System/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});

Default.args = {};
