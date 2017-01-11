'use strict';

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        var xhr = new XMLHttpRequest(),
            spotifyURI = 'https://api.spotify.com/v1/albums/?ids=7btiyhWzUfzxN3ijSiBpC8,7eaQqVyq6xzAVgsxSzSP83,43uErencdmuTRFZPG3zXL1,4q5E2s5u5X5HT4UMJpbMKE,35ZnHlkhn4CZzUxyUQyJ00,097eYvf9NKjFnv4xA9s2oV,623Ef2ZEB3Njklix4PC0Rs,07iExA8pPReAFXXIIthVsE,39BuqlAkHYtp7EjZ3ZZcn6,7Eoz7hJvaX1eFkbpQxC5PA';

        xhr.open('GET', encodeURI(spotifyURI));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var data = JSON.parse(xhr.responseText),
                        albums = data.albums;
                    console.log(albums);
                    var albumList = document.getElementById('music');
                    var gallery = '';
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = albums[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            album = _step.value;

                            gallery += '<li id="' + album.name + '" class="' + album.artists[0].name + ' gallery-item"><a id="' + album.name + '" href="' + album.images[0].url + '" data-lightbox="albums" data-title="' + album.name + ' <br><span style=\'font-size: 16px; line-height: 1em\'>' + album.artists[0].name + ' <br> ' + album.label + '</span>" data-artist="' + album.artists[0].name + '" data-releasdate="' + album.release_date + '" data-label="' + album.label + '"><img class="gallery-image" src="' + album.images[0].url + '"></a></li>';
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }

                    if (albumList !== undefined) {
                        albumList.innerHTML = gallery;
                    }

                    var btnTitle = document.getElementById('title'),
                        btnArtist = document.getElementById('artist');

                    btnTitle.addEventListener('change', function () {
                        console.log('title');
                        tinysort('ul#music>li', { attr: 'id' });
                    });

                    btnArtist.addEventListener('change', function () {
                        console.log('artist');
                        tinysort('ul#music>li', { attr: 'class' });
                    });
                }
            }
        };
        xhr.send();

        var xhr2 = new XMLHttpRequest(),
            omdbURI = 'http://www.omdbapi.com/?s=star+wars&r=JSON';
        xhr2.open('GET', encodeURI(omdbURI));
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4) {
                if (xhr2.status === 200) {
                    var data2 = JSON.parse(xhr2.responseText),
                        movies = data2.Search;
                    console.log(movies);
                    var movieList = document.getElementById('films');
                    var movieGallery = '';
                    var _iteratorNormalCompletion2 = true;
                    var _didIteratorError2 = false;
                    var _iteratorError2 = undefined;

                    try {
                        for (var _iterator2 = movies[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                            movie = _step2.value;

                            console.log(movie.Title);
                            movieGallery += '<li id="' + movie.Title + '" class="' + movie.Year + ' gallery-item"><a href="' + movie.Poster + '" data-lightbox="movies" data-title="' + movie.Title + ' <br><span style=\'font-size: 16px; line-height: 1em\'> ' + movie.Year + '</span>"><img src="' + movie.Poster + '" class="gallery-image flick"></a>';
                        }
                    } catch (err) {
                        _didIteratorError2 = true;
                        _iteratorError2 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                _iterator2.return();
                            }
                        } finally {
                            if (_didIteratorError2) {
                                throw _iteratorError2;
                            }
                        }
                    }

                    if (movieList != undefined) {
                        movieList.innerHTML = movieGallery;
                    }

                    var btnFilmTitle = document.getElementById('film-title'),
                        btnFilmYear = document.getElementById('film-year');
                    btnFilmTitle.addEventListener('change', function () {
                        console.log('film title');
                        tinysort('ul#films>li', { attr: 'id' });
                    });

                    btnFilmYear.addEventListener('change', function () {
                        console.log('film year');
                        tinysort('ul#films>li', { attr: 'class' });
                    });
                }
            }
        };
        xhr2.send();
    });
})();