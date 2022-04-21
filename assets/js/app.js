import newTweet from "./TweetButton/TweetBtn.js";
import removeTweet from "./DeleteButton/DeleteBtn.js";


let tweetList = document.getElementById('tweet-list');
export default tweetList

function eventListeners() {
    let form = document.querySelector('#form')
    //form.addEventListener('submit', newTweet);
    form.addEventListener('submit', function (e){
        e.preventDefault();
        newTweet(this,tweetList)
    });

    tweetList.addEventListener('click', removeTweet);
}

eventListeners();



