let url = "../js/pageObj.json";
let webpages= '';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    objMaker(data);
    console.log(data);
  })
  .catch();

let objMaker=(pagesObj)=>
{
  console.log(pagesObj);
webpages=pagesObj;
};

const fakeApi=(url)=>{
  return new Promise ((res,rej)=>{
    setTimeout(()=>{
      let {pages}=webpages;
      if(pages[url]){
        res(pages[url]);
      }
      else{
        rej();
      }
  },2000);
})
};

  let findData=async()=>{
    let users=await fakeApi("/users");
    console.log(users);
    let chosenOne=users.filter((item)=>item.name==="David");
    let {id:userId}=chosenOne[0];
    console.log(userId);

    let userInfo=await fakeApi(`/user/${userId}`);
    let [chosenPost]=userInfo.postId;
    console.log(chosenPost);
    let thePost= await fakeApi(`/post/${chosenPost}`);
    console.log(thePost);
  }
  findData();
