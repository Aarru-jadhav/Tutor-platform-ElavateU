import { delay } from "motion"

export const slideup=(delay)=>{
    return{
        hidden:{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
}
export const slideright=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x:-100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
}
export const slideleft=(delay)=>{
    return{
        hidden:{
            opacity:0,
            x:100,
        },
        visible:{
            opacity:1,
            x:0,
            transition:{
                duration:1,
                delay:delay,
            }
        }
    }
}