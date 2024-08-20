window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)
function navigator(){
    //console.log({location})
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
    else{
        Home ()
    }
    window.scrollTo(0, 0);
}

function trend (){
    console.log('Trends!!');
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
            //forms,  arrows or Buttons
            headerArrow.classList.remove('inactive');
            searchForm.classList.add('inactive');
            headerNav.classList.add('inactive');
            h2func('Trendign')

}

function movies_ (){
    console.log('movies!!');
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

        h2func('Movies')
    
}
function  categories (){
    console.log('Categories!!');

    
    //Header
    header.style.backgroud ='';
       
    // Titles
    categoriesTitle.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    //Sections
    trendingPreviewSeriesContainer.classList.add('inactive');
    trendingPreviewMoviesContainer.classList.add('inactive');
    seriesSection.classList.add('inactive');
    moviesSection.classList.add('inactive');
    commentsSection.classList.add('inactive'); 
    categoriesSection.classList.remove('inactive');
    //forms,  arrows or Buttons
    headerArrow.classList.remove('inactive');
    searchForm.classList.add('inactive');
    headerNav.classList.add('inactive');
    genre.classList.add('inactive');
    
    h2func('Categories')
    
    //Genre()


}

function  genresId (){
    console.log('Categories!!');
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
    
    h2func('Categories')
    let id =location.hash.split('=').pop().split('/')[0]
    genrelist(id);
}

function  search () {
    console.log('SEARCH!!');
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
    
    h2func('search')
    let name =location.hash.split('/').pop();
    genre.querySelector('h2').textContent= name.replaceAll('%20',' ')
    searchlist(name);
}

function Home (){
    console.log('Home!!');

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
    h2func('')

}
function Details (){


    console.log('Details!!');
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
    
    h2func('search')
    let name =location.hash.split('/').pop()
    genre.querySelector('h2').textContent= name.replaceAll('%20',' ')
    id=location.hash.split('/').pop();
    description(id)
}
document.addEventListener('DOMContentLoaded', (event) => {
    const headerArrow = document.querySelector('.header-arrow.inactive');
    headerArrow.addEventListener('click', () => {
        history.back();
    });
})

function h2func(h2name){

    document.querySelector('.header-h2')?.remove();
    document.querySelector('.genre-section .grid')?.remove();
    if(h2name>0){
        let content = document.createElement('h2')
        content.classList.add('header-h2')
        var newText = document.createTextNode(h2name);
        content.appendChild(newText);
        header.insertBefore(content, header.firstChild)
    }

}


searchButton.addEventListener('click', ()=>{
    let sName=searchInput.value
    location.hash=`#search/${sName}`
    searchInput.value='';
})


Genre();
trendingSeries ();
ratedMovies();
trending();
ratedMovies();
ratedseries()
