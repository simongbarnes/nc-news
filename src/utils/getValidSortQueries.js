export default function getValidSortQueries () {

    return [
        { label: "newest first", column: "created_at", order: "DESC" },
        { label: "oldest first", column: "created_at", order: "ASC" },
        { label: "by title a-z", column: "title", order: "ASC" },
        { label: "by author a-z", column: "author", order: "ASC" },
        { label: "by votes", column: "votes", order: "DESC" },
        { label: "by comments", column: "comment_count", order: "DESC" },
      ];

}