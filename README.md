NC News is a news app that I developed while studying on the Northcoders Bootcamp.

It can be found at https://coruscating-pixie-552827.netlify.app

It's a React app, styled with Tailwindcss, which calls an Express Node.js API, accessing a PostGres database.

How to use the app:

The home page provides a list of all the articles, with the most recent first.
From here you can open an article. Or you can filter the articles by topic, or sort them by title, author, date, votes or number of comments.

If you open an article, you will also see any comments on the article listed below it.
While viewing an article, you can upvote/downvote it and add comments. You can delete your own comments.


Back End:

The back end repo can be found at https://github.com/simongbarnes/be-nc-news


Running Locally:

The minimum version of Node required to run locally is v20/3/0

To run the project locally...

1) clone the front end repo

git clone https://github.com/simongbarnes/nc-news

2) open the nc-news directory

cd nc-news

3) install all the project dependencies

npm install

4) run the app

