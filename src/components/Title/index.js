import React from 'react';
import Icon from '../../assets/NotesIcon.png';
import { TitleElement } from './titleCss';

const Title = ({ title }) => {
  return (
    <TitleElement>
      {title}
      <img alt="Yellow Post it" src={Icon}></img>
    </TitleElement>
  );
};

export default Title;
