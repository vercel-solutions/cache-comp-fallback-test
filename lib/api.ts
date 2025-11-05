export async function getPost(id: string) {
  "use cache";
  console.log("getPost", id);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json(),
  );
}
