import MentorProfile from "./MentorProfile";

export default {
    title:"Layouts/MentorProfile",
    component:MentorProfile
}

const sample={
    name:"Emma Watson",
    studentId:"Software engineer",
    college:"Christ University",
    dob:"Jan 21 2001",
    email:"emmawatson@gmail.com",
    phone:"(+91) 8337254637",
    bio:"Experienced software engineer with a focus on backend development and a passion for mentoring aspiring developers."
}

export const MentorProfileDark={
    args:{
        ...sample
    },
};
