import React from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
  const params = useParams();

  return <div>{params.id} edit page</div>;
};

export default Edit;
