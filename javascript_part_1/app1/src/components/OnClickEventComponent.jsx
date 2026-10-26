const OnClickEventComponent = () => {

  const test1 = () => {
    alert("test1");
  };

  const test2 = (e) => {
    // e.stopPropagation();
    alert("test2");
  };

  return (
    <div onClick={test1}>

      {/* stopPropagation */}
      <h1 onClick={test2}>React App</h1>

      {/* onClick event */}
      {/* 
      <button type="button" onClick={test1}>
        Test1
      </button>
      */}

      {/* preventDefault */}
      {/*
      <a
        href="https://google.com"
        onClick={(e) => e.preventDefault()}
      >
        test1
      </a>
      <br />

      <a href="https://google.com">test2</a>
      */}
      
    </div>
  );
};

export default OnClickEventComponent;