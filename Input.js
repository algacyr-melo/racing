// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   Input.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 17:14:09 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 17:39:52 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// keyboard keycode constants 
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_LEFT_ARROW = 37;

// keyboard hold state variables, to use keys more like buttons
let keyHeld_Gas = false;
let keyHeld_Reverse = false;
let keyHeld_TurnLeft = false;
let keyHeld_TurnRight = false;

function setKeyHoldState(thisKey, setTo) {
	if (thisKey == KEY_UP_ARROW) {
		keyHeld_Gas = setTo;
	}
	if (thisKey == KEY_DOWN_ARROW) {
		keyHeld_Reverse = setTo;
	}
	
	if (thisKey == KEY_LEFT_ARROW) {
		keyHeld_TurnLeft = setTo;
	}
	if (thisKey == KEY_RIGHT_ARROW) {
		keyHeld_TurnRight = setTo;
	}
}

function keyPressed(evt) {
	setKeyHoldState(evt.keyCode, true);
    evt.preventDefault(); // block keys from serving their default functionality in the web browser
}

function keyReleased(evt) {
	setKeyHoldState(evt.keyCode, false);
}

function initInput() {
    document.addEventListener("keydown", keyPressed);
    document.addEventListener("keyup", keyReleased);
}
