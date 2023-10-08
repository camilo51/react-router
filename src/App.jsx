import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Inicio, Blog, AcercaDe, Header, Post, Error404} from "./components";
import styled from 'styled-components'

export const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={ <Post />}/>
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};


const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
const Main = styled.main`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;