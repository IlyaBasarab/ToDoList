//import tweetList from "../app.js";

function newTweet(elem,tweetList) {
    // e.preventDefault();

    console.log(elem)
    console.log(tweetList)


    let myForm = elem


    let txt = myForm.elements[0].value

    const tweet = document.getElementById('tweet');

    //let txtTweet = tweet.value
    //console.log(txtTweet)

    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';

    const li = document.createElement('li');
    // li.textContent = tweet;
    li.innerText = txt
    li.appendChild(removeBtn);
    tweetList.appendChild(li);

}
export default newTweet