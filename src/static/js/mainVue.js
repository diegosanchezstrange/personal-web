let vNavbar = new Vue(
{
    el: "#container",
    data: 
    {
        visible: false,
        visibleStyle: 
        {
            padding: "15px",
            width: "250px"
        },
        pages: 
        [
            {
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
    methods: 
    {

        changeNavbarState() 
        {
           this.visible = !this.visible; 
           console.log("funciona");
        }

    },
    delimiters: ["${", "}"]
})