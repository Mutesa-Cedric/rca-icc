
export default {
    name: "playerStats",
    title: "Player Stats",
    type: "document",

    preview: {
        select: {
            title: "name",
        },
    },
    groups: [
        {
            title: "Player Stats",
            name: "playerStats",
            options: { collapsible: true }
        },
        {
            title: "Football Player Stats",
            name: "footballPlayerStats",
            options: { collapsible: true }
        },
        {
            title: "Basketball Player Stats",
            name: "basketballPlayerStats",
            options: { collapsible: true }
        }
    ],
    fields: [
        
    ]
}