import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SideBar from '../../layouts/common/components/SideBar';
import Button from '../../components/buttons/PrimaryButton';
import Dp from '../../../src/assets/DP.png';
import edunexa from '../../../src/assets/edunexa.png';
import { MdEvent, MdViewQuilt, MdAccountCircle, MdPsychology } from 'react-icons/md';
import { RiContactsBook3Fill } from 'react-icons/ri';
import ProfileNotificationBox from '../../components/profilenotificationbox/ProfileNotificationBox';
import Footer from '../../layouts/common/components/Footer';
import AdminStudent from './admin-student/AdminStudent';
import AdminMentor from './admin-mentor/AdminMentor';
import AdminEvent from './admin-events/AdminEvent';
import AdminBatchList from './admin-batches/AdminBatchList';
import AdminSkill from './admin-skills/AdminSkill';
import AdminBatchSelect from './admin-batches/AdminBatchSelect';
import AdminStudentDetails from './admin-student/AdminStudentDetails';
import AdminMentorDetails from './admin-mentor/AdminMentorDetails';
import AdminEventDetails from './admin-events/EventDetails';
import AdminEventParticipants from './admin-events/AdminEventParticipants';

const AdminContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const sample = {
    content: 'Logout',
    variant: 'primary',
    onClick: (r) => {
      console.log('clicked');
    },
    width: 'full',
  };

  const sidebarContent = {
    button: <Button {...sample} />,
    listItems: [
      {
        icon: <MdAccountCircle />,
        name: 'Student',
        viewIcon: true,
        page: 'student',
      },
      {
        icon: <RiContactsBook3Fill />,
        name: 'Mentor',
        viewIcon: true,
        page: 'mentor',
      },
      { icon: <MdEvent />, name: 'Events', viewIcon: true, page: 'events' },
      {
        icon: <MdViewQuilt />,
        name: 'Batches',
        viewIcon: true,
        page: 'batches',
      },
      {
        icon: <MdPsychology />,
        name: 'Skills',
        viewIcon: true,
        page: 'skills',
      },
    ],
    profileBox: {
      name: 'Nazeem',
      profilePic: Dp,
      gmail: 'nazeem@gmail.com',
    },
  };

  const handleSidebarItemClick = (page) => {
    navigate(`/admin/${page}`);
  };

  const footercontent = {
    Logo: edunexa,
    quoteContent: 'Embark on Your Learning Journey Today!',
    copyrightContent: 'All rights reserved © 2024 Tarento Group.',
    copyrightContent2: ' | Privacy Policy',
    isLeftALigned: true,
  };

  return (
    <div className="flexStart">
      <SideBar
        button={sidebarContent.button}
        listItems={sidebarContent.listItems}
        profileBox={sidebarContent.profileBox}
        onItemClick={handleSidebarItemClick}
        location={location}  // Pass the location here
        user="admin"  // Assuming the user type is admin
      />
      <div className="page">
        <div>
          <div className="profilenotificationbox padding">
            <ProfileNotificationBox
              name={sidebarContent.profileBox.name}
              profilePic={sidebarContent.profileBox.profilePic}
              gmail={sidebarContent.profileBox.gmail}
            />
          </div>
          <div className="statecontent">
            <Routes>
              <Route path="student" element={<AdminStudent />} />
              <Route path="mentor" element={<AdminMentor />} />
              <Route path="events" element={<AdminEvent />} />
              <Route path="batches" element={<AdminBatchList />} />
              <Route path="skills" element={<AdminSkill />} />
              <Route path="batches/batch-details" element={<AdminBatchSelect />} />
              <Route path="student/student-details" element={<AdminStudentDetails />} />
              <Route path="mentor/mentor-details" element={<AdminMentorDetails />} />
              <Route path="events/event-details" element={<AdminEventDetails />} />
              <Route path="events/event-details/event-participants" element={<AdminEventParticipants />} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer {...footercontent} />
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
