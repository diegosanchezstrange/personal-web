
console.log("it works")

new Vue({
    el: "#navbar",
    data: {
        pages: [
            {text:"Home"},
            {text:"Projects"},
            {text:"Posts"}
        ]
    },
    delimiters: ["${","}"]
})