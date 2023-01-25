import { type } from "os";
import { RefType } from "./types2";

export type Player = {
    _id: string;
    displayName: string;
    fullName: string;
    profile: string;
    goals: number;
    footballAssists: number;
    basketballAssists: number;
    steals: number;
    blocks: number;
    rebounds: number;
    points: number;
    fouls: number;
    redCards: number;
    yellowCards: number;
    number: number;
    position: string[];
}

export enum category {
    basketball = "basketball", football = "football", volleyball = "volleyball", pingpong = "pingpong", debate = "debate"
}

export type Team = {
    _id: string;
    name: string;
    logo: string;
    players: Player[];
    category: category;
    stats: {
        goalsConceded: number;
        goalsScored: number;
        matchesDrawn: number;
        matchesLost: number;
        matchesPlayed: number;
        matchesWon: number;
        points: number;
    };
}

export type Event = {
    name: string;
    description: string;
    time: number | string;
}

export type LineUp = {
    formation: string;
    startingEleven: RefType[];
    startingFive: RefType[];
}

export type TeamStats = {
    corners: number;
    fouls: number;
    goals: number;
    offsides: number;
    points: number;
    possession: number;
    redCards: number;
    shots: number;
    shotsOnTarget: number;
    yellowCards: number;
}

export type Match = {
	homeTeamLineup: LineUp;
	awayTeamLineup: LineUp;
    _id: string;
    title: string;
    description: string;
    date: Date;
    homeTeam: Team;
    awayTeam: Team;
    status: any;
    events: Event[];
    category: category;
    stats: {
        awayTeamStats: TeamStats;
        homeTeamStats: TeamStats;
    };
}

export type MatchDay ={
    _id:string;
    title:string;
    date:string;
    matches:Match[];
    category:string;
       
    
}
