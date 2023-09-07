import './App.scss';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Main from '@components/Main/Main';
import { Container } from '@components/UI';

function App() {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <div className="divider"></div>
      <Container>
        <Main />
      </Container>
      <div className="divider"></div>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;
