msg=console.log;
const img_path = `https://image.tmdb.org/t/p/w500/`;

const api=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
    "accept": 'application/json',
    "Authorization": 'Bearer '+token,
    }
})
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(element => {
    if(element.isIntersecting){
      const url=element.target.getAttribute('data-img');
      element.target.setAttribute('src',url)
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}</strong><p>${comment}</p>`;

        commentList.appendChild(commentElement);
        commentForm.reset();
    });
});


async function trending (cont) {
    if(cont<10000){

      const {data} = await api(`/trending/movie/day?language=en-US&page=${cont}`)
      let movies= data.results
      movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('movie-container')
        container.innerHTML=`                <img
        data-img=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                  />`
                  ////console.log(data)
                  const movieImg=container.querySelector('img')
                  observer.observe(movieImg)        
                  document.querySelector('.trendingPreview-movieList ').appendChild(container)
                  const btnlike=document.createElement('button');
                  btnlike.classList.add('btnlike')
                  container.appendChild(btnlike)
                  
                  if(localStorage.getItem(element.id)){
                    btnlike.classList.add('btnlike--liked')
                  }
                  btnlike.addEventListener('click', () => {
          btnlike.classList.toggle('btnlike--liked')
          //console.log(element)
          likesMovies(element)
        });
        container.querySelector('img').addEventListener('click', () => {
          location.hash=`#movie/${element.id}`
        });
           
      });
      let max=data.total_pages
   
      if(cont>=max) {
        clickCount=10001
      }
    }
    }

async function trendingSeries (cont) {
  if(cont<10000){
   const {data} = await api(`/discover/tv?include_adult=false&language=en-US&page=${cont}&sort_by=popularity.desc`)
    let movies= data.results
    movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('movie-container')
        
        document.querySelector('.trendingPreview-containerSerie .trendingPreview-movieList').appendChild(container)    
        container.innerHTML=`                <img
                  data-img=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                />` ;
        const serieImg=container.querySelector('img')
        observer.observe(serieImg)           
        const btnlike=document.createElement('button');
        btnlike.classList.add('btnlike')
        container.appendChild(btnlike)

        
        if(localStorage.getItem(element.id)){
          btnlike.classList.add('btnlike--liked')
        }
        btnlike.addEventListener('click', () => {
          btnlike.classList.toggle('btnlike--liked')
          ////console.log(element)
          likesMovies(element)
        });
        container.querySelector('img').addEventListener('click', () => {
             location.hash=`#movieSerie/${element.id}`
        });
    });
    let max=data.total_pages
    if(cont>=max) {
      clickCount2=10001
    }
  }
}

async function ratedMovies() {
    const {data} = await api(`/movie/popular?language=en-US&page=1`)
    for (let i = 0; i < 2; i++) {
      document.querySelectorAll('#movies img')[i].src = img_path + data.results[i].poster_path;
      document.querySelectorAll('#movies h3')[i].textContent=data.results[i].title
      card=document.querySelectorAll('#movies .card')[i];
      card.addEventListener('click', () => {
        location.hash=`#movie/${data.results[i].id}`
  });
  }
}

async function ratedseries() {

  const {data} = await api(`/tv/popular?language=en-US&page=1`)
   for (let i = 0; i < 2; i++) {
    document.querySelectorAll('#series img')[i].src = img_path + data.results[i].poster_path;
    document.querySelectorAll('#series h3')[i].textContent=data.results[i].name;
    card=document.querySelectorAll('#series .card')[i];
    card.addEventListener('click', () => {
      location.hash=`#movieSerie/${data.results[i].id}`
});
  }
}
async function Genre() {
      const {data} = await api('genre/movie/list?language=en')
        data.genres.forEach(element => {
            let  content= document.createElement('div');
            content.classList.add('category-item')
            content.setAttribute('id', element.id)
            var newText = document.createTextNode(element.name);
            content.appendChild(newText);

            content.addEventListener('click', ()=>{
              location.hash='categories='+element.id+'/'+element.name;
              genreTitle.textContent= element.name;
            })
            document.querySelector('.categories-list').appendChild(content);   
      });
}


async function genrelist(id, pages) {
  if(pages<1000){

    const {data} = await api('discover/movie?include_video=false&language=en-US&page='+pages+'&sort_by=popularity.desc&with_genres='+id);
    Newsection(data, genre);
    
    let button=document.createElement('button');
    button.classList.add('button')
    button.innerText ='load more'
    genre.appendChild(button)
    page()
    max=data.total_pages
   
    if(pages>=max) {
      clicknumber=1001
    }
  }
 
}


async function searchlist(name, pages) {
  if(pages<1000){

    const {data} = await api(`search/movie?query=${name}&include_adult=false&language=en-US&page=${pages}`);
    Newsection(data, genre);
    searchInput.value = '';
    
    let button=document.createElement('button');
    button.classList.add('button2')
    button.innerText ='load more'
    genre.appendChild(button)
    page2()
    max=data.total_pages
   
    if(pages>=max) {
      clicknumber2=1001
    }
    
  }
}


////// function for build the section
function Newsection(data, content){
  let cont =document.createElement('div');
  cont.classList.add('grid');
  content.appendChild(cont);
  data.results.forEach(element => {
      if(element.poster_path){
        let card=document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`  <img data-img="${img_path}${element.poster_path}" alt="Movie 1">
                          <h3>${element.title}</h3>`;
        const movieImg=card.querySelector('img')
        observer.observe(movieImg)   
        content.querySelector('.grid').appendChild(card);

        card.addEventListener('click', () => {
          location.hash=`#movie/${element.id}`;
      });
    }
  });
}


async function description(id,string){

  const {data} = await api(`/${string}/${id}?language=en-US`);
  let cont =document.createElement('div');
  cont.classList.add('grid');
  genre.appendChild(cont);
  let card=document.createElement('div');
  card.classList.add('card');
  document.querySelector('.genre-title').textContent = data.title;
                    
  let descrip = document.createElement('div');
  descrip.classList.add('movieDescription');
                    
  descrip.innerHTML = `
                      <p><strong>Tagline:</strong> ${data.tagline}</p>
                      <p><strong>Overview:</strong> ${data.overview}</p>
                      <p><strong>Genres:</strong> ${data.genres.map(genre => genre.name).join(', ')}</p>
                      <p><strong>Release Date:</strong> ${data.release_date}</p>
                      <p><strong>Runtime:</strong> ${data.runtime} minutes</p>
                      <p><strong>Rating:</strong> ${data.vote_average}</p>
                      <img src="${img_path + data.poster_path}" alt="${data.title} Poster">
                      <p><a href="${data.homepage}" target="_blank">More Info</a></p>
                    `;
                    
  cont.appendChild(descrip);

  
}

function likesMovies(element){
  if (localStorage.getItem(element.id) !== null) {
    localStorage.removeItem(element.id);
  } else {
    localStorage.setItem(element.id,JSON.stringify(element));
  }
  //return   localStorage.setItem(element.id,JSON.stringify(element));
}

function favsection () {
  document.querySelector('.favorite-movieList').innerHTML='';
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let element = JSON.parse(localStorage.getItem(key));
    if (!element.poster_path) continue;
    const container= document.createElement('div');
    container.classList.add('movie-container')
    container.innerHTML=` <img
              data-img=${img_path}${element.poster_path}
              class="movie-img"
              alt=${element.title}
            />`
    const movieImg=container.querySelector('img')
    observer.observe(movieImg)        
    document.querySelector('.favorite-movieList').appendChild(container)
    const btnlike=document.createElement('button');
    btnlike.classList.add('btnlike')
    container.appendChild(btnlike)

    if(localStorage.getItem(element.id)){
      btnlike.classList.add('btnlike--liked')
    }
    btnlike.addEventListener('click', () => {
      btnlike.classList.toggle('btnlike--liked')
      //console.log(element)
      likesMovies(element)
    });
    container.querySelector('img').addEventListener('click', () => {
         location.hash=`#movieSerie/${element.id}`
    });

  }
}

// Paggination Scroll


function checkScroll() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-15) {
      document.querySelector('.button')?.click();
      document.querySelector('.button2')?.click();
  }
}

window.addEventListener('scroll', checkScroll);


function checkHorizontalScroll() {
  const container = document.querySelector('#trendingPreview'); // Ensure you have the correct selector
  if (container.scrollWidth - container.scrollLeft <= container.clientWidth + 15) {
      document.querySelector('.trendingPreview-btn')?.click();
  }
}


  trendingPreviewMoviesContainer.addEventListener('scroll', checkHorizontalScroll);

  function checkHorizontalScroll2() {
    const container2 = document.querySelector('.trendingPreview-containerSerie'); // Ensure you have the correct selector
    if (container2.scrollWidth - container2.scrollLeft <= container2.clientWidth + 15) {
        document.querySelector('.trendingPreview-btn2')?.click();
    }
  }
  
  
  document.querySelector('.trendingPreview-containerSerie').addEventListener('scroll', checkHorizontalScroll2);


  // Scroll automatic
 function automaticScroll (scrollContainer){
    let scrollAmount = 0;
    const scrollStep = 700; 
    const scrollInterval = 4000; //  seconds

    function scrollRight() {
      scrollContainer.scrollBy({ left: scrollStep, behavior: 'smooth' });
      scrollAmount += scrollStep;
      if (scrollAmount >= scrollStep * 3) {
        clearInterval(rightInterval);
        setTimeout(() => {
          leftInterval = setInterval(scrollLeft, scrollInterval);
        }, scrollInterval);
      }
    }

    function scrollLeft() {
      scrollContainer.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      scrollAmount -= scrollStep;
      if (scrollAmount <= 0) {
        clearInterval(leftInterval);
        setTimeout(() => {
          rightInterval = setInterval(scrollRight, scrollInterval);
        }, scrollInterval);
      }
    }

    let rightInterval = setInterval(scrollRight, scrollInterval);
    let leftInterval;
 }

 automaticScroll (document.getElementById('trendingPreview'))
 setTimeout(()=>{
  automaticScroll (document.querySelector('.trendingPreview-containerSerie'))
 },2000)
 