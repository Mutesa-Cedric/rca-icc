export default {
    name: "event",
    title: "Event",
    type: "document",

    preview: {
        select: {
            title: "name",
        },
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "name of the event",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a name for this event"
            )
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "Describe the event"
        },
        {
            title: "Time",
            name: "time",
            type: "number",
            description: "the time for the event (ex : a minute in a match)",
            validation: Rule => Rule.required().min(1).max(300).warning(
                "please provide a time for this event"
            )
        },
    ]
}