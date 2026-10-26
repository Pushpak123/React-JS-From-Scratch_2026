
export default function PromiseObjectsChainDemo() {
  const doTask1 = (arg1) => {
    return new Promise((resolve, reject) => {
      console.log("from doTask1:", arg1);
      resolve(arg1 + 100);
    });
  };

  const doTask2 = (arg1) => {
    return new Promise((resolve, reject) => {
      console.log("from doTask2:", arg1);
      resolve(arg1 + 200);
    });
  };

  const doTask3 = (arg1) => {
    return new Promise((resolve, reject) => {
      console.log("from doTask3:", arg1);
      resolve(arg1 + 300);
    });
  };

  const test = () => {
    doTask1(10)
      .then((result1) => doTask2(result1))
      .then((result2) => doTask3(result2))
      .then((finalResult) => {
        console.log("Final Result:", finalResult);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <button type="button" onClick={test}>
        Test
      </button>
    </>
  );
}
