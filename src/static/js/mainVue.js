let vNavbar = new Vue({
    el: "#mainNavbar",
    data: {
        pages: [{
                text: "Home"
            },
            {
                text: "Projects"
            },
            {
                text: "Posts"
            }
        ]
    },
    delimiters: ["${", "}"]
})