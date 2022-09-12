const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryRef = document.querySelector('.gallery');
galleryRef.style.display = "flex";
galleryRef.style.gap = "30px";
galleryRef.style.listStyle = "none";
console.log(galleryRef);
const markup = images.map(({url, alt}) => `<li><img src = ${url} alt = ${alt}  ></img></li>`)
                      .join("");
console.log(markup);
galleryRef.insertAdjacentHTML("afterbegin", markup);
const itemsRef = document.querySelectorAll('li');
console.log(itemsRef);
itemsRef.forEach(item => 
  item.style.width = "calc((100% - 60px) / 3)"
);
const picturesRef = document.querySelectorAll('img');
picturesRef.forEach(picture => {
  picture.style.display = "block";
  picture.style.height = "auto";
  picture.style.width = "100%";
})
