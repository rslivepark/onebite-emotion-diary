import React, { useEffect } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  usePageTitle('일기 쓰기');

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true });
  };

  return (
    <div className='New'>
      <Header
        title={'일기쓰기'}
        leftChild={
          <Button
            onClick={() => nav(-1)}
            text={<FontAwesomeIcon icon={faAngleLeft} />}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
