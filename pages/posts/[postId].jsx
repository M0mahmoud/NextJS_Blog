import getPost from "@/lib/helpers";
import fetcher from "@/lib/fetcher";
import Layout from "@/layout/Layout";
import Error from "@/components/_child/Error";
import Spinner from "@/components/_child/Loading";
import Article from "@/components/Article";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";

const page = ({ fallback }) => {
  const router = useRouter();
  const { postId } = router.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);

  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <>
      <Layout>
        <SWRConfig value={{ fallback }}>
          <Article {...data} />
        </SWRConfig>
      </Layout>
    </>
  );
};

export default page;

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);

  return {
    props: {
      fallback: {
        "/api/posts": posts,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((ele) => {
    return {
      params: {
        postId: ele.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
