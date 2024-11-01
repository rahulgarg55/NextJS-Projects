// pages/posts/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../types';
import posts from '../../data/posts.json';

interface PostPageProps {
  post: Post;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find((post) => post.id === params?.id);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default PostPage;
