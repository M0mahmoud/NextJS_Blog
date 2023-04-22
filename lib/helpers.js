const baseURL =
  process.env.NEXT_PUBLIC_APP_DEV || process.env.NEXT_PUBLIC_APP_PRO;

export default async function getPost(id) {
  const res = await fetch(`${baseURL}api/posts`);
  const posts = await res.json();

  if (id) {
    return posts.find((value) => value.id == id);
  }

  return posts;
}
