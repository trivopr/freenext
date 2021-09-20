import Home from '../components/Home';
import Layout from '../components/layout/Layout';
import { wrapper } from '../store';
import { getPosts } from '../store/actions/postActions';

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  await store.dispatch(getPosts(req));
});
