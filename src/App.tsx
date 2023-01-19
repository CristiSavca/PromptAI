import styles from './App.module.scss';
import { Header } from './components/header/header';
import { Details } from './components/details/details';

function App() {
    return (
        <div className={styles.App}>
            <Header></Header>
            <div>
                <Details />
            </div>
        </div>
    );
}

export default App;
