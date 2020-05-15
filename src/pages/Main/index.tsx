import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

import videoMain from '../../assets/video_main_page.mp4';

import { Container, Header, Video } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <FaTwitter size={26} color="#1d9bf0" />
          <span>Careers</span>
        </div>

        <nav>
          <a href="jobs">Jobs</a>
          <a href="university">University</a>
          <a href="tweep_life">Tweep life</a>

          <button type="button">
            <FiSearch size={16} />
          </button>
        </nav>
      </Header>

      <Video autoPlay loop muted src={videoMain} />
    </Container>
  );
};

export default SignIn;
