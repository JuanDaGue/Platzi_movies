window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
function navigator(){
    console.log({location})
    if(location.hash.startsWith('#trend')){
        trend ();
    }
    else if(location.hash.startsWith('#search')){
        search ()
    }
    else if(location.hash.startsWith('#movie=')){
        movies();
    }
    else if(location.hash.startsWith('#categories')){
        categories ()
    }
    else{
        Home ()
    }
}

function trend (){
    console.log('Trends!!');
}
function search (){
    console.log('search!!');
}
function movies (){
    console.log('movies!!');
}
function  categories (){
    console.log('categories!!');;
}
function Home (){
    console.log('Home!!');
}
