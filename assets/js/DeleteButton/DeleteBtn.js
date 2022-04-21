function removeTweet(e) {

    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();
    }
}
export default removeTweet