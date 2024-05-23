import Greeting from './greeting'; // Make sure to import the correct component

export default {
    title: "layouts/admin/Greeting",
    component: Greeting,
};

const greet = {
    welcome: "Welcome Back",
    name: "John",
    info: "Here is the information about",
    profile: "Students",
};

export const GreetingWithButtons = {
    args: {
        ...greet,
        showButtons: true,
    },
};

export const GreetingWithoutButtons = {
    args: {
        ...greet,
        showButtons: false,
    },
};
