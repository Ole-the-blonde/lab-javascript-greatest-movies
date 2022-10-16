// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const movies = require("./data.js");
const movies = require("./data.js");
const data = require("./data.js");

function getAllDirectors(moviesArray) {
  const allDirectories = moviesArray.map(function (movie) {
    return movie.director;
  });
  return allDirectories;
}
// console.log(getAllDirectors(data));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSpielberg = moviesArray.filter(function (movie) {
    //Director Spielberg genre drama
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return moviesSpielberg.length;
}
howManyMovies(data);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const highestScore = moviesArray.reduce(function (acc, val) {
    acc += val.score;
    return acc;
  }, 0);
  return Number((highestScore / moviesArray.length).toFixed(2));
}
scoresAverage(data);
// console.log(scoresAverage(data));
//Array.reduce((acc, val) => {}, 0)
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movies) {
    return movies.genre.includes("Drama");
  });
  return Number(scoresAverage(dramaMovies));
  //   console.log(dramaMovies);
}
dramaMoviesScore(data);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const year = [...moviesArray];
  year.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    }
    return 0;
  });
  return year;
}
orderByYear(data);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const year = [...moviesArray];
  year.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    }
    return 0;
  });
  return year.map((movies) => movies.title).slice(0, 20);
}
orderAlphabetically(data);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
