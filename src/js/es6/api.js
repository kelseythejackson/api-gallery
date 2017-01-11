(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let xhr = new XMLHttpRequest(),
            spotifyURI = 'https://api.spotify.com/v1/albums/?ids=7btiyhWzUfzxN3ijSiBpC8,7eaQqVyq6xzAVgsxSzSP83,43uErencdmuTRFZPG3zXL1,4q5E2s5u5X5HT4UMJpbMKE,35ZnHlkhn4CZzUxyUQyJ00,097eYvf9NKjFnv4xA9s2oV,623Ef2ZEB3Njklix4PC0Rs,07iExA8pPReAFXXIIthVsE,39BuqlAkHYtp7EjZ3ZZcn6,7Eoz7hJvaX1eFkbpQxC5PA';


        xhr.open('GET', encodeURI(spotifyURI));
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    let data = JSON.parse(xhr.responseText),
                        albums = data.albums;
                    console.log(albums);
                    let albumList = document.getElementById('music');
                    let gallery = '';
                    for(album of albums) {
                    gallery += `<li id="${album.name}" class="${album.artists[0].name} gallery-item"><a id="${album.name}" href="${album.images[0].url}" data-lightbox="albums" data-title="${album.name} <br><span style='font-size: 16px; line-height: 1em'>${album.artists[0].name} <br> ${album.label}</span>" data-artist="${album.artists[0].name}" data-releasdate="${album.release_date}" data-label="${album.label}"><img class="gallery-image" src="${album.images[0].url}"></a></li>`;

                    }


                    if(albumList !== undefined) {
                        albumList.innerHTML = gallery;

                    }

                    let btnTitle = document.getElementById('title'),
                        btnArtist = document.getElementById('artist');

                    btnTitle.addEventListener('change', () => {
                        console.log('title');
                        tinysort('ul#music>li', {attr: 'id'});
                    });

                    btnArtist.addEventListener('change', () => {
                        console.log('artist');
                        tinysort('ul#music>li', {attr: 'class'});
                    });




                }
            }
        };
        xhr.send();

        let xhr2 = new XMLHttpRequest(),
            omdbURI = 'https://www.omdbapi.com/?s=star+wars&r=JSON';
        xhr2.open('GET', encodeURI(omdbURI));
        xhr2.onreadystatechange = () => {
            if(xhr2.readyState === 4) {
                if(xhr2.status === 200) {
                    let data2 = JSON.parse(xhr2.responseText),
                        movies = data2.Search;
                    console.log(movies);
                    let movieList = document.getElementById('films');
                    let movieGallery = '';
                    for(movie of movies) {
                        console.log(movie.Title);
                        movieGallery += `<li id="${movie.Title}" class="${movie.Year} gallery-item"><a href="${movie.Poster}" data-lightbox="movies" data-title="${movie.Title} <br><span style='font-size: 16px; line-height: 1em'> ${movie.Year}</span>"><img src="${movie.Poster}" class="gallery-image flick"></a>`;
                    }
                    if(movieList != undefined) {
                        movieList.innerHTML = movieGallery;
                    }

                    let btnFilmTitle = document.getElementById('film-title'),
                        btnFilmYear = document.getElementById('film-year');
                    btnFilmTitle.addEventListener('change', () => {
                        console.log('film title');
                        tinysort('ul#films>li', {attr: 'id'});
                    });


                    btnFilmYear.addEventListener('change', () => {
                        console.log('film year');
                        tinysort('ul#films>li', {attr: 'class'});
                    });
                }


            }
        };
        xhr2.send();
    });
})();

