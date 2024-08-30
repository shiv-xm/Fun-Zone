const getMovies = (id) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f6c6108400msh011881d7bb8317bp1b37ffjsn31a224c5ec76",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  fetch(
    `https://streaming-availability.p.rapidapi.com/v2/search/basic?country=us&services=netflix%2Cprime.buy%2Chulu.addon.hbo%2Cpeacock.free&output_language=en&show_type=movie&genre=${id}&show_original_language=en&keyword=zombie`,
    options
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      displayMovies(data);
    })
    .catch((err) => {
      document.getElementById("notFound").style.display = "block"; // api error handling
      console.log(err);
    });
};




// display api data on html






// display api data on html
const displayMovies = (data) => {
  const bookContainer = document.getElementById("movieContainer");
  const result = data.result;
  console.log(result);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].title);
    const div = document.createElement("div");
    div.innerHTML = `
          <div id="bookBox" class="book-box">
             <h4>${i}</h4>
             <div class="book-info">
                <h5 class="title">${result[i].title}</h5>
               <p>Imdb:${result[i].imdbRating}</p>
               <p>Overview:${result[i].overview}</p>
               <img style="width:300px;" src="${result[i].backdropURLs.original}" />
             </div>
          </div>
       `;
    movieContainer.appendChild(div);
  }
};