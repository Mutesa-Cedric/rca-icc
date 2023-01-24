export default {
    name: "match",
    title: "Match",
    type: "document",
    preview: {
        select: {
            title: "title",
        },
    },
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "title of the match",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a title for the match"
            )
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: rule => rule.required()
        },
        {
            name: "date",
            title: "Date",
            type: "datetime",
            description: "the date for the match",
            validation: rule => rule.required()
        },
        {
            name: "homeTeam",
            title: "Home Team",
            type: "reference",
            to: { type: "team" },
            validation: rule => rule.required()
        },
        {
            name: "awayTeam",
            title: "Away Team",
            type: "reference",
            to: { type: "team" },
            validation: rule => rule.required()
        },
        {
            name: "stats",
            title: "Match stats",
            type: "matchStats"
        },
        {
            name: "events",
            title: "Events",
            type: "array",
            of: [
                { type: "event" }
            ]
        },
        {
            name: "homeTeamLineup",
            title: "Home Team Lineup",
            type: "lineup",
            validation: rule => rule.required(),
        },
        {
            name: "awayTeamLineup",
            title: "Away Team Lineup",
            type: "lineup",
            validation: rule => rule.required(),
        },
    ]
}