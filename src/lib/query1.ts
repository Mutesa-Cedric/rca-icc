import { groq } from "next-sanity";
import { allPlayerFields } from "./fields";

export const AllPlayersStatsQuery = groq`*[_type == "team"]{
    _id,
    name,
    category,
    players[]->${allPlayerFields},
}`