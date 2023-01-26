import { groq } from "next-sanity";
import { allPlayerFields } from "./fields";

export const AllPlayersStatsQuery = groq`*[_type == "team"]{
    _id,
    name,
    category,
    players[]->${allPlayerFields},
}`

export const fetchMatchDayTitleQuery = (title: string) => groq`*[_type == "matchDay" && title == "${title}"]{
    _id,
    title,
    category,
    description,
    date,
    "matches": matches[]->{
        _id,
        title,
        description,
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
        status,
        stats,
    },
}`