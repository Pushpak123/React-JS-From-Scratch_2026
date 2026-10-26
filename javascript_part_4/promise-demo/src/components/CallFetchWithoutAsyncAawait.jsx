export default function CallFetchWithoutAsyncAawait() {
  const test = () => {
    console.log(1);

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((results) => results.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  };

  return (
    <>
      <button type="button" onClick={test}>
        test
      </button>
    </>
  );
}