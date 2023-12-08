export default function toMixedCase(string){
    if (string.length < 2){
        return string.toUpperCase()
    }
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}