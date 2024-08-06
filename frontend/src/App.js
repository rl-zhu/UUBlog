// import logo from './logo.svg';
import './App.css';
import { unstable_HistoryRouter as HistoryRouter, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { history } from './utils/history';
import { AuthComponent } from './components/auth-comp'
import Login from './pages/login-page';
import Layout from './components/layout';
import Profile from './pages/profile';
import Article from './pages/write-article/index'



function App() {
  return (
    <HistoryRouter history={history}>
      <div className="App">
        {/* <Button type="dashed">Dashed Button</Button> */}
        <Routes>
          <Route path='/' element={<Login />}> </Route>

          <Route path='/my' element={
            <AuthComponent>
              <Layout />
            </AuthComponent>
          }>
            <Route path='profile' element={<Profile />}> </Route>
            <Route path='article' element={<Article />}> </Route>
          </Route>
        </Routes>
      </div>

    </HistoryRouter>

  );
}

export default App;
