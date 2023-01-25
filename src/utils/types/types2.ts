import { Player, Team } from "./types1";

export type RefType = {
    _ref?: string;
    _type?: string;
    _key?: string;
};

export type PlayerByTeam = {
    football: Player[];
    basketball: Player[];
    volleyball: Player[];
    pingpong: Player[];
    debate: Player[];
}

export type TeamGroups = {
    football: Team[];
    basketball: Team[];
    volleyball: Team[];
    pingpong: Team[];
    debate: Team[];
}