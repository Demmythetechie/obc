import Header from './component/Header/header.js'
import Home from './component/Home/home.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div style={{backgroundImage: "url('/images/finance.png')"}} className="flex flex-col w-full gap-y-[50px] bg-no-repeat bg-[center_top_20px] bg-[length:1536px_1152px]">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
