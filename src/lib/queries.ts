import { groq } from "next-sanity";

export const playersQuery = groq`*[_type == "player"]{
    _id,
    displayName,
    fullName,
    "profile": profile.asset->url,
}`

export const teamsFootQuery = groq`*[_type == "team" && category == "football"]{
    _id,
    players,
    name,
    category,
    "logo": logo.asset->url,
}`

export const teamsStatsFootQuery = groq`*[_type == "team" && category == "football"]{
    _id,
    players,
    name,
    "logo": logo.asset->url,
    stats,
}`

export const playersFootQuery = groq`*[_type == "team" && category == "football"]{
    _id,
    name,
    category,
    players[]->{
        _id,
        displayName,
        fullName,
        position,
        "profile": profile.asset->url,
    },
}`

export const teamsBasketQuery = groq`*[_type == "team" && category == "basketball"] {
    _id,
    players,
    name,
    category,
    "logo": logo.asset->url,
}`

export const teamsVolleyQuery = groq`*[_type == "team" && category == "volleyball"]{
    _id,
    players,
    name,
    category,
    "logo": logo.asset->url,
}`

export const fetchMatchesQuery = groq`*[_type == "match"]{
    _id,
    date,
    "homeTeam": homeTeam->{
        _id,
        name,
        "logo": logo.asset->url,
    },
    "awayTeam": awayTeam->{
        _id,
        name,
        "logo": logo.asset->url,
    },
    stats,
    events,
    status,
    category,
}`

export const fetchMatchByIdQuery = (id: string) => groq`*[_type == "match" && _id == "${id}"]{
    _id,
    date,
    "homeTeam": homeTeam->{
        _id,
        name,
        "logo": logo.asset->url,
        players[]->{
            _id,
            displayName,
            fullName,
            position,
            "profile": profile.asset->url,
            number,
        },
    },
    "awayTeam": awayTeam->{
        _id,
        name,
        "logo": logo.asset->url,
        players[]->{
            _id,
            displayName,
            fullName,
            position,
            "profile": profile.asset->url,
            number,
        },
    },
    stats,
    events,
    status,
    category,
}`