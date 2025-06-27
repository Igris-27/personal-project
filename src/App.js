
import ReactDOM from 'react-dom/client';
import APIData from './components/Pages/APIData';
import {createBrowserRouter, Link, RouterProvider } from 'react-router';
import Page1 from './components/Pages/Page1';
import Page2 from './components/Pages/Page2';
import Page3 from './components/Pages/Page3';
import Page4 from './components/Pages/Page4';
import { Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './components/utils/Store';
import Sidebar from './components/Pages/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import Customnavbar from './components/Pages/CustomNavbar';

const Dashboard = () =>{
    return (
        <div>
            <Customnavbar />
            <h1>Welcome to the Dashboard</h1>
            <ul>
                <li><Link to="/APIData">APIData</Link></li>
                <li><Link to="/Page1">Page1</Link></li>
                <li><Link to="/Page2">Page2</Link></li>
                <li><Link to="/Page3">Page3</Link></li>
                <li><Link to="/Page4">Page4</Link></li>
            </ul>
        </div>
    );
}

const appRouter = createBrowserRouter([{
    path: '/',
    element: <Dashboard />,
},
{
    path: '/APIData',
    element: <APIData />,
},
{
    path: '/page1',
    element: <Page1 />,
},
{
    path: '/page2',
    element: <Page2 />,
},
{
    path: '/page3',
    element: <Page3 />,
},
{
    path: '/page4',
    element: <Page4 />,
},])

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Provider store={store}>
            <RouterProvider router={appRouter} />
            </Provider>);