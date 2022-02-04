import addEmojiAnimationToNavLinks from "./interactions/mapEmoji";
import fs from "fs";

(function main() {
    function start() {
        addEmojiAnimationToNavLinks()
        fs.readFile('./lessons/array.ts', '', function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
        });
    }
    start()
})()

