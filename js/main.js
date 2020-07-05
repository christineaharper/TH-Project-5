// searchbar

const search = document.getElementById('searchBar');
const imgLink = document.querySelectorAll('a');


search.addEventListener('input', (event) => {
  const searchValue = event.target.value.toLowerCase();
  for (let i=0; i < imgLink.length; i++) {
    if (imgLink[i].dataset.caption.includes(searchValue)) {
      imgLink[i].style.display = "inline";
    } else {
      imgLink[i].style.display = "none";
    }
  
  }
})

// fancybox custom styles

$('[data-fancybox="gallery"]').fancybox({
  infobar: false,
  width: 600,
});




// Test Code Below This Line

// const search = document.getElementById('searchBar')

// search.addEventListener('input', (event) => {
//   const searchValue = event.target.value.toLowerCase();
//   console.log(searchValue); // console log test
// })


// const imgLink = document.querySelectorAll('a');

// //loop through a elements, retrieve captions
// for (let i=0; i < imgLink.length; i++) {
//   console.log(imgLink[i].dataset.caption); //console log test
// };



