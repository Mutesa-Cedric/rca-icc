// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import {getDocumentNodeWithViews} from './plugins/views-in-schema/documentNodeWithViews'

export const getDefaultDocumentNode = getDocumentNodeWithViews
const excludedDocumentTypes = ['media.tag', 'link']

export default () =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(
        (listItem) => !excludedDocumentTypes.includes(listItem.getId())
      ),
    ])
