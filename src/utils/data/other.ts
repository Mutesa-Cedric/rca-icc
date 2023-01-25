import React from "react"
import { BiFootball, BiBasketball, BiTennisBall } from "react-icons/bi"
import { FaUsers } from "react-icons/fa"
import { GiVolleyballBall } from "react-icons/gi"

export type Sub = {
    off: string,
    on: string,
}

export enum EventType {
    Goal = 'Goal',
    YellowCard = 'Yellow Card',
    RedCard = 'Red Card',
    Substitution = 'Substitution',
    Penalty = 'Penalty',
    OwnGoal = 'Own Goal',
    MissedPenalty = 'Missed Penalty',
    Commentry = 'Commentry',
}


export type TimeType  =  {
    comment:  string ,
    type:  EventType ,
    time:  string ,
    id:  string ,
    scorer?:  string ,
    substitution?:  Sub ,
    image?:  string ,
}

export const timelist = [
    {
        comment: 'Goal by dabagire',
        type: EventType.Goal,
        time: '1',
        id: '1',
        scorer: 'dabagire',
    },
    {
        comment: 'Substiturion John replaces Dabagire',
        type: EventType.Substitution,
        time: '2',
        id: '2',
        substitution: {
            off: 'Dabagire',
            on: 'John',
        },
    },
    {
        comment: 'It looks the game is going to end in a draw',
        type: EventType.Commentry,
        time: '90',
        id: '3',
    },
    {
        comment: 'Goal by dabagire',
        type: EventType.Goal,
        time: '1',
        id: '1',
        scorer: 'dabagire',
    },
    {
        comment: 'Substiturion John replaces Dabagire',
        type: EventType.Substitution,
        time: '2',
        id: '2',
        substitution: {
            off: 'Dabagire',
            on: 'John',
        },
    },
    {
        comment: 'It looks the game is going to end in a draw',
        type: EventType.Commentry,
        time: '90',
        id: '3',
    },
]

export const competitions = [
    {
        id: 1,
        name: "football",
        icon: React.createElement(BiFootball, {
            size: 60,
        }),
    },
    {
        id: 2,
        name: "basketball",
        icon: React.createElement(BiBasketball, {
            size: 60,
        }),
    },
    {
        id: 3,
        name: "volleyball",
        icon: React.createElement(GiVolleyballBall, {
            size: 60,
        }),
    },
    {
        id: 4,
        name: "debate",
        icon: React.createElement(FaUsers, {
            size: 60,
        }),
    },
    {
        id: 5,
        name: "pingpong",
        icon: React.createElement(BiTennisBall, {
            size: 60,
        }),
    },

]