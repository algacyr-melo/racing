// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   Car.js                                             :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 17:16:26 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 19:44:35 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// variables to keep track of car position
let carX = 0, carY = 0;
let carSpeed = 0;
let carAng = -0.5*Math.PI;

// car tuning constants
const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.03;
const MIN_TURN_SPEED = 0.5;

function carInit() {
    // load car image
	carReset();
}

function carReset() {
	// set up car's start position
	for (let i = 0; i < trackGrid.length; i++) {
		if (trackGrid[i] == TRACK_PLAYER) {
			const tileRow = Math.floor(i/TRACK_COLS);
			const tileCol = i%TRACK_COLS;

			carX = tileCol * TRACK_W + 0.5*TRACK_W;
			carY = tileRow * TRACK_H + 0.5*TRACK_H;
			trackGrid[i] = TRACK_ROAD;
			break ;
		}
	} // end for loop
}

function carMove() {
    if (keyHeld_Gas) {
        carSpeed += DRIVE_POWER;
    }
    if (keyHeld_Reverse) {
        carSpeed -= REVERSE_POWER;
    }

	// only allow the car to turn while it's rolling
	if (Math.abs(carSpeed) > MIN_TURN_SPEED) {
		if (keyHeld_TurnLeft) {
			carAng -= TURN_RATE*Math.PI;
		}
		if (keyHeld_TurnRight) {
			carAng += TURN_RATE*Math.PI;
    	}
	}

	const nextX = carX + Math.cos(carAng) * carSpeed;
	const nextY = carY + Math.sin(carAng) * carSpeed;

	if (checkForTrackAtPixelCoord(nextX, nextY)) {
		carX = nextX;
		carY = nextY;
	} else {
		carSpeed = 0.0;
	}

	carSpeed *= GROUNDSPEED_DECAY_MULT;
}

function carDraw() {
	drawBitmapCenteredAtLocationWithRotation(carPic, carX, carY, carAng);
}
