import './App.css';
import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import { Container} from './Components/index';
import { Header ,Footer } from './sections/index';
import { Home , Blogs, Details, Create, NotFound, ToDo} from './Pages/index';

const App = () => {
    return ( 
        <div className='app-wrapper'>
            <Router>  {/*  basename={'/react'}  => basename is where we make app online*/}
                <Header/>
                <Container>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/Blogs' element={<Blogs />} />
                            <Route exact path='/Create' element={<Create/>}/>
                            <Route exact path='/todo' element={<ToDo/>}/>
                            <Route exact path='/blogs/:id' element={<Details/>}/>
                            <Route exact path='*' element={<NotFound/>}/>
                        </Routes>
                </Container>
                <Footer/>
            </Router>
        </div>
     );
}
 
export default App;