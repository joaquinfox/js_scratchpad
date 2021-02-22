import loadImage from './loadImage';

let addImg = (src) => {
  let imgElement = document.createElement('img');
  imgElement.src = src;
  document.body.appenChild(imgElement);
};

loadImage('./300').then(img1) =>{
    if(error) throw error;
    addImg(img1,src)
    loadImage('./300'.then(img2)=>{
        if(error)throw error;
        addImg(img3.src)
    })

}