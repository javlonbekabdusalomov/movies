// for uzbek movies films

for ( var i=0; i < 30; i++ ){
    var elUzbekMovieList = document.querySelector('.uzbek-movie-list');
    var movieBox = document.createElement('li');
    var movieImage = document.createElement('img');
    var moviePlayImage = document.createElement('img');

    var movieName = document.createElement('p');
    var movieGanre = document.createElement('p');
    var movieDownload = document.createElement('a');
    var movieImageBox = document.createElement('div');



    var moviePlayLink = document.createElement('a');

    movieName.className ='movie-name';
    movieBox.className ='movie-box';
    movieImage.className='movie-img';
    moviePlayImage.className='movie-play-icon';
    movieGanre.className='movie-ganre';
    movieDownload.className='movie-download';
    movieImageBox.className='movie-img-box';
    

    movieImage.src = movies[i].ImageURL;
    moviePlayImage.src = movies[i].movie_play_img;
    movieName.alt = movies[i].name;
    movieName.textContent = movies[i].name;
    movieGanre.textContent=movies[i].ganre;
    moviePlayLink.href=movies[i].movie_play;
    movieDownload.href=movies[i].download;
    movieDownload.textContent='download';

    movieImageBox.appendChild(movieImage);
   
    moviePlayLink.appendChild(moviePlayImage);
   
    movieBox.appendChild(movieImageBox);
    movieBox.appendChild(movieName);
    movieBox.appendChild(movieGanre);
    movieImageBox.appendChild(moviePlayLink);
    movieBox.appendChild(movieDownload)
    elUzbekMovieList.appendChild(movieBox);

   }

// for india movies films

   for ( var i=31; i < 61; i++){
    var elIndiaMovieList = document.querySelector('.india-movie-list');
    var movieBox = document.createElement('li');
    var movieImage = document.createElement('img');
    var moviePlayImage = document.createElement('img');

    var movieName = document.createElement('p');
    var movieGanre = document.createElement('p');
    var movieDownload = document.createElement('a');
    var movieImageBox = document.createElement('div');



    var moviePlayLink = document.createElement('a');

    movieName.className ='movie-name';
    movieBox.className ='movie-box';
    movieImage.className='movie-img';
    moviePlayImage.className='movie-play-icon';
    movieGanre.className='movie-ganre';
    movieDownload.className='movie-download';
    movieImageBox.className='movie-img-box';
    

    movieImage.src = movies[i].ImageURL;
    moviePlayImage.src = movies[i].movie_play_img;
    movieName.alt = movies[i].name;
    movieName.textContent = movies[i].name;
    movieGanre.textContent=movies[i].ganre;
    moviePlayLink.href=movies[i].movie_play;
    movieDownload.href=movies[i].download;
    movieDownload.textContent='download';

    movieImageBox.appendChild(movieImage);
   
    moviePlayLink.appendChild(moviePlayImage);
   
    movieBox.appendChild(movieImageBox);
    movieBox.appendChild(movieName);
    movieBox.appendChild(movieGanre);
    movieImageBox.appendChild(moviePlayLink);
    movieBox.appendChild(movieDownload)
    elIndiaMovieList.appendChild(movieBox);

   };
   // for kurtlar vadiysi movies films

   for ( var i=61; i < movies.length; i++ ){
      var elPusiMovieList = document.querySelector('.pusi-movie-list');
      var movieBox = document.createElement('li');
      var movieImage = document.createElement('img');
      var moviePlayImage = document.createElement('img');
  
      var movieName = document.createElement('p');
      var movieGanre = document.createElement('p');
      var movieDownload = document.createElement('a');
      var movieImageBox = document.createElement('div');
  
  
  
      var moviePlayLink = document.createElement('a');
  
      movieName.className ='movie-name';
      movieBox.className ='movie-box';
      movieImage.className='movie-img';
      moviePlayImage.className='movie-play-icon';
      movieGanre.className='movie-ganre';
      movieDownload.className='movie-download';
      movieImageBox.className='movie-img-box';
      
  
      movieImage.src = movies[i].ImageURL;
      moviePlayImage.src = movies[i].movie_play_img;
      movieName.alt = movies[i].name;
      movieName.textContent = movies[i].name;
      movieGanre.textContent=movies[i].ganre;
      moviePlayLink.href=movies[i].movie_play;
      movieDownload.href=movies[i].download;
      movieDownload.textContent='download';
  
      movieImageBox.appendChild(movieImage);
     
      moviePlayLink.appendChild(moviePlayImage);
     
      movieBox.appendChild(movieImageBox);
      movieBox.appendChild(movieName);
      movieBox.appendChild(movieGanre);
      movieImageBox.appendChild(moviePlayLink);
      movieBox.appendChild(movieDownload)
      elPusiMovieList.appendChild(movieBox);
  
     };


     // for kurtlar vadiysi movies films

   //   all movie films

    

    for ( var i=0; i < movies.length; i++ ){
      var elAllMovieList = document.querySelector('.all-movie-list');
      var movieBox = document.createElement('li');
      var movieImage = document.createElement('img');
      var moviePlayImage = document.createElement('img');
  
      var movieName = document.createElement('p');
      var movieGanre = document.createElement('p');
      var movieDownload = document.createElement('a');
      var movieImageBox = document.createElement('div');
  
  
  
      var moviePlayLink = document.createElement('a');
  
      movieName.className ='movie-name';
      movieBox.className ='movie-box';
      movieImage.className='movie-img';
      moviePlayImage.className='movie-play-icon';
      movieGanre.className='movie-ganre';
      movieDownload.className='movie-download';
      movieImageBox.className='movie-img-box';
      
  
      movieImage.src = movies[i].ImageURL;
      moviePlayImage.src = movies[i].movie_play_img;
      movieName.alt = movies[i].name;
      movieName.textContent = movies[i].name;
      movieGanre.textContent=movies[i].ganre;
      moviePlayLink.href=movies[i].movie_play;
      movieDownload.href=movies[i].download;
      movieDownload.textContent='download';
  
      movieImageBox.appendChild(movieImage);
     
      moviePlayLink.appendChild(moviePlayImage);
     
      movieBox.appendChild(movieImageBox);
      movieBox.appendChild(movieName);
      movieBox.appendChild(movieGanre);
      movieImageBox.appendChild(moviePlayLink);
      movieBox.appendChild(movieDownload)
      elAllMovieList.appendChild(movieBox);
   }
     
   //   all movie films