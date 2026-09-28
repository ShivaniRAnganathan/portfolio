const inferredTag = /\[\s*inferred\s*-\s*confirm with Shivani\s*\]/gi;
const htmlComment = /<!--[\s\S]*?-->/g;

/** Drop source notes. A stripped inference tag marks the sentence pending. */
export function cleanContent(text: string): { text: string; pending: boolean } {
  const pending = inferredTag.test(text);
  inferredTag.lastIndex = 0;
  const cleaned = text
    .replace(htmlComment, '')
    .replace(inferredTag, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/\s+([.,;:])/g, '$1')
    .trim();
  return { text: cleaned, pending };
}
