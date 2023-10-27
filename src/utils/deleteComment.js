import axios from "axios";

export default function deleteComment (commentId){

      return axios
        .delete(`https://nc-news-2d8c.onrender.com/api/comments/${commentId}/`)
    }