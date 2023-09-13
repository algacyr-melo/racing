// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   Main.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 17:40:42 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 20:14:22 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// save the canvas for dimensions, and its context for drawing to it
let canvas, canvasContext;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

	loadImages();
	carInit();
	initInput();
}

function loadingDoneSoStartGame() {
    const framesPerSecond = 30;

    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
	carMove();
}

function drawEverything() {
    drawTracks();
    carDraw();
}
