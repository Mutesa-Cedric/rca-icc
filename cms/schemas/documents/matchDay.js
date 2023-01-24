
export default {
    name: "matchDay",
    title: "Match Day",
    type: "document",
    preview: {
        select: {
            title: "name",
        },
    },
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "match day title. ex : matchday 1",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a name for the matchday"
            )
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "Describe the match day"
        },
        {
            name: "date",
            title: "Date",
            description: "the date for the match day",
            type: "date",   
            validation: rule => rule.required()
        },
        {
            name: "matches",
            title: "Matches",
            type: "array",
            validation: Rule => Rule.required().warning(
                "please provide matches which will take place on this matchday"
            ),
            of: [
                { type: "match" }
            ]
        }
    ]
}