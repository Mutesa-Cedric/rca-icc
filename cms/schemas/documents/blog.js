import S from '@sanity/desk-tool/structure-builder'
import { DocumentIcon, EyeOpenIcon } from "@sanity/icons"
import { JsonView } from '../../components/views/JsonView'
import { SocialMediaView } from '../../components/views/SocialMediaView'
import { CharacterCount } from '../../components/inputs/CharacterCount'
export default {
    name: 'blog',
    title: 'Blog',
    type: "document",
    preview: {
        select: {
            title: 'headline',
            subtitle: "contributor",
            media: "cover"
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title: title,
                media: media,
                subtitle: `Written by: ${subtitle ? subtitle : 'unknown'}`
            }
        }
    },
    __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
    views: [
        S.view.component(SocialMediaView).title('Preview').icon(EyeOpenIcon),
        S.view.component(JsonView).title('JSON').icon(DocumentIcon),
    ],
    groups: [
        {
            name: "general",
            title: "General",
        },
        {
            name: "seo",
            title: "SEO & metadata"
        },
        {
            name: "blogData",
            title: "Blog Data"
        }
    ],
    fields: [

        // general
        {
            name: "topic",
            title: "Topic",
            type: "reference",
            to: [{ type: "topics" }],
            description: "Select a topic for this blog post.If you can't find the topic you need, create new one.",
            validation: Rule => Rule.required().warning(
                "You can't create a blog without a topic"
            ),
            group: "general"
        },
        // general


        // seo

        {
            name: "title",
            title: "Title",
            type: "string",
            description: "Provide Title for your blog. This will be used for SEO purposes.",
            validation: (Rule) => Rule.required().min(3).max(60).warning(
                "The title field is required and must have (3) minimum characters and (60) maximum characters!"
            ),
            group: "seo"
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            description: "Describe your blog. This will be used for SEO purposes.",
            validation: (Rule) => Rule.required().min(3).max(200).warning(
                "The description field is required and must have (3) minimum characters and (200) maximum characters!"
            ),
            group: "seo"
        },
        {
            name: 'ogimage',
            description:
                'This image is used in three different use cases and sizes (Twitter, Twitter desktop and Facebook banner). Edit to adjust the crop & hotspot of the image. Hit the 👉 Preview 👈 tab to see how it performs in different sizes. Recommended size: 1200x630px.',
            title: 'OG Image',
            type: 'image',
            validation: Rule => Rule.required().warning(
                "The image field is required!"
            ),
            options: {
                hotspot: true,
            },
            group: 'seo',
        },

        {
            name: "datePublished",
            title: "Date Published",
            type: "date",
            description: "This is the date when The blog was published",
            validation: Rule => Rule.required().warning(
                "You must provide date"
            ),
            group: ["general"]
        },

        // seo

        // blogData

        {
            name: "headline",
            title: "Headline",
            type: "string",
            description: 'Provide headline for your blog',
            inputComponent: CharacterCount,
            validation: (Rule) => Rule.required().max(40).warning(
                "You must provide heading with (40) maximum characters"
            ),
            group: "blogData"
        },
        {
            name: "cover",
            title: "Cover",
            type: "image",
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                    title: 'Alt text',
                    options: {
                        isHighlighted: true, // <-- make this field easily accessible
                    },
                },
            ],
            description: "provide cover image for your blog",
            validation: Rule => Rule.required().warning(
                "You must provide an cover image!"
            ),
            group: "blogData"
        },
        {
            name: "contributor",
            title: "Contributor",
            type: "string",
            inputComponent: CharacterCount,
            validation: Rule => Rule.max(40).warning(
                "Contributor name is required and must not be longer than (40) characters!"
            ),
            group: "blogData"
        },
        {
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            inputComponent: CharacterCount,
            validation: Rule => Rule.required().max(200),
            group: "blogData"
        },
        {
            name: "post",
            title: "Post",
            type: "array",
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image'
                }
            ],
            group: "blogData"
        },
        {
            name: "keywords",
            title: "Keywords",
            type: "array",
            of: [
                { type: "string" }
            ],
            group: ["seo", "blogData"]
        },

        // blogData

    ]
}