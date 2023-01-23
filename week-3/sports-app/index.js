/*
============================================
; Title:  index.js
; Author: Brett Grashorn
; Date:   22 January 2023
; Description: Main program for the team module
;===========================================
*/

const TeamManager = require('./team-manager');

let teams = TeamManager.getTeam();

console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManger.displayTeam(team));
}

const team1 = TeamManager.getTeam('Kansas City');

const team2 = TeamManager.getTeam('Houston');

console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team1));

console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(team2));