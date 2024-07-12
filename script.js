const hi=document.querySelectorAll(".part")
const jo=document.querySelectorAll("question")
hi.forEach((e)=>{
    // e.preventDefalut();
    e.addEventListener('click',()=>{
    e.classList.toggle("active")

    })
})