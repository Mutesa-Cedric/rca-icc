export default {
    name: "matchStats",
    title: "Match Stats",
    type: "object",

    groups: [
        {
            title: "Football Match Stats",
            name: "footballMatchStats",
            options: { collapsible: true }
        },
        {
            title: "Basketball Match Stats",
            name: "basketballMatchStats",
            options: { collapsible: true }
        }
    ],

    fields: [
        {
            name: "homeTeamStats",
            title: "Home Team Stats",
            type: "matchTeamStats",
            validation: rule => rule.required()
        },
        {
            name: "awayTeamStats",
            title: "Away Team Stats",
            type: "matchTeamStats",
            validation: rule => rule.required()
        },
    ]
}