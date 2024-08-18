msg=console.log;
const img_path = `https://image.tmdb.org/t/p/w500/`;

const api=axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers: {
    "accept": 'application/json',
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
    }
})

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


async function trending () {
    
    let resp = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
          "method": 'GET',
  "headers": {
    "accept": 'application/json',
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
  },

    });

    let data= await resp.json();
    let movies= data.results

    //msg(data)
    movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('.movie-container')
        // const img= document.createElement('img');
        // img.classList.add('.movie-img')
        container.innerHTML=`                <img
                  src=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                />`
        //msg(container)  
        document.querySelector('.trendingPreview-movieList').appendChild(container)    
    });
}

async function trendingSeries () {
    
    let resp = await fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc", {
          "method": 'GET',
  "headers": {
    "accept": 'application/json',
    "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
  },

    });

    let data= await resp.json();
    let movies= data.results

    //msg(data)
    movies.forEach(element => {
        
        const container= document.createElement('div');
        container.classList.add('.movie-container')
        // const img= document.createElement('img');
        // img.classList.add('.movie-img')
        container.innerHTML=`                <img
                  src=${img_path}${element.poster_path}
                  class="movie-img"
                  alt=${element.title}
                />`
        //msg(container)  
        document.querySelector('.trendingPreview-containerSerie .trendingPreview-movieList').appendChild(container)    
    });
}

async function ratedMovies() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
        }
      };
      
      let resp = await fetch('https://api.themoviedb.org/3/account/null/rated/movies?language=en-US&page=1&sort_by=created_at.asc', options)
      data=  await resp.json();
      //msg(data)
}

async function Genre() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWE2YTcyMmRlYjE1Nzc2MTRkZWVjNmZhYzBmZWU2MSIsIm5iZiI6MTcyMzkyNDc1NC4zNzIxNTcsInN1YiI6IjY2OWVkMGY3M2QzMzQzMDVhOWJmMTk0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mVWYf0sEZZ7IsS1MiI4VX4LaNKDkSQTXqguwC0H403k'
        }
      };
      
      let resp = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      data=  await resp.json();
        data.genres.forEach(element => {
            let  content= document.createElement('div');
            content.classList.add('category-item')
            content.setAttribute('id', element.id)
            var newText = document.createTextNode(element.name);
            content.appendChild(newText);
        //content.innerHTML=` <div class="category-item">${element.name}</div>`
            document.querySelector('.categories-list').appendChild(content)
      });
}
Genre()
trendingSeries ()
ratedMovies()
trending()
