const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
/*========Вариант создания через .map при помощи document.createElement().=========*/

// const galleryRef = document.querySelector('#gallery');

// const createImageRef = el => {
//   const itemRef = document.createElement('li');
//   const imageRef = document.createElement('img');
//   imageRef.classList.add('image-item');
//   imageRef.src = el.url;
//   imageRef.alt = el.alt;
//   itemRef.appendChild(imageRef);
//   return itemRef;
// };
// const imageGalaryRef = images.map(createImageRef);
// galleryRef.append(...imageGalaryRef);

/*========Вариант создания через .reduce  при помощи .innerHTML=========*/

// const galleryRef = document.querySelector('#gallery');

// const itemsMarkup = images.reduce(
//   (string, item) =>
//     string +
//     `<li>
//     <img class="image-item" src=${item.url} alt=${item.alt}>
//     </li>`,
//   '',
// );
// galleryRef.innerHTML = itemsMarkup;
// // galleryRef.innerHTML = ''; //очистка списка

/*========Вариант создания через функцию при помощи .insertAdjacentHTML(position, string)=========*/

const galleryRef = document.querySelector('#gallery');

function getItemsMarkup(arr) {
  return arr.reduce(
    (string, { url, alt }) =>
      string +
      `<li>
    <img class="image-item"  src=${url} alt='${alt}'>
    </li>`,
    ` `,
  );
}

galleryRef.insertAdjacentHTML('beforeend', getItemsMarkup(images));
