const EMOJI_MAP = {
    ":joy:": "&#x1f602",
    ":shades:": "&#x1f60e",
    ":happy:": "&#x1f600"
}

function mapEmoji() {
    let iteration = 0;
    const elements = document.getElementsByClassName("emoji")
    setInterval(() => {
        if (iteration == Object.keys(EMOJI_MAP).length) {
            iteration = 0;
        }
        const emojiKeyName = Object.keys(EMOJI_MAP)[iteration];
        for (let el of elements) {
            el.innerHTML = `${EMOJI_MAP[emojiKeyName]}`
        }
        iteration++;
    }, 500);
}

export default mapEmoji;