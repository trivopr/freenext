import Layout from '../../components/layout/Layout';
import PostDetail from '../../components/posts/PostDetail';
import { wrapper } from '../../store';
import { getPostDetails } from '../../store/actions/postActions';

export default function PostDetailsPage() {
  return (
    <Layout>
      <PostDetail title='Post Details' />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, params }) => {
  await store.dispatch(getPostDetails(req, params.id));
});
