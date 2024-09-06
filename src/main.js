msg=console.log;
const img_path = `https://image.tmdb.org/t/p/w500/`;

const api=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
    "accept": 'application/json',
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
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
    const {data} = await api(`/trending/movie/day?language=en-US&page=${cont}`)
    let movies= data.results
    movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('movie-container')
        container.addEventListener('click', () => {
          //msg('Card clicked!');
          location.hash=`#movie/${element.id}`
    });
        container.innerHTML=`                <img
                  data-img=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                />`
        //console.log(container.querySelector('img'))
        const movieImg=container.querySelector('img')
        observer.observe(movieImg)        
        document.querySelector('.trendingPreview-movieList ').appendChild(container)
           
    });
}

async function trendingSeries (cont) {
  
   const {data} = await api(`/discover/tv?include_adult=false&language=en-US&page=${cont}&sort_by=popularity.desc`)
    let movies= data.results
    movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('movie-container')
        container.addEventListener('click', () => {
          //msg('Card clicked!');
          location.hash=`#movieSerie/${element.id}`
    });
        document.querySelector('.trendingPreview-containerSerie .trendingPreview-movieList').appendChild(container)    
        container.innerHTML=`                <img
                  data-img=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                />` ;
                const serieImg=container.querySelector('img')
                observer.observe(serieImg)           
    });
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

// Function to load more content (for demonstration purposes)
// function loadMoreContent() {
//   const content = document.createElement('div');
//   content.innerHTML = '<p>More content loaded...</p>';
//   //document.querySelector('#genre .grid')?.appendChild(content);
// }

// Function to check if the user has scrolled to the bottom
function checkScroll() {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight-15) {
      document.querySelector('.button')?.click();
      document.querySelector('.button2')?.click();
  }
}

window.addEventListener('scroll', checkScroll);
