import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

import { Container, Header } from './styles';

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
    </Container>
  );
};

export default SignIn;
