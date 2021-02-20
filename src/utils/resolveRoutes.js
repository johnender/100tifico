const resolveRoutes =  (route) => {

  if(route.length <=3){
      let validRoute = route ==='/' 
        ? route  //if it's true
        : '/:id'; //if it's false
      return validRoute;
  }

  return `/${route}`; // /about
}

export default resolveRoutes;