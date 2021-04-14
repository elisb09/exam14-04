import { Route } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css"
import '../src/index.css';
import Header from './components/Header/Header';
import People from './components/People/People';
import Planets from './components/Planets/Planets';
import Spaceship from './components/Spaceship/Spaceship';

function App() {
    return (
        <div className="App container jumbotron">
            <Header />
            <Route path='/people' render={() => <People />} />
            <Route path='/planets' render={() => <Planets />} />
            <Route path='/spaceship' render={() => <Spaceship />} />

        </div>
    );
}

export default App;