

import { extendTheme } from "@chakra-ui/react"

const customTheme = extendTheme({
    colors:{
        bande:{
            100:'#f7afc',
            900:'#f77070',
        },
        grey:{
            100:'#ff3fa',
        },
        blue:{
            100:'#0098ae'
        },
        red:{
            100:'#ff3d3d',
            200:'#f77070',
        },
     },
     fonts:{
         body:'Graphik Font',
         heading:'Graphik Font',

     },
     fontWeigths:{
         hairline:100,
         thin:200,
         ligth:300,
         normal:400,
         medium:500,
         semibold:600,
         bold:700,
         extrabold:800,
     }
 
})

export default customTheme;