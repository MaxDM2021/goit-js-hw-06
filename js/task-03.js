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




const galaryImages = galaryArray => {
  return galaryArray.map(image => {
    const liEl = document.createElement('li');
    const imageEL = liEl.createElement('img');
    imageEL.setAttibute('src', `${image[i].url}`)
    imageEL.setAttibute('alt', `${image[i].alt}`)
    return liEl ;
  })
}

const elements = galaryImages(images);
const galaryEL = document.querySelector('.gallery');
galaryEL.insertAdjacentHTML("beforeBegin", [...elements]);

console.log(galaryEL);


