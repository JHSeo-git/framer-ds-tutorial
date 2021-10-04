/**
 * @see https://github.com/radix-ui/website/blob/main/lib/rehype-meta-attribute.js
 */

import visit from 'unist-util-visit'

var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

const rehypeMetaAttribute = (options = {}) => {
  return (tree: Parameters<typeof visit>[0]) => {
    visit(tree, 'element', onelement)
  }

  function onelement(node: any) {
    var match

    if (node.tagName === 'code' && node.data && node.data.meta) {
      re.lastIndex = 0 // Reset regex.

      while ((match = re.exec(node.data.meta))) {
        node.properties[match[1]] = match[2] || match[3] || match[4] || ''
      }
    }
  }
}

export default rehypeMetaAttribute
