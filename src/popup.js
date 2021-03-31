'use strict';

export default class Popup {
    constructor(){
        this.popUp = document.querySelector('.pop-up');
        this.popUpText = document.querySelector('.pop-up__message');
        this.popUpRefresh = document.querySelector('.pop-up__refresh');
        this.popUpRefresh.addEventListener('click', ()=>{
            this.onClick && this.onClick();
            this.hide();
        });
    }

    setClickListener(onClick){
        this.onClick = onClick;
    }

    openWithText (text) {
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    }

    hide () {
        this.popUp.classList.add('pop-up--hide'); 
    }
}