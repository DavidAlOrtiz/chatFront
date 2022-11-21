import {animateScroll} from 'react-scroll'

export const scrollBotton = (id) =>{
    animateScroll.scrollToBottom({
        containerId: id,
        duration:0,
    })
}

export const scrollBottonAnimated = (id) =>{
    animateScroll.scrollToBottom({
        containerId: id,
        duration:250,
    })
}