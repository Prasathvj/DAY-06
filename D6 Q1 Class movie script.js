//Q1.CLASS-MOVIE

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
  getPG(movie) {
    return this.rating;
  }
  
}
var movies= new Movie("Casino Royale", "Eon Productions", "PG-13");

//a)
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
}

//b)
this.rating = rating || "PG";

//c)
function getPG(movies) {
  return movies.filter(movie => movie.rating === "PG");
}

//d)
var moviename = new Movie("Casino Royale", "Eon Productions", "PG-13");

