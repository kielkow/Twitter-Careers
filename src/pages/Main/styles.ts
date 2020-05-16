import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  height: 90px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 30px;
    margin-right: 30px;

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

    a {
      & + a {
        margin-left: 30px;
      }
      text-decoration: none;
      color: #374351;
      border-bottom: 3px solid #fff;
      padding-bottom: 5px;
      border-top: 3px solid #fff;
      padding-top: 5px;
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
      margin-left: 50px;
      margin-right: 50px;
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

export const Video = styled.video`
  width: 100%;
`;

export const Search = styled.div`
  height: 150px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 250px;

    border: 0;
    border-radius: 50px;

    margin-left: 10px;
    margin-right: 10px;

    padding: 10px;

    color: #6c5d6c;
    background-color: #e8eff3;
    line-height: 17px;
    font-size: 16px;
    font-weight: 400;
    box-shadow: 0 0 2px 2px rgba(29, 155, 240, 0.7);
  }

  select {
    width: 250px;

    border: 0;
    border-radius: 50px;

    margin-left: 10px;
    margin-right: 10px;

    padding: 10px;

    color: #6c5d6c;
    background-color: #e8eff3;
    line-height: 17px;
    font-size: 16px;
    font-weight: 400;

    transition: box-shadow 0.2s, color 0.2s;
    &:focus {
      box-shadow: 0 0 2px 2px rgba(29, 155, 240, 0.7);
    }
  }

  button {
    border-radius: 50px;
    border: 0;

    margin-left: 10px;
    margin-right: 10px;

    padding: 10px 18px 10px 18px;

    color: #fff;
    background-color: #1da1f2;
    line-height: 17px;
    font-size: 14px;
    font-weight: 700;

    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.25, '#1da1f2')};
    }
  }
`;
