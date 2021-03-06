import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  padding: 4em;
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  ${(props) =>
    props.openBurger &&
    css`
      width: 50vw;
    `}
`;

export const Title = styled.figcaption`
  font-size: 18px;
  font-family: 'Merriweather', 'Georgia', serif;
  max-width: 300px;
  color: white;
  font-weight: bold;
`;

export const SubTitle = styled.h4`
  font-size: 12px;
  color: white;
  font-weight: bold;
  font-style: italic;
  font-family: 'Merriweather', 'Georgia', serif;
`;

export const Image = styled.img`
  border: 0;
  width: 100%;
  max-width: 100px;
  height: auto;
  padding: 0;
  margin: 0;
  margin-bottom: 18px;
  ${(props) =>
    props.editBook &&
    css`
      cursor: pointer;
      transition: all 0.1s ease-in-out;

      &:hover {
        transform: scale(1.05) translate3d(0, 0, 0) rotate(0.1deg) translateZ(0);
      }
      display: grid;
      grid-template-columns: none;
    `}
`;

export const Icon = styled.button`
  cursor: pointer;
  background: transparent;
  border: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  img {
    width: 100%;
    display: none;
  }
`;

export const Item = styled.div`
  border: 2px solid #cccc;
  background-color: #636e72;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .book__details {
    > h4,
    h5 {
      color: white;
    }
    h5 {
      font-weight: bold;
    }
  }
  &:hover {
    > ${Icon} {
      img {
        transition: all 1s linear;
        display: block;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const Entities = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Meta = styled.figure`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;
