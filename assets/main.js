// Description
// main と extra を用意し、main を要素の表示、extra を左右のスライダーのエフェクトとして使っていきます。つまり、main の中に表示する箱を配置し、extra の中に非表示にさせる箱を配置させます。
const slider = document.getElementById('slider');
let imgStorage = {
    1: {img:'https://placehold.jp/240x240.png', name:'AAA', price: "100"},
    2: {img:'https://placehold.jp/320x240.png', name:'BBB', price: "200"},
    3: {img:'https://picsum.photos/200/300?grayscale', name:'CCC', price: "300"},
    4: {img:'https://picsum.photos/200/300/?blur', name:'DDD', price: "400"},
    5: {img:'https://picsum.photos/id/870/200/300?grayscale&blur=2', name:'EEE', price: "500"},
    6: {img:'https://picsum.photos/200/300/?blur=2', name:'FFF', price: "600"},
    7: {img:'https://picsum.photos/200/300.jpg', name:'GGG', price: "700"},
    8: {img:'https://picsum.photos/id/237/200/300', name:'HHH', price: "800"},
    9: {img:'https://picsum.photos/seed/picsum/200/300', name:'HHH', price: "900"},
    10: {img:'https://picsum.photos/200/300?grayscale', name:'HHH', price: "1000"},
    11: {img:'https://picsum.photos/200/300/?blur', name:'HHH', price: "1100"},
    12: {img:'https://picsum.photos/id/870/200/300?grayscale&blur=2', name:'HHH', price: "1200"},
    13: {img:'https://picsum.photos/200/300/?blur=2', name:'HHH', price: "1300"},
    14: {img:'https://picsum.photos/200/300.jpg', name:'HHH', price: "1400"},
    15: {img:'https://picsum.photos/id/237/200/300', name:'HHH', price: "1500"},
    16: {img:'https://picsum.photos/seed/picsum/200/300', name:'HHH', price: "1600"},
    17: {img:'https://picsum.photos/200/300?grayscale', name:'HHH', price: "1700"},
    18: {img:'https://picsum.photos/200/300/?blur', name:'HHH', price: "1800"},
    19: {img:'https://picsum.photos/seed/picsum/200/300', name:'HHH', price: "1600"},
    20: {img:'https://picsum.photos/id/237/200/300', name:'HHH', price: "800"},
    21: {img:'https://picsum.photos/seed/picsum/200/300', name:'HHH', price: "900"},
    22: {img:'https://picsum.photos/200/300.jpg', name:'HHH', price: "900"},
};


let sliderShow = document.createElement('div');
let main = sliderShow.cloneNode(true);
let extra = sliderShow.cloneNode(true);
let img = document.createElement('img');

sliderShow.classList.add('col-10', 'd-flex', 'overflow-hiddens', 'flex-nowrap', 'imgFit', 'w-100', 'border');
main.classList.add('main', 'full-width', 'border');
extra.classList.add('extra', 'full-width', 'border');

img.src = imgStorage[1]["img"];
main.append(img);
main.setAttribute('data-index', 1);

sliderShow.append(main);
sliderShow.append(extra);

slider.append(sliderShow);

const infoContainer = document.getElementById('infoContainer');
function createInfo($name, $price){
    let name = document.createElement('div');
    let price = document.createElement('div');

    name.innerHTML = "Name: " + $name;
    price.innerHTML = "Price: " + $price;

    infoContainer.innerHTML = "";

    infoContainer.append(name);
    infoContainer.append(price);
}

function slideImg(num){
    console.log(num);
    let newImg = document.createElement('img');
    newImg.src = imgStorage[num]["img"];
    let oldImg = document.createElement('img');
    oldImg.src = imgStorage[main.getAttribute('data-index')]["img"];
    console.log(newImg);

    createInfo(imgStorage[num]["name"], imgStorage[num]["price"]);

    let youngOrOld = main.getAttribute('data-index') > num ? "left" : "right";
    main.setAttribute('data-index', num);
    animateMain(newImg, oldImg, youngOrOld);
}

function animateMain(newImg, oldImg, youngOrOld){
    main.innerHTML = "";
    main.append(newImg);
    extra.innerHTML = "";
    extra.append(oldImg);

    main.classList.add('expand-animation');
    extra.classList.add('deplete-animation');

    if(youngOrOld == 'left'){
        sliderShow.append(main);
        sliderShow.append(extra);
    } else if(youngOrOld == 'right'){
        sliderShow.append(extra);
        sliderShow.append(main);
    }
}
