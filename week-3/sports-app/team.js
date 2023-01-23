/*
============================================
; Title:  team.js
; Author: Brett Grashorn
; Date:   22 January 2023
; Description: Team class 
;===========================================
*/


/**
 * Creates a Team class with properties for name, mascot, and player count.
 * Properties are initialized in the classes constructor.
 * Class is exported using Node's module system
 */
class Team {
    constructor(name, mascot, playerCount){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Uses Nodes module system to export the Fruit class.
// This makes the Fruit class accessible in other files.
module.exports = Team;