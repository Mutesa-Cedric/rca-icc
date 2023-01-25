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
    FOOTBALL, BASKETBALL, VOLLEYBALL, PINGPONG, DEBATE
}

export type Team = {
    _id: string;
    name: string;
    logo: string;
    players: Player[];
    category: category
}