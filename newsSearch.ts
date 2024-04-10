// Shortcut: command shift l
// Name: News Search
// Description: Search For a news article using newsapi.org then open it in your browser
import "@johnlindquist/kit";
const urlText = await arg("Open news page:");
let response =  await get ('https://newsapi.org/v2/everything?q=' + urlText + '&apiKey=6a7c096ac80e4a1c80fe79e871d0ebfb');
let url = await arg("Select Article", response.data.articles.map(({ title, url }) => {
    return {
        name: title,
        description: url,
        value: url
    };
}));
await $`open ${url}`;
