export default {
    name: "matchStatus",
    title: "Match Status",
    type: "object",
    fields: [
        {
            name: "elapsed",
            title: "Elapsed",
            type: "number",
            description: "elapsed time in minutes since the match started",
        },
        {
            name: "elapsedPlus",
            title: "Elapsed Plus",
            type: "number",
            description: "additional minutes to normal elapsed time. for displaying like",
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            description: "the status of the match",
            options: {
                list: [

                    // football
                    { title: "Not Started", value: "NS" },
                    { title: "First Half", value: "1H" },
                    { title: "Half Time", value: "HT" },
                    { title: "Second Half", value: "2H" },
                    { title: "Full Time", value: "FT" },
                    { title: "Extra Time", value: "ET" },
                    { title: "Penalties", value: "P" },

                    // basketball
                    { title: "First Quarter", value: "1Q" },
                    { title: "Second Quarter", value: "2Q" },
                    { title: "Third Quarter", value: "3Q" },
                    { title: "Fourth Quarter", value: "4Q" },
                    { title: "Overtime", value: "OT" },
                ]
            },
            validation: rule => rule.required(),
            default:"NS"
        }

    ]
}