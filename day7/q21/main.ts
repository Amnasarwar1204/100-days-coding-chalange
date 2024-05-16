// let bookInfo :string[] = ["Quran","Allah","30"]

let bookInfo :{name : string; writer : string; chapters : string} = {
    name : "Quran",
    writer : "Allah",
    chapters : "30"
} 

console.log(`The holy book of muslims are: ${bookInfo.name}, written by ${bookInfo.writer}, and its has ${bookInfo.chapters} chapters`)