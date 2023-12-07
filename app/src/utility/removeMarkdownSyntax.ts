const removeMarkdownSyntax = (content: string) => {
  const markdownSyntax =
    /([*_~`|\-]|#+\s|<br>|!\[.*?\]\(.*?\)|\[.*?\]\(.*?\))/g;
  return content.replace(markdownSyntax, "");
};

export default removeMarkdownSyntax;
