import { ComponentStory, ComponentMeta } from "@storybook/react";

import Main from "./Main";

export default {
  title: "Design System/Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "bg-base-2",
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt
      quos fuga quidem, eos modi aliquam ipsa itaque dolor mollitia, labore
      officia qui repudiandae asperiores omnis nam esse reiciendis optio.
    </div>
  ),
};
