import React from 'react';
import { useParams } from 'react-router-dom';

const Diary = () => {
  const params = useParams();
  return <div>Diary Content no.{params.id}</div>;
};

export default Diary;
