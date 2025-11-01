export default async function Post({
  params,
}: {
  params: PageProps<"/[lang]/post/[id]">["params"];
}) {
  "use cache";

  const { id } = await params;

  const post = await fetchPost(id);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>id: {post.id}</p>
      <p>{post.body}</p>
    </div>
  );
}

async function fetchPost(id: string) {
  "use cache";
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json(),
  );
}
