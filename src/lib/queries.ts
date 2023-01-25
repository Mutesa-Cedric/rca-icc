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

export const teamsStatsFootQuery = groq`*[_type == "team" && category == "football"]{}`

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

export const teamsBasketQuery = groq`*[_type == "team" && category == "basketball"]{
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
