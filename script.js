console.log("sihkv");
document.querySelector('.cross').style.display='none';
document.querySelector('.menu').addEventListener("click",()=>{
    document.querySelector('.sidebar1').classList.toggle('sidebargo');
    document.querySelector('.menu').style.display='none';
    setTimeout(()=>{
        document.querySelector('.cross').style.display='inline';
        
    },400);
})
document.querySelector('.cross').addEventListener("click",()=>{
    document.querySelector('.sidebar1').classList.toggle('sidebargo');
    document.querySelector('.cross').style.display='none';
    setTimeout(()=>{
        document.querySelector('.menu').style.display='inline';
        
    },400);
    document.querySelector('.cross').style.display='none';
    

})