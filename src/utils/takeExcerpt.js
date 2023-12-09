export default function takeExcerpt(string, charMax){

    if (string.length < charMax) {
        return string;
    }

    const excerpt = string.slice(0,charMax);

    const wordArray = excerpt.split(" ")

    const lastWordLength = wordArray[wordArray.length-1].length

    return excerpt.slice(0,(charMax - lastWordLength -1)) + "...";

}