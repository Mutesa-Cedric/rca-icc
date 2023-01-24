
export default {
    name: "matchTeamStats",
    title: "Match Team Stats",
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
        }
    ],

    fields: [

        // football team stats
        {
            name: "goals",
            title: "Goals",
            type: "number",
            validation: rule => rule.required(),
            description: "number of goals scored by the team",
            group: "footballTeamStats"
        },
        {
            name: "possession",
            title: "Possession",
            type: "number",
            validation: rule => rule.required(),
            description: "percentage of possession of the ball",
            group: "footballTeamStats"
        },
        {
            name: "shots",
            title: "Shots",
            type: "number",
            validation: rule => rule.required(),
            description: "number of shots taken by the team",
            group: "footballTeamStats"
        },
        {
            name: "shotsOnTarget",
            title: "Shots On Target",
            type: "number",
            validation: rule => rule.required(),
            description: "number of shots on target taken by the team",
            group: "footballTeamStats"
        },
        {
            name: "fouls",
            title: "Fouls",
            type: "number",
            validation: rule => rule.required(),
            description: "number of fouls committed by the team",
            group: "footballTeamStats"
        },
        {
            name: "corners",
            title: "Corners",
            type: "number",
            validation: rule => rule.required(),
            description: "number of corners taken by the team",
            group: "footballTeamStats"
        },
        {
            name: "offsides",
            title: "Offsides",
            type: "number",
            validation: rule => rule.required(),
            description: "number of offsides committed by the team",
            group: "footballTeamStats"
        },
        {
            name: "yellowCards",
            title: "Yellow Cards",
            type: "number",
            validation: rule => rule.required(),
            description: "number of yellow cards received by the team",
            group: "footballTeamStats"
        },
        {
            name: "redCards",
            title: "Red Cards",
            type: "number",
            validation: rule => rule.required(),
            description: "number of red cards received by the team",
            group: "footballTeamStats"
        },

        // basketball team stats
        {
            name: "points",
            title: "Points",
            type: "number",
            validation: rule => rule.required(),
            description: "number of points scored by the team",
            group: "basketballTeamStats"
        },
    ]
}