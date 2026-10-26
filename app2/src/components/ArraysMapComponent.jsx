const ArraysMapComponent = () =>{
    const marks = [100, 98, 57, 89, 80];
    return(
        <h1>
        Marks:{marks.map(mark =>mark)}<br/>
        Marks:{marks.map(mark =><li>{mark}</li>)}<br/>
        Marks:{marks.map(mark=><p key={mark}>{mark}</p>)}<br/>
        Marks:{marks.map((mark) =>{
          return  <div key={mark}>{mark}</div>
        })}
        Marks:{marks.map(mark =>
            <div key={mark}>{mark}</div>)
}
<br/>
</h1>);
}

export default ArraysMapComponent;