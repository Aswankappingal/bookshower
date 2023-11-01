async function getdata(){
    const task=await fetch("http://localhost:3004/api/movies");
    const data= await task.json()
    console.log(data);
    // console.log(data);
    s="";
    data.map(dt=>{
        s+=` <div class="movies">
        <div class="row">
            <div class="col-lg">
                <a href="./pages/movei-details.html?id=${dt._id}" title="link"><img src="${dt.Movie_banner}" alt=""></a>
                <p class="movies-p1">${dt.Movie_Title}</p>
                <p class="movies-p2">${dt.Category}</p>
            </div>
           
        </div>
    </div>`
    });
    document.getElementById("list-datas").innerHTML=s
}
getdata()