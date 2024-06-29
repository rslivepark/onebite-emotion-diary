import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import Header from './components/Header';
import Button from './components/Button';

import { getEmotionImage } from './util/get-emotion-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1st diary...',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2nd diary...',
  },
  {
    id: 3,
    createdDate: new Date().getTime(),
    emotionId: 3,
    content: '3rd diary...',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [...state];
    case 'UPDATE':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.data.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(4);

  // 일기 쓰기
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'UPDATE',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 삭제

  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id,
      },
    });
  };

  return (
    <>
      <Header
        title={'Title'}
        leftChild={<Button text={<FontAwesomeIcon icon={faAngleLeft} />} />}
        rightChild={<Button text={<FontAwesomeIcon icon={faAngleRight} />} />}
      />
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onDelete, onUpdate }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/new' element={<New />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/*' element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
