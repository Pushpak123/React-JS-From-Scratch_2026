import logo from './logo.svg';
import './App.css';
import PromiseDemo from './components/PromiseDemo';
import PromiseWithSuccessDemo from './components/PromiseWithSuccessDemo';
import PromiseWithErrorsDemo from './components/PromiseWithErrorsDemo';
import PromiseObjectsChainDemo from './components/PromiseObjectsChainDemo';
import PromiseObjectsMacroMicroBlockDemo from './components/PromiseObjectsMacroMicroBlockDemo';
import MacroInsidePromiseDemo from './components/MacroInsidePromiseDemo';
import ResolveInsideMacroDemo from './components/ResolveInsideMacroDemo';
import AsyncAwaitDemo from './components/AsyncAwaitDemo';
import CallFetchWithoutAsyncAawait from './components/CallFetchWithoutAsyncAawait';
import CallFetchWithAsyncAwait from './components/CallFetchWithAsyncAwait';
import CallAxiosWithoutAsyncAwait from './components/CallAxiosWithoutAsyncAwait';
import CallAxiosWithAsyncAwait from './components/CallAxiosWithAsyncAwait';

function App() {
  return (
    <>
    {/* <PromiseDemo/> */}
    {/* <PromiseWithSuccessDemo/> */}
    {/* <PromiseWithErrorsDemo/> */}
    {/* <PromiseObjectsChainDemo/> */}
    {/* <PromiseObjectsMacroMicroBlockDemo/> */}
    {/* <MacroInsidePromiseDemo/> */}
    {/* <ResolveInsideMacroDemo/> */}
    {/* <AsyncAwaitDemo/> */}
    {/* <CallFetchWithoutAsyncAawait/> */}
    {/* <CallFetchWithAsyncAwait/> */}
    {/* <CallAxiosWithoutAsyncAwait/> */}
    <CallAxiosWithAsyncAwait/>
    </>
  );
}

export default App;
