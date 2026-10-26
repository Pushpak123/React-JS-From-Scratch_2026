import logo from './logo.svg';
import './App.css';
import SynchronousDemo from './components/SynchronousDemo';
import AsynchronousDemo from './components/AsynchronousDemo';
import AsynchronousWaitingTimeDemo from './components/AsynchronousWaitingTimeDemo';
import MultipleAsynchronousWaitingTimeDemo from './components/MultipleAsynchronousWaitingTimeDemo';
import AsynchronousWithTimeTakingDemo from './components/AsynchronousWithTimeTakingDemo';
import SynchronousAsynchronousDemo from './components/SynchronousAsynchronousDemo';
import FunctionCallbackTwoLevelDemo from './components/FunctionCallbackTwoLevelDemo';
import FunctionCallbackThreeLevelDemo from './components/FunctionCallbackThreeLevelDemo';
import FunctionCallbackWithInputDemo from './components/FunctionCallbackWithInputDemo';

function App() {
  return (
   <>
   {/* <SynchronousDemo/> */}
   {/* <AsynchronousDemo/> */}
   {/* <AsynchronousWaitingTimeDemo/> */}
   {/* <MultipleAsynchronousWaitingTimeDemo/> */}
   {/* <AsynchronousWithTimeTakingDemo/> */}
   {/* <SynchronousAsynchronousDemo/> */}
   {/* <FunctionCallbackTwoLevelDemo/> */}
   {/* <FunctionCallbackThreeLevelDemo/> */}
   {/* <FunctionCallbackWithInputDemo/> */}
   <FunctionCallbackThreeLevelDemo/>
   </>
  );
}

export default App;
