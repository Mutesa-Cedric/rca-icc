export default {
    name: "player",
    title: "Player",
    type: "document",
    preview: {
        select: {
            title: "displayName",
            subtitle: "fullName",
            media: "profile",
        },
        // use prepare to set title to displayName if provided else use full name.
        prepare({ title, subtitle, media }) {
            return {
                title: title || subtitle,
                subtitle: title ? null : subtitle,
                media: media,
            };
        }

    },
    groups: [
        {
            title: "Player Info",
            name: "playerInfo",
            options: { collapsible: true }
        },
        {
            title: "General Stats",
            name: "generalStats",
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

        // player info
        {
            name: "displayName",
            title: "Display Name",
            type: "string",
            description: "name of a player(like a username)",
            group: "playerInfo"
        },
        {
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a full name for this player"
            ),
            description: "all names of a player (this is not required)",
            group: "playerInfo"
        },
        {
            name: "profile",
            title: "Profile",
            type: "image",
            group: "playerInfo"
        },
        {
            name: "number",
            title: "Number",
            description: "a number that a player wears.",
            type: "number",
            group: "playerInfo"
        },
        {
            name: "categories",
            title: "Categories",
            type: "array",
            description: "categories where a player belongs to. ex: football, basketball, etc",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Football", value: "football" },
                    { title: "Basketball", value: "basketball" },
                    { title: "Volleyball", value: "volleyball" },
                    { title: "PingPong", value: "pingpong" },
                ]
            },
            validation: rule => rule.required().min(1),
            group: "playerInfo"
        },

        // football 
        {
            name: "position",
            title: "Position (you can select many if the player plays many games) ",
            description: "Position of a football player",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { title: "Goalkeeper", value: "goalkeeper" },
                    { title: "Defender", value: "defender" },
                    { title: "Midfielder", value: "midfielder" },
                    { title: "Forward", value: "forward" },
                    { title: "Power Forward (for Bacco)", value: "powerForward" },
                    { title: "Point Guard (for Bacco)", value: "pointGuard" },
                    { title: "Center (for Bacco)", value: "center" },
                    { title: "Shooting Guard (for Bacco)", value: "shootingGuard" },
                    { title: "Small Forward (for Bacco)", value: "smallForward" },
                ]
            },
            group: "playerInfo"
        },
        {
            name: "goals",
            title: "Goals",
            description: "Goals for a football player",
            type: "number",
            group: "footballPlayerStats",
            default: 0
        },
        {
            name: "footballAssists",
            title: "Football Assists",
            description: "Assists for a football player",
            type: "number",
            group: "footballPlayerStats",
            default: 0

        },
        {
            name: "redCards",
            title: "Red Cards",
            description: "number of red cards for a football player",
            type: "number",
            group: "footballPlayerStats",
            default: 0
        },
        {
            name: "yellowCards",
            title: "Yellow Cards",
            description: "Yellow cards for a football player",
            type: "number",
            group: "footballPlayerStats",
            default: 0
        },

        // basketball
        {
            name: "points",
            title: "Points",
            description: "Points for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        },
        {
            name: "rebounds",
            title: "Rebounds",
            description: "Rebounds for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        },
        {
            name: "basketballAssists",
            title: "Basketball Assists",
            description: "Assists for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        },
        {
            name: "steals",
            title: "Steals",
            description: "Steals for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        },
        {
            name: "blocks",
            title: "Blocks",
            description: "Blocks for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        },
        {
            name: "fouls",
            title: "Fouls",
            description: "Fouls for a basketball player",
            type: "number",
            group: "basketballPlayerStats",
            default: 0
        }
    ]
}