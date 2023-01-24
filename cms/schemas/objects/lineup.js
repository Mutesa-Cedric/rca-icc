export default {
    name: "lineup",
    title: "Lineup",
    type: "object",

    groups: [
        {
            title: "Lineup Info",
            name: "lineupInfo",
            options: { collapsible: true }
        },
        {
            title: "Football Lineup",
            name: "footballLineup",
            options: { collapsible: true }
        },
        {
            title: "Basketball Lineup",
            name: "basketballLineup",
            options: { collapsible: true }
        }
    ],

    fields: [

        // football lineup
        {
            name: "formation",
            title: "Formation",
            type: "string",
            group: "footballLineup"
        },
        {
            name: "startingEleven",
            title: "Starting Eleven",
            type: "array",
            of: [{ type: "reference", to: { type: "player" } }],
            group: "footballLineup"
        },

        // basketball lineup
        {
            name: "startingFive",
            title: "Starting Five",
            type: "array",
            of: [{ type: "reference", to: { type: "player" } }],
            group: "basketballLineup"
        },
    ]
}