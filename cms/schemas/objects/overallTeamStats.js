export default {
    name: "overallTeamStats",
    title: "Overall Team Stats",
    type: "object",

    groups: [
        {
            title: "Football Team Stats",
            name: "footballTeamStats",
            options: { collapsible: true }
        },
        {
            title: "Basketball Team Stats",
            name: "basketballTeamStats",
            options: { collapsible: true }
        },
        {
            title: "General Team Stats (including basketball)",
            name: "generalTeamStats",
            options: { collapsible: true }
        }
    ],

    fields: [

        // general team stats
        {
            name: "matchesPlayed",
            title: "Matches Played",
            type: "number",
            group: "generalTeamStats"
        },
        {
            name: "matchesWon",
            title: "Matches Won",
            type: "number",
            group: "generalTeamStats"
        },
        {
            name: "matchesLost",
            title: "Matches Lost",
            type: "number",
            group: "generalTeamStats"
        },

        // football team stats
        {
            name: "goalsScored",
            title: "Goals Scored",
            type: "number",
            group: "footballTeamStats"
        },
        {
            name: "goalsConceded",
            title: "Goals Conceded",
            type: "number",
            group: "footballTeamStats"
        },
        {
            name: "points",
            title: "Points",
            type: "number",
            group: "footballTeamStats"
        },
        {
            name: "matchesDrawn",
            title: "Matches Drawn",
            type: "number",
            group: "footballTeamStats"
        }

        // basketball team stats

    ]
}