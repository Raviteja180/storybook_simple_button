import SimpleButton from "../components/SimpleButton";

export default {
  title: "Components/SimpleButton",
  component: SimpleButton,
};

export const Template = (args) => <SimpleButton {...args} />;

export const CustomFirst = Template.bind({});
CustomFirst.args = {
  backgroundColor: "red",
  border: "5px solid green",
  label: "ravteja created button",
};
