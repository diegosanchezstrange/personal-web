
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

new Vue({

    el: "#app",

    methods: {

        changeNavbarState : function()
        {
            console.log("ok");
            let nv = document.getElementById("navbar");
            nv.style.width = "250px"
        }

    },

    delimiters: ["${","}"]

})