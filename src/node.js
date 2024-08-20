// Header
const header = document.querySelector('.header');
const headerArrow = document.querySelector('.header-arrow');
const headerHome = document.querySelector('.header-arrow.home-button');

const headerTitle = document.querySelector('.header-title');
const navLinks = document.querySelectorAll('nav ul li a');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchForm input');
const searchButton = document.querySelector('#searchForm button');
const headerNav = document.querySelector('header nav');
// Trending Preview - Movies
const trendingPreviewMoviesContainer = document.querySelector('#trendingPreview.trendingPreview-container');
const trendingPreviewMoviesHeader = trendingPreviewMoviesContainer.querySelector('.trendingPreview-header');
const trendingPreviewMoviesTitle = trendingPreviewMoviesContainer.querySelector('.trendingPreview-title');
const trendingPreviewMoviesList = trendingPreviewMoviesContainer.querySelector('.trendingPreview-movieList');
const trendingPreviewMoviesButton = trendingPreviewMoviesContainer.querySelector('.trendingPreview-btn');

// Trending Preview - Series
const trendingPreviewSeriesContainer = document.querySelector('#trendingPreview.trendingPreview-containerSerie');
const trendingPreviewSeriesHeader = trendingPreviewSeriesContainer.querySelector('.trendingPreview-header');
const trendingPreviewSeriesTitle = trendingPreviewSeriesContainer.querySelector('.trendingPreview-title');
const trendingPreviewSeriesList = trendingPreviewSeriesContainer.querySelector('.trendingPreview-movieList');
const trendingPreviewSeriesButton = trendingPreviewSeriesContainer.querySelector('.trendingPreview-btn');

// Categories Section
const categoriesSection = document.querySelector('.categories-section');
const categoriesTitle = document.querySelector('.categories-title');
const categoriesList = document.querySelector('.categories-list');
const categoryItems = document.querySelectorAll('.category-item');

//Genre
const genre = document.querySelector('#genre');
const genreTitle = document.querySelector('.genre-title');

// Movies Section
const moviesSection = document.querySelector('#movies.section');
const moviesGrid = moviesSection.querySelector('.grid');
const movieCards = moviesGrid.querySelectorAll('.card');

// Series Section
const seriesSection = document.querySelector('#series.section');
const seriesGrid = seriesSection.querySelector('.grid');
const seriesCards = seriesGrid.querySelectorAll('.card');

// Comments Section
const commentsSection = document.querySelector('#comments.section');
const commentForm = document.querySelector('#comment-form');
const commentNameInput = document.querySelector('#name');
const commentTextarea = document.querySelector('#comment');
const commentSubmitButton = document.querySelector('#comment-form button');
const commentList = document.querySelector('#comment-list');

// Footer
const footer = document.querySelector('.footer');
const footerText = document.querySelector('.footer p');
