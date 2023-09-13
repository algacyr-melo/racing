// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ImageLoading.js                                    :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 19:31:32 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 20:14:28 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

const carPic = document.createElement('img');
const trackPicRoad = document.createElement('img');
const trackPicWall = document.createElement('img');

let picsToLoad = 3;

function loadImages() {
	carPic.onload = countLoadedImageAndLaunchIfReady;
	carPic.src = "player1.png";

	trackPicRoad.onload = countLoadedImageAndLaunchIfReady;
	trackPicRoad.src = "track_road.png";

	trackPicWall.onload = countLoadedImageAndLaunchIfReady;
	trackPicWall.src = "track_wall.png";
}

function countLoadedImageAndLaunchIfReady() {
	picsToLoad--;
	
	if (picsToLoad == 0) {
		loadingDoneSoStartGame();
	}
}
