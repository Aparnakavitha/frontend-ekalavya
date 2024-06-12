import React from 'react'
import MentorEventsList from '../../../layouts/admin-mentor/components/MentorEventsList'
import MentorProfileInfo from '../../../layouts/admin-mentor/components/MentorProfile'

const MentorDetails = () => {
  return (
    <div>
        <MentorProfileInfo/>
        <MentorEventsList/>
    </div>
  )
}

export default MentorDetails