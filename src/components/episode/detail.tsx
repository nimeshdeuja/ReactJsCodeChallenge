import { useParams } from 'react-router-dom';
import Layout from '../../shared/layout';

type Props = {};

const Detail = (props: Props) => {
  let params = useParams();
  return <Layout>
    <>Episode details
    {params.id}</>
  </Layout>;
};

export default Detail;
