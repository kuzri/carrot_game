'use strict';

import Popup from './popup.js';
import {GameBuilder, Reason } from './game.js';
import * as sound from './sound.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
.gameDuration(5)
.carrotCount(3)
.bugCount(3)
.build();

game.setGameStopListener(reason=>{
    let message;
    switch(reason){
        case Reason.cancel:
            message = 'replay?';
            sound.playAlert();
            break;
        case Reason.win:
            message = 'win';
            sound.playWin();
            break;
        case Reason.lose:
            message = 'lose';
            sound.playBug();
            break;
        default:
            throw new Error('error occured. Please ask the operator.');
    }
    gameFinishBanner.openWithText(message);
});

gameFinishBanner.setClickListener(()=>{
    game.start();
});