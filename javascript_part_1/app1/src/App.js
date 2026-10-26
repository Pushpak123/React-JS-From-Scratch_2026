import logo from './logo.svg';
import './App.css';
import VarComponent from './components/VarComponent';
import LetComponent from './components/LetComponent';
import ConstComponent from './components/ConstComponent';
import ArraysComponent from './components/ArraysComponent';
import JsonObjectComponent from './components/JsonObjectComponent';
import ArraysOfJsonObjectComponent from './components/ArraysOfJsonObjectComponent';
import OnClickEventComponent from './components/OnClickEventComponent';
import JavasCriptFunctionComponent from './components/JavascriptFunctionComponent';
import f3,{f1,f2,v1} from './components/Hello1';

function App() {
  const  test1 = () =>{
    f1();
    f2();
    f3();
    console.log(v1);
  }
  return (
    // <VarComponent/>
    // <LetComponent/>
    // <ConstComponent/>
    // <ArraysComponent/>
    // <JsonObjectComponent/>
    // <ArraysOfJsonObjectComponent/>
    // <OnClickEventComponent/>
    // <JavasCriptFunctionComponent/>

       <button type='button' onClick={test1}>Test</button> 
  );
}

export default App;
