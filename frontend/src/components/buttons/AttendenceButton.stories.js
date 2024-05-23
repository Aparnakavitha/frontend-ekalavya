import AttendenceButton from "./AttendenceButton";

export default {
    title: "Components/Buttons/Attendence Button",
    component: AttendenceButton,
    argTypes: {
        onClick: { action: "clicked" },
    },
};

const Template = (args) => <AttendenceButton {...args} />;

export const PresentButton = Template.bind({});
PresentButton.args = {
    content: 'Present',
    IsPresent: true,
};

export const AbsentButton = Template.bind({});
AbsentButton.args = {
    content: 'Absent',
    IsPresent: false,
};
