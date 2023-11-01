
async function getdetails(){
    console.log(window.location);
    let url = window.location.href;
    var urlParams = new URLSearchParams(url.split("?")[1]);
    var id =urlParams.get("id");
    console.log(id);

    fetch(`http://localhost:3004/api/movieDetails/${id}`,{method:"POST"})
    .then((res)=>res.json())
    .then((data)=>{console.log(data);
        s ="";
        s+=` <img src="${data.Movie_poster}" alt="" class="background-image">
        <div class="movie-details-content">
           <div class="movei-content-left">
            <div class="poster-cap"><img src="${data.Movie_banner}" alt="" class="overlay-image"><p class="poster-cap-p">in cinemas</p></div>
           </div>
           <div class="movei-content-right">
            <h1 class="movie-name">${data.Movie_Title}</h1>
            <i class="fa fa-star" aria-hidden="true"></i> <span class="rating">8.4/10</span> <span class="vote">331.6K  Votes <i class="fa fa-angle-right" aria-hidden="true"></i></span>

            <div class="add-yourrating-box">
                <div class="add-yourrating-box-left">
                    <p class="add-rating-text">Add your rating & review</p>
                    <p class="no-matter-text">Your ratings matter</p>
                </div>
                <div class="add-yourrating-box-right">
                    <a href="./edit.html?id=${data._id}">Edit</a>
                </div>
            </div>
            <div class="languages"><span>2D,IMAX 2D</span> <SPAN>${data.Category}</SPAN></div>
            <div class="duration">2h 44m • ${data.Category} • UA • ${data.Release_Date}</div>
            <div class="delBtn"><a href="../index.html" onclick="delMovie('${data._id}')">Delete Movie</a></div>
           </div>
          
        </div>`;
        document.getElementById("movie-bannerfull").innerHTML=s

    })
   
    .catch((error)=>{
        console.log(error);
    })
}

getdetails();


function delMovie(id){
    console.log(id);
    fetch(`http://localhost:3004/api/delMovie/${id}`,{
        method:"DELETE"

    }).then((data)=>{
        if(data.status==200){
            alert("If you want to delete movie")
        }
        else{
            alert("Error")
        }
        getdetails();
    }).catch((error)=>{
        console.log(error);
    })
}