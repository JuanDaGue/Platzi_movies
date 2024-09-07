window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
function navigator(){
    ////console.log({location})
    if(location.hash.startsWith('#trend')){
        trend ();
    }
    else if(location.hash.startsWith('#search')){
        search ()
    }
    else if(location.hash.startsWith('#movies')){
        movies_();
    }
    else if(location.hash=='#categories'){
        categories ()
    }
    else if(location.hash.startsWith('#categories=')){
        genresId ()
    }
    else if(location.hash.startsWith('#comments')){
        Home ()
    }
    else if(location.hash.startsWith('#movie/')){
        Details ()
    }
    else if(location.hash.startsWith('#movieSerie/')){
        Details ()
    }
    else if(location.hash.startsWith('#favorite')){
        favorites ()
    }
    else{
        Home ()
    }
    window.scrollTo(0, 0);
}

function trend (){
    //console.log('Trends!!');
            //Header
            header.style.backgroud ='';
       
            // Titles
            categoriesTitle.classList.add('inactive');
            headerTitle.classList.add('inactive');
            //Sections
            trendingPreviewSeriesContainer.classList.remove('inactive');
            trendingPreviewMoviesContainer.classList.remove('inactive');
            seriesSection.classList.add('inactive');
            moviesSection.classList.add('inactive');
            commentsSection.classList.add('inactive'); 
            categoriesSection.classList.add('inactive');
            favorite.classList.add('inactive')
            //forms,  arrows or Buttons
            headerArrow.classList.remove('inactive');
            searchForm.classList.add('inactive');
            headerNav.classList.add('inactive');
            headerHome.classList.remove('inactive');
            favorite.classList.add('inactive')
            h2func('Trendign')

}

function movies_ (){
    //console.log('movies!!');
        //Header
        header.style.backgroud ='';
       
        // Titles
        categoriesTitle.classList.add('inactive');
        headerTitle.classList.add('inactive');
        //Sections
        trendingPreviewSeriesContainer.classList.add('inactive');
        trendingPreviewMoviesContainer.classList.add('inactive');
        seriesSection.classList.remove('inactive');
        moviesSection.classList.remove('inactive');
        commentsSection.classList.add('inactive'); 
        categoriesSection.classList.add('inactive');
        //forms,  arrows or Buttons
        headerArrow.classList.remove('inactive');
        searchForm.classList.add('inactive');
        headerNav.classList.add('inactive');
        genre.classList.add('inactive');
        headerHome.classList.remove('inactive');
        favorite.classList.add('inactive')

        h2func('Movies')
    
}

function favorites () {
    //console.log('movies!!');
        //Header
        header.style.backgroud ='';
        favorite.classList.remove('inactive')
        // Titles
        categoriesTitle.classList.add('inactive');
        headerTitle.classList.add('inactive');
        //Sections
        trendingPreviewSeriesContainer.classList.add('inactive');
        trendingPreviewMoviesContainer.classList.add('inactive');
        seriesSection.classList.remove('inactive');
        moviesSection.classList.remove('inactive');
        commentsSection.classList.add('inactive'); 
        categoriesSection.classList.add('inactive');
        //forms,  arrows or Buttons
        headerArrow.classList.remove('inactive');
        searchForm.classList.add('inactive');
        headerNav.classList.add('inactive');
        genre.classList.add('inactive');
        headerHome.classList.remove('inactive');


        h2func('Movies')
        favsection ()
}
function  categories (){
    //console.log('Categories!!');

    
    //Header
    header.style.backgroud ='';
       
    // Titles
    categoriesTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    //Sections
    trendingPreviewSeriesContainer.classList.add('inactive');
    trendingPreviewMoviesContainer.classList.add('inactive');
    seriesSection.classList.re('inactive');
    moviesSection.classList.re('inactive');
    commentsSection.classList.add('inactive'); 
    categoriesSection.classList.remove('inactive');
    //forms,  arrows or Buttons
    headerArrow.classList.remove('inactive');
    searchForm.classList.add('inactive');
    headerNav.classList.add('inactive');
    genre.classList.add('inactive');
    headerHome.classList.remove('inactive');
    favorite.classList.add('inactive')
    h2func('Categories')
    
    //Genre()


}

function  genresId (){
    //console.log('Categories!!');
    //Header
    header.style.backgroud ='';
       
    // Titles
    categoriesTitle.classList.add('inactive');
    genre.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    //Sections
    trendingPreviewSeriesContainer.classList.add('inactive');
    trendingPreviewMoviesContainer.classList.add('inactive');
    seriesSection.classList.add('inactive');
    moviesSection.classList.add('inactive');
    commentsSection.classList.add('inactive'); 
    categoriesSection.classList.add('inactive');
    //forms,  arrows or Buttons
    headerArrow.classList.remove('inactive');
    searchForm.classList.add('inactive');
    headerNav.classList.add('inactive');
    headerHome.classList.remove('inactive');
    favorite.classList.add('inactive')
    h2func('Categories')
    let id =location.hash.split('=').pop().split('/')[0]
    genrelist(id, 1);
}

function  search () {
    //console.log('SEARCH!!');
    //Header
    header.style.backgroud ='';
       
    // Titles
    categoriesTitle.classList.add('inactive');
    genre.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    //Sections
    trendingPreviewSeriesContainer.classList.add('inactive');
    trendingPreviewMoviesContainer.classList.add('inactive');
    seriesSection.classList.add('inactive');
    moviesSection.classList.add('inactive');
    commentsSection.classList.add('inactive'); 
    categoriesSection.classList.add('inactive');
    //forms,  arrows or Buttons
    headerArrow.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    headerNav.classList.add('inactive');
    headerHome.classList.remove('inactive');
    favorite.classList.add('inactive')
    
    h2func('search')
    let name =location.hash.split('/').pop();
    genre.querySelector('h2').textContent= name.replaceAll('%20',' ')
    searchlist(name,1);
}

function Home (){
    //console.log('Home!!');
    headerHome.classList.add('inactive');
    header.style.backgroud ='';
    genre.classList.add('inactive');
    headerArrow.classList.add('inactive');
    categoriesTitle.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    headerTitle.classList.remove('inactive');
    trendingPreviewSeriesContainer.classList.remove('inactive');
    trendingPreviewMoviesContainer.classList.remove('inactive');
    commentsSection.classList.remove('inactive'); 
    seriesSection.classList.remove('inactive');
    moviesSection.classList.remove('inactive');
    categoriesSection.classList.remove('inactive');
    headerNav.classList.remove('inactive');
    favorite.classList.add('inactive')
    h2func('')

}
function Details (){


    //console.log('Details!!');
    //Header
    header.style.backgroud ='';
       
    // Titles
    categoriesTitle.classList.add('inactive');
    genre.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    //Sections
    trendingPreviewSeriesContainer.classList.add('inactive');
    trendingPreviewMoviesContainer.classList.add('inactive');
    seriesSection.classList.add('inactive');
    moviesSection.classList.add('inactive');
    commentsSection.classList.add('inactive'); 
    categoriesSection.classList.add('inactive');
    //forms,  arrows or Buttons
    headerArrow.classList.remove('inactive');
    searchForm.classList.remove('inactive');
    headerNav.classList.add('inactive');
    headerHome.classList.remove('inactive');
    favorite.classList.add('inactive')
    h2func('search')
    let name =location.hash.split('/').pop()
    genre.querySelector('h2').textContent= name.replaceAll('%20',' ')
    let id=location.hash.split('/').pop();
    let string =location.hash.split('#').pop().split('/')[0];
    //console.log(string)
    if(string.search(/Serie/img)>-1){
        string = 'tv'
    }else{
        string='movie'
    }
    //console.log(string)
    description(id,string)
}
document.addEventListener('DOMContentLoaded', (event) => {
    const headerArrow = document.querySelector('.header-arrow.inactive');
    headerArrow.addEventListener('click', () => {
        history.back();
    });
})

function h2func(h2name){
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.remove();
    });
    const buttons2 = document.querySelectorAll('.button2');
    buttons2.forEach(button => {
        button.remove();
    });
    document.querySelector('.header-h2')?.remove();
    const grids=document.querySelectorAll('.genre-section .grid')
    
    grids.forEach(button => {
        button.remove();
    });

    if(h2name>0){
        let content = document.createElement('h2')
        content.classList.add('header-h2')
        var newText = document.createTextNode(h2name);
        content.appendChild(newText);
        header.insertBefore(content, header.firstChild)
    }

}


searchButton.addEventListener('click', ()=>{
    event.preventDefault();
    let sName=searchInput.value
    location.hash=`#search/${sName}`
    
})

document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    let sName = document.querySelector('input[type="text"]').value;
    //console.log(sName)
    location.hash=`#search/${sName}`
});


//pagination
let clickCount = 1;
buttonSearch =document.querySelector('.trendingPreview-btn')

    buttonSearch.addEventListener('click', (event) => {
    
    clickCount++; // Increment the click count
    //console.log(`Button clicked ${clickCount} times`); // Log the click count
    trending(clickCount);
});

//pagination
let clickCount2 = 1;
buttonSearch2 =document.querySelector('.trendingPreview-btn2')

    buttonSearch2.addEventListener('click', (event) => {
    
    clickCount2++; // Increment the click count
    //console.log(`Button clicked ${clickCount} times`); // Log the click count

        trendingSeries(clickCount2)
});
//pagiantion
//let pages=1;
let clicknumber=1;
function page(){

  
      buttonmore =document.querySelector('.button');
    
      buttonmore.addEventListener('click', (event) => {
        
        clicknumber++; // Increment the click count
        //console.log(`Button clicked ${clicknumber} times`); // Log the 
        let id =location.hash.split('=').pop().split('/')[0];
        genrelist(id, clicknumber) ;
        document.querySelector('.button')?.remove();

      });
   
  }
  
  let clicknumber2=1;
  function page2(){
  

        buttonmore =document.querySelector('.button2');
      
        buttonmore.addEventListener('click', (event) => {
          
          clicknumber2++; // Increment the click count
          //console.log(`Button clicked ${clicknumber2} times`); // Log the 
          let name =location.hash.split('/').pop();
          searchlist(name, clicknumber2) ;
          document.querySelector('.button2')?.remove();
  
        });
     
    }

Genre();
trendingSeries (1);
ratedMovies();
trending(1);
//ratedMovies();
ratedseries()


