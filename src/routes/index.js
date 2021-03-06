import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// ROUTES TO BE RENDER
const  routes = {
    '/': Home,      //works on webpack, need to be fix for open server
    '/:id': Character,
    '/contact': 'Contact',
};

//ROUTER
const router = async () => {
    // stablishing templates to dom
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); //push the header to the app
    let  hash = getHash ();
    let route = await resolveRoutes(hash)

    //send the value trough bracket notation, so we dinamically send route.'/'
    let render = routes[route] 
        ? routes[route] 
        : Error404
    content.innerHTML = await render()
};

export default router;