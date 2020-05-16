import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

import videoMain from '../../assets/video_main_page.mp4';

import { Container, Header, Video, Search } from './styles';

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

      <Search>
        <input placeholder="Keyword" type="text" />

        <select>
          <option value="">Locations</option>
          <option value="New York">New York</option>
          <option value="Londres">Londres</option>
          <option value="Paris">Paris</option>
          <option value="Sao Paulo">Sao Paulo</option>
        </select>
        <select>
          <option value="">Teams</option>
          <option value="Software Engineer">Software Engineer</option>
          <option value="Data Scince">Data Scince</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Sales">Sales</option>
        </select>

        <button type="button">Search</button>
      </Search>
    </Container>
  );
};

export default SignIn;
