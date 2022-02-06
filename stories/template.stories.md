```ts
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Comp from "./Component";

export default {
  title: "",
  component: Comp,
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Default = Template.bind({});

Default.args = {};
```
