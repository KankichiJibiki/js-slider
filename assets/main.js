// Description
// main と extra を用意し、main を要素の表示、extra を左右のスライダーのエフェクトとして使っていきます。つまり、main の中に表示する箱を配置し、extra の中に非表示にさせる箱を配置させます。
const slider = document.getElementById('slider');
let imgStorage = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    'https://picsum.photos/200/300/?blur=2',
    'https://picsum.photos/200/300.jpg',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    'https://picsum.photos/200/300/?blur=2',
    'https://picsum.photos/200/300.jpg',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2',
    'https://picsum.photos/200/300/?blur=2',
    'https://picsum.photos/200/300.jpg',
];


let sliderShow = document.createElement('div');
let main = sliderShow.cloneNode(true);
let extra = sliderShow.cloneNode(true);

sliderShow.classList.add('col-10', 'd-flex', 'overflow-hiddens', 'flex-nowrap');
main.classList.add('main', 'full-width');
extra.classList.add('extra', 'full-width');

main.append(imgStorage[0]);
sliderShow.append(main);
sliderShow.append(extra);

slider.append(sliderShow);


function slideImg(num){
    console.log(num);
    let newImg = imgStorage[num-1];
    console.log(newImg);
    
}
