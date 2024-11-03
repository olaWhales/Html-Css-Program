const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL = `${BASE_URL}movie/popular?${API_KEY}`;
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`
console.log(API_URL)
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";    //the purpose of puttig the into string is for easy concatenation


const movieMainCointainer = document.querySelector(".movieMainCointainer");  // i query the html here after everything about API have been setling
console.log(movieMainCointainer);



// const getMovie = (url) => {
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => console.log(error))
// }

const getMovie = async (url) => {           // i write this function with a name getMovie and passs it to URL
    try {
        const response = await fetch(url)      // i fetch the the Url from respond   
        const data = await response.json()     // it converted to to JSON here 
        console.log(data.results)               // the data is the object already converted to -- the RESULT HERE means to acces the exact
        showMovie(data.results)
    } catch (error) {                           // we USE catch to cancur error
        // dot . means access--(then) means bayi-- response (its a keyword)-- .JSON means(to convert to js object) 
    }
}


getMovie(API_URL)
function showMovie(movies){ 
    movieMainCointainer.innerHTML = '';                   
    movies.forEach(movie => {              // poste; path is for the image 
        const {overview , title , vote_average , poster_path} = movie
        console.log(`${IMAGE_URL}${poster_path}`)   //we can display all details in here
// we try to acccess or merge js with html so we will create the html div by using the class name 
        const movieElement = document.createElement('div')     // down here i copy the 
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
                <div>
                    <img src="${IMAGE_URL}${poster_path}" alt="image">
                </div>
                <div class="titleRating">
                    <span>${title}</span>
                    <span>${vote_average}</span>
                </div>
                <div class="overview">
                    <h2>overview</h2>
                    <p>${overview}
                    </p>
                </div>
        `
        movieMainCointainer.appendChild(movieElement)
    });
}

const searchMovieForm = document.querySelector('.search');  //we're create a dom here

searchMovieForm.addEventListener('keyup', (event)=>{
    event.preventDefault();
    const inputValue = event.target.value ;
    console.log(inputValue)
    if(inputValue){
        const searchURL = SEARCHMOVIEURL + "&query=" + inputValue ;
        console.log(searchURL);
    // getMovie = SEARCHMOVIEURL;
    getMovie(searchURL)
    }else{
        getMovie(API_URL);
    }
})

