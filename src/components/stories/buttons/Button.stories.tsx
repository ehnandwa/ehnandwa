import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "./Button"

export default {
  title: "Design/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: "Pay",
}

export const Secondary = Template.bind({})
Secondary.args = {
  label: "Get Started",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
  label: "Live Demo",
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
  label: "Sign in",
}
