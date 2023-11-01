let but=document.getElementById("btn")
document.getElementById("frm").addEventListener("submit",async(e)=>{
    const posterrr=await convertToBase64(e.target[6].files[0]);
    console.log(posterrr);
    const bannerr=await convertToBase64(e.target[7].files[0]);
    console.log(bannerr);



    let movietitle=document.getElementById("movie-name").value
let moviecategory=document.getElementById("Category-movie").value
let rating=document.getElementById("rating-movie").value
let rDate=document.getElementById("date-movie").value
let languages=document.getElementById("languagesf").value
let description=document.getElementById("description").value



    
   
    fetch("http://localhost:3004/api/display",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            Movie_Title: movietitle,
            Category:moviecategory,
            Rating:rating,
            Release_date:rDate,
            Languages:languages,
            Description:description,
            Movie_poster:posterrr,
            Movie_banner:bannerr

    
        })
        }).then((res)=>{
            console.log(res.status);
            if(res.status==201){
                alert("movie Added")
            }
            else{
                alert("data not added")
            }
           
        })
        .catch((error)=>{
            console.log("server not connected");
    
        })
    
        
       
    
    
    })

  




    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
    
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }