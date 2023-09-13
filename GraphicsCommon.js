// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   GraphicsCommon.js                                  :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: almelo <almelo@student.42.fr>              +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/09/12 17:11:21 by almelo            #+#    #+#             //
//   Updated: 2023/09/12 17:57:43 by almelo           ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
  canvasContext.fill();
}

function drawBitmapCenteredAtLocationWithRotation(graphic, atX, atY, withAngle) {
    canvasContext.save(); // allows us to undo translate movement and rotate spin
    canvasContext.translate(atX, atY); // sets the point where our graphic will go
    canvasContext.rotate(withAngle); // sets the rotation
    canvasContext.drawImage(graphic, -carPic.width/2, -carPic.height/2);
    canvasContext.restore();
}
