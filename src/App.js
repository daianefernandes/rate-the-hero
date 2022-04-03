import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details } from './screens/Details';
import { Header } from './commom-components/Header/Header';
import { Search } from './screens/Search';
import { NotFound } from './screens/NotFound'
import { NormalizeStyles } from './shared/NormalizeStyles'

function App() {
  return (
    <>
      <NormalizeStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/detalhes/:id" exact element={<Details />}></Route>
          <Route path="/" exact element={<Search />}></Route>
          <Route path="*" element={<NotFound />}>Oh no, Página não encontrada!</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
