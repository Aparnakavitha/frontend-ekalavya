import React from 'react'
import SkillList from '../../../layouts/admin-student/components/SkillList'
import EventList from '../../../layouts/admin-student/components/EventsList'
import EducationalQaulification from "../../../layouts/common/components/EducationalQualification"
import StudentProfileInfo from '../../../layouts/admin-student/components/StudentProfile'

const StudentDetails = () => {
  return (
    <div>
        <StudentProfileInfo/>
        <EducationalQaulification/>
        <SkillList/>
        <EventList/>
    </div>
  )
}

export default StudentDetails