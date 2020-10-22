// Extra small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)

// Medium devices (tablets, 768px and up)

// Large devices (desktops, 992px and up)

// Extra large devices (large desktops, 1200px and up)



export default{
    // up(){
    //     const sizes={
    //     }
    // }

    down(size){
        const sizes={
            xs:"576px",
            sm:"768px",
            lg:"1200px",
            md:"860px",
            home_xs:"600px",


        }
        return `@media (max-width: ${sizes[size]})`
    }
}