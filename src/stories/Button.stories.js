import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  // tags: ["autodocs"],
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
};
