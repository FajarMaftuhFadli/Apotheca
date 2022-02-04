import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Design System/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => (
  <Button>CLICK ME!</Button>
);

export const Primary = Template.bind({});
