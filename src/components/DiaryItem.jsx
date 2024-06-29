import React from 'react';
import './DiaryItem.css';
import { getEmotionImage } from '../util/get-emotion-image';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className='DiaryItem'>
      <div
        className={`img_section img_section_${emotionId}`}
        onClick={() => {
          nav(`diary/${id}`);
        }}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        onClick={() => {
          nav(`diary/${id}`);
        }}
        className='info_section'
      >
        <div className='created_date'>
          {new Date(createdDate).toLocaleString()}
        </div>
        <div className='content'>{content}</div>
      </div>
      <div className='button_section'>
        <Button
          onClick={() => {
            nav(`/edit/${id}`);
          }}
          text={'수정'}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
