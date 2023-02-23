const panels = document.querySelectorAll('.panel')
console.log(panels);
panels.forEach(z => {
    console.log(z);
    z.addEventListener('click', () => {
        console.log(z);
        removeActiveClasses()
        z.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(p => {
        console.log(p);
        p.classList.remove('active')
        console.log(p);
        //jha sabh parr raha hai but jispe active hai usko hatta raha hai 
        
    })
}
// for(int i=1; i<n; i++){

// }

// yehh kesse pattta chalega ki kabh koon si index se hatega and koon si
//index mai add hogha

// const panels = document.querySelectorAll('.panel');
// panels.forEach(z=>{
//     z.addEventListener('click',() =>{
//         remove();

//     })
// })
// function remove(){
//     panels.forEach(m=>{
//         m.classList.remove('active')
//     })
// }