import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {};

const Detail = (props: Props) => {
  let params = useParams();
  return <div>
    Episode details
    {params.id}
  </div>;
};

export default Detail;
