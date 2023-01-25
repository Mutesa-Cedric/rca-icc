import { type } from "os";

export type Player = {
    _id: string;
    displayName: string;
    fullName: string;
    profile: string;
    goals: number;
    assists: number;
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
    startingEleven: Player[];
    startingFive: Player[];
}

export type Match = {
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
        events: Event[];
        homeTeamLineup: LineUp;
        awayTeamLineup: LineUp;
        awayTeamStats: {
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
        };
        homeTeamStats: {
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
        };
    };
}
