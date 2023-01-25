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
            validation: Rule => Rule.required().min(3).max(300).warning("please provide a title for the match"),
            default: ({ document: { homeTeam, awayTeam } }) => `${homeTeam.name} vs ${awayTeam.name}`
        },
        {
            name: "banner",
            title: "Banner",
            type: "image",
            description: "the banner for the match",
            options: {
                hotspot: true,
            }
        },
        {
            name: "description",
            title: "Description",
            type: "text",
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
            name: "status",
            title: "Status",
            type: "matchStatus",
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
        },
        {
            name: "awayTeamLineup",
            title: "Away Team Lineup",
            type: "lineup",
        },
    ]
}