//can be return without {} because it's one line

const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;