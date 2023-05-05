import Styles from './css/App.module.css';
import Dashboard from './pages/Dashboard.jsx';
import Sidebar from './components/Sidebar.jsx';
import Create from './pages/Create.jsx'
import Edit from './pages/Edit.jsx'
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";

function App() {
    return (
        <div className={Styles.App}>
            <BrowserRouter>
                <Sidebar />
                <Routes>
                    <Route path='/'>
                        <Route index element={<Dashboard />} />
                        <Route path='Create' element={<Create />} />
                        <Route path='Edit' element={<Edit />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;