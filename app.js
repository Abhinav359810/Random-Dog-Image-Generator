let btn = document.querySelector("#button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async() =>{
  let link = await getImage();
  let img = document.querySelector("#dog");
  img.setAttribute("src",link);
});

async function getImage(){
  try{
    let res = await axios.get(url);
    return res.data.message;
  }catch(e){
    console.log(e);
    return "/";
  }
}
