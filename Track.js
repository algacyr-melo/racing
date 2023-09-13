// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   Track.js                                           :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 17:19:15 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 19:56:30 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// track constants and variables
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

const trackGrid = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYER = 2;

function trackTileToIndex(tileCol, tileRow) {
    return (tileCol + TRACK_COLS * tileRow);
}

function isWallAtTileCoord(trackTileCol, trackTileRow) {
    const trackIndex = trackTileToIndex(trackTileCol, trackTileRow);

    return (trackGrid[trackIndex] == TRACK_WALL);
}

function checkForTrackAtPixelCoord(nextX, nextY) {
    // get the tile column and row that car is currently over
    const tileCol = Math.floor(nextX/TRACK_W);
    const tileRow = Math.floor(nextY/TRACK_H);

    // check whether te car is within any part of the track wall
    if (tileCol < 0 || tileCol >= TRACK_COLS ||
        tileRow < 0 || tileRow >= TRACK_ROWS) {
        return false ; // bail out of function to avoid illegal array position usage
    }

    const trackIndex = trackTileToIndex(tileCol, tileRow);

	return (trackGrid[trackIndex] == TRACK_ROAD);
}

function drawTracks() {
    for (let eachCol = 0; eachCol < TRACK_COLS; eachCol++) {
        for (let eachRow = 0; eachRow < TRACK_ROWS; eachRow++) {

			const trackTopLeftX = TRACK_W * eachCol;
			const trackTopLeftY = TRACK_H * eachRow;
			
            if (isWallAtTileCoord(eachCol, eachRow)) {
				canvasContext.drawImage(trackPicWall, trackTopLeftX, trackTopLeftY);
            } else {
				canvasContext.drawImage(trackPicRoad, trackTopLeftX, trackTopLeftY);
			}

        } // end eachRow
    } // end eachCol
}
