/*
============================================
; Title:  team-manager.js
; Author: Brett Grashorn
; Date:   22 January 2023
; Description: Team Manager Page 
;===========================================
*/

const Team = require("./team");

let teams = [
    new Team("Kansas City", "Royals", "26"),
    new Team("Houston", "Astros", "26"),
    new Team("Colorado", "Rockies", "26"),
    new Team("Atlanta", "Braves", "26"),
    new Team("Milwaukee", "Brewers", "26"),
]

module.exports.getTeam = function() {
    return teams;
}

module.exports.getTeam = function(name) {
    for (let team of teams) {
        if (team.name === name){
            return team
        }
    }
}

module.exports.displayTeam = function(team) {
    return "Name: " + team.name + "/nMascot: " + team.mascot + "/nPlayer Count: " + team.playerCount + "/n";
}