import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Header = styled.div`
  max-height: 110px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 50px;
    margin-right: 10px;
    margin-bottom: 5px;

    span {
      font-size: 24px;
      font-weight: bold;
    }

    svg {
      margin-right: 5px;
    }
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 500px;
    margin-right: 50px;

    a {
      margin-right: 30px;
      text-decoration: none;
      color: #374351;
      border-bottom: 3px solid #fff;
      padding-bottom: 5px;
      transition: border-bottom 0.2s ease-in-out;

      &:hover {
        border-bottom: 3px solid #71c9f8;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      background: #fff;
      color: #71c9f8;
      margin-left: 25px;
      margin-bottom: 5px;
      border-radius: 50%;
      border: 1.5px solid #e8eff3;
      font-size: 20px;
      font-weight: bold;
      padding: 15px;
      transition: border-color 0.2s, color 0.2s;

      &:hover {
        color: ${shade(0.2, '#71c9f8')};
        border-color: ${shade(0.05, '#71c9f8')};
      }
    }
  }
`;
