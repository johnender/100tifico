import router from './routes'

//listen the app for the first load
window.addEventListener('load', router);

//listen the app ofr a hash change
window.addEventListener('hashchange', router);