import React from 'react'
import PageHeader from "../components/page_header"

export default props => {
    return (
        <div>
        <PageHeader active={'music'} />
        <h2>Music</h2>
        <p>Make this more of a discography page with links to buy CDs + video embed (track samples should be on home page)</p>
        <div><label for="inTheCity">In the City:</label></div>
        <audio id="inTheCity" controls src="http://nebula.wsimg.com/788d768a30ec760f31e1cdc18418d0d8?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="rufus">Rufus:</label></div>
        <audio id="rufus" controls src="http://nebula.wsimg.com/ebddcff358e271a11c11063583e84812?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="so_you_will_go">So you will go:</label></div>
        <audio id="so_you_will_go" controls src="http://nebula.wsimg.com/4f3b90188c1be67b166e0b2314680e33?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="everything_but_the_blues">Everything but the blues:</label></div>
        <audio id="everything_but_the_blues" controls src="http://nebula.wsimg.com/ec629a8de6b9a19d0c77731866f64f42?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <div><label for="green_as_a_stone">Green as a stone:</label></div>
        <audio id="green_as_a_stone" controls src="http://nebula.wsimg.com/b12892e26eabc5c46c1cca41d531ab9a?AccessKeyId=04B75B702CB34F098443&disposition=0&alloworigin=1&type=audio">Your browser does not support the <code>audio</code> element.</audio>
        <label for="love_is_dumb">Love is Dumb music video:</label>
            <iframe title="love_is_dumb" id="love_is_dumb" width="420" height="315" src="https://www.youtube.com/embed/H3rwkCEij88" frameBorder="0" allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"} allowFullScreen></iframe>
        </div> 
    )
}