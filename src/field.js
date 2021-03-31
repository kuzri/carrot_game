'use strict';

import * as sound from './sound.js';

const carrotSize = 80;

export const ItemType = Object.freeze({
    carrot : 'carrot',
    bug : 'bug',
})

export class Field {
    constructor(carrotCount, bugCount){
        this.carrotCount  = carrotCount;
        this.bugCount = bugCount;
        this.field = document.querySelector('.game__field');
        this.fieldRect = this.field.getBoundingClientRect();
        //this.onClick = this.onClick.bind(this);
        this.field.addEventListener('click',this.onClick);
    };

    init(){
        this.field.innerHTML = '';
        this._addItem('carrot', this.carrotCount, '/img/carrot.png');
        this._addItem('bug', this.bugCount, '/img/bug.png');
    };

    setClickListener(onItemClick){
        this.onItemClick = onItemClick;
    };
    

    onClick = (event) => {
         const target = event.target;
         if(target.matches('.carrot')){
            target.remove();
            sound.playCarrot();
            this.onItemClick && this.onItemClick(ItemType.carrot); // 영상 한번 더 보기
         }else if(target.matches('.bug')){
            this.onItemClick && this.onItemClick(ItemType.bug);
         }
    };
    
    _addItem(className, count, imgPath){
        const x1 = 0;
        const y1 = 0;
        const x2 = this.fieldRect.width;
        const y2 = this.fieldRect.height;
        for(let i=0; i < count; i++){
            const item = document.createElement('img');
            item.setAttribute('class',className);
            item.setAttribute('src', imgPath);
            item.style.position = 'absolute';
            const x = randomNumber(x1, x2);
            const y = randomNumber(y1, y2);
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
            this.field.appendChild(item);
        }
    };

}

function randomNumber(min,max){
    return Math.random() * (max - min - carrotSize) + min;
};