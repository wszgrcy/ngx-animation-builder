import { animation, animate, keyframes, style } from "@angular/animations";

const bounce = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', offset: 1, }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', offset: 0.2, }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', offset: 0.53, }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', transform: 'translate3d(0, 0, 0)', offset: 0.8, }), style({ animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0)', offset: 0.4, }), style({ animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -30px, 0)', offset: 0.43, }), style({ animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)', transform: 'translate3d(0, -15px, 0)', offset: 0.7, }), style({ transform: 'translate3d(0, -4px, 0)', offset: 0.9, }),
    ])
], { params: { animate: '1000ms' } })

const flash = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '1', offset: 1, }), style({ opacity: '1', offset: 0.5, }), style({ opacity: '0', offset: 0.25, }), style({ opacity: '0', offset: 0.75, }),
    ])
], { params: { animate: '1000ms' } })

const pulse = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0, }), style({ transform: 'scale3d(1, 1, 1)', offset: 1, }), style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5, }),
    ])
], { params: { animate: '1000ms' } })

const rubberBand = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0, }), style({ transform: 'scale3d(1, 1, 1)', offset: 1, }), style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3, }), style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4, }), style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5, }), style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65, }), style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75, }),
    ])
], { params: { animate: '1000ms' } })

const shake = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }), style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.1, }), style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.3, }), style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.5, }), style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.7, }), style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.9, }), style({ transform: 'translate3d(10px, 0, 0)', offset: 0.2, }), style({ transform: 'translate3d(10px, 0, 0)', offset: 0.4, }), style({ transform: 'translate3d(10px, 0, 0)', offset: 0.6, }), style({ transform: 'translate3d(10px, 0, 0)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const headShake = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translateX(0)', offset: 0, }), style({ transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065, }), style({ transform: 'translateX(5px) rotateY(7deg)', offset: 0.185, }), style({ transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315, }), style({ transform: 'translateX(2px) rotateY(3deg)', offset: 0.435, }), style({ transform: 'translateX(0)', offset: 0.5, }),
    ])
], { params: { animate: '1000ms' } })

const swing = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1, }), style({ transform: 'rotate3d(0, 0, 1, 15deg)', offset: 0.2, }), style({ transform: 'rotate3d(0, 0, 1, -10deg)', offset: 0.4, }), style({ transform: 'rotate3d(0, 0, 1, 5deg)', offset: 0.6, }), style({ transform: 'rotate3d(0, 0, 1, -5deg)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const tada = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0, }), style({ transform: 'scale3d(1, 1, 1)', offset: 1, }), style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.1, }), style({ transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)', offset: 0.2, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.3, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.5, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.7, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)', offset: 0.9, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.4, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.6, }), style({ transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const wobble = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }), style({ transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)', offset: 0.15, }), style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: 0.3, }), style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: 0.45, }), style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: 0.6, }), style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: 0.75, }),
    ])
], { params: { animate: '1000ms' } })

const jello = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }), style({ transform: 'translate3d(0, 0, 0)', offset: 0.111, }), style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222, }), style({ transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.33299999999999996, }), style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444, }), style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555, }), style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.6659999999999999, }), style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777, }), style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888, }),
    ])
], { params: { animate: '1000ms' } })

const heartBeat = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'scale(1)', offset: 0, }), style({ transform: 'scale(1.3)', offset: 0.14, }), style({ transform: 'scale(1)', offset: 0.28, }), style({ transform: 'scale(1.3)', offset: 0.42, }), style({ transform: 'scale(1)', offset: 0.7, }),
    ])
], { params: { animate: '1000ms' } })

const bounceIn = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0, opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1, opacity: '1', transform: 'scale3d(1, 1, 1)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.2, transform: 'scale3d(1.1, 1.1, 1.1)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.4, transform: 'scale3d(0.9, 0.9, 0.9)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6, opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.8, transform: 'scale3d(0.97, 0.97, 0.97)', }),
    ])
], { params: { animate: '1000ms' } })

const bounceInDown = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0, opacity: '0', transform: 'translate3d(0, -3000px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1, transform: 'translate3d(0, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6, opacity: '1', transform: 'translate3d(0, 25px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75, transform: 'translate3d(0, -10px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9, transform: 'translate3d(0, 5px, 0)', }),
    ])
], { params: { animate: '1000ms' } })

const bounceInLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0, opacity: '0', transform: 'translate3d(-3000px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1, transform: 'translate3d(0, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6, opacity: '1', transform: 'translate3d(25px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75, transform: 'translate3d(-10px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9, transform: 'translate3d(5px, 0, 0)', }),
    ])
], { params: { animate: '1000ms' } })

const bounceInRight = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0, opacity: '0', transform: 'translate3d(3000px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1, transform: 'translate3d(0, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6, opacity: '1', transform: 'translate3d(-25px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75, transform: 'translate3d(10px, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9, transform: 'translate3d(-5px, 0, 0)', }),
    ])
], { params: { animate: '1000ms' } })

const bounceInUp = animation([
    animate('{{animate}}'), keyframes([
        style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0, opacity: '0', transform: 'translate3d(0, 3000px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 1, transform: 'translate3d(0, 0, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.6, opacity: '1', transform: 'translate3d(0, -20px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.75, transform: 'translate3d(0, 10px, 0)', }), style({ animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)', offset: 0.9, transform: 'translate3d(0, -5px, 0)', }),
    ])
], { params: { animate: '1000ms' } })

const bounceOut = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 1, }), style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.2, }), style({ opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5, }), style({ opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.55, }),
    ])
], { params: { animate: '1000ms' } })

const bounceOutDown = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1, }), style({ transform: 'translate3d(0, 10px, 0)', offset: 0.2, }), style({ opacity: '1', transform: 'translate3d(0, -20px, 0)', offset: 0.4, }), style({ opacity: '1', transform: 'translate3d(0, -20px, 0)', offset: 0.45, }),
    ])
], { params: { animate: '1000ms' } })

const bounceOutLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1, }), style({ opacity: '1', transform: 'translate3d(20px, 0, 0)', offset: 0.2, }),
    ])
], { params: { animate: '1000ms' } })

const bounceOutRight = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1, }), style({ opacity: '1', transform: 'translate3d(-20px, 0, 0)', offset: 0.2, }),
    ])
], { params: { animate: '1000ms' } })

const bounceOutUp = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1, }), style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2, }), style({ opacity: '1', transform: 'translate3d(0, 20px, 0)', offset: 0.4, }), style({ opacity: '1', transform: 'translate3d(0, 20px, 0)', offset: 0.45, }),
    ])
], { params: { animate: '1000ms' } })

const fadeIn = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', offset: 0, }), style({ opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInDown = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInDownBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInLeftBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInRight = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInRightBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInUp = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeInUpBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOut = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutDown = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(0, 100%, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutDownBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(0, 2000px, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(-100%, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutLeftBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(-2000px, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutRight = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(100%, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutRightBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(2000px, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutUp = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(0, -100%, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const fadeOutUpBig = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(0, -2000px, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const flip = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)', animationTimingFunction: 'ease-out', offset: 0, }), style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 1, }), style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)', animationTimingFunction: 'ease-out', offset: 0.4, }), style({ transform: 'perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)', animationTimingFunction: 'ease-in', offset: 0.5, }), style({ transform: 'perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)', animationTimingFunction: 'ease-in', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const flipInX = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', animationTimingFunction: 'ease-in', opacity: '0', offset: 0, }), style({ transform: 'perspective(400px)', offset: 1, }), style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', animationTimingFunction: 'ease-in', offset: 0.4, }), style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1', offset: 0.6, }), style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const flipInY = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', animationTimingFunction: 'ease-in', opacity: '0', offset: 0, }), style({ transform: 'perspective(400px)', offset: 1, }), style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)', animationTimingFunction: 'ease-in', offset: 0.4, }), style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1', offset: 0.6, }), style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const flipOutX = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'perspective(400px)', offset: 0, }), style({ transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0', offset: 1, }), style({ transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: '1', offset: 0.3, }),
    ])
], { params: { animate: '1000ms' } })

const flipOutY = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'perspective(400px)', offset: 0, }), style({ transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0', offset: 1, }), style({ transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: '1', offset: 0.3, }),
    ])
], { params: { animate: '1000ms' } })

const lightSpeedIn = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(100%, 0, 0) skewX(-30deg)', opacity: '0', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }), style({ transform: 'skewX(20deg)', opacity: '1', offset: 0.6, }), style({ transform: 'skewX(-5deg)', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const lightSpeedOut = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ transform: 'translate3d(100%, 0, 0) skewX(30deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateIn = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', opacity: '0', offset: 0, }), style({ transformOrigin: 'center', transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateInDownLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', offset: 0, }), style({ transformOrigin: 'left bottom', transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateInDownRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', offset: 0, }), style({ transformOrigin: 'right bottom', transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateInUpLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', offset: 0, }), style({ transformOrigin: 'left bottom', transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateInUpRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -90deg)', opacity: '0', offset: 0, }), style({ transformOrigin: 'right bottom', transform: 'translate3d(0, 0, 0)', opacity: '1', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateOut = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'center', opacity: '1', offset: 0, }), style({ transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateOutDownLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'left bottom', opacity: '1', offset: 0, }), style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateOutDownRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'right bottom', opacity: '1', offset: 0, }), style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateOutUpLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'left bottom', opacity: '1', offset: 0, }), style({ transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rotateOutUpRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'right bottom', opacity: '1', offset: 0, }), style({ transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 90deg)', opacity: '0', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const hinge = animation([
    animate('{{animate}}'), keyframes([
        style({ transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0, }), style({ transform: 'translate3d(0, 700px, 0)', opacity: '0', offset: 1, }), style({ transform: 'rotate3d(0, 0, 1, 80deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0.2, }), style({ transform: 'rotate3d(0, 0, 1, 80deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', offset: 0.6, }), style({ transform: 'rotate3d(0, 0, 1, 60deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', opacity: '1', offset: 0.4, }), style({ transform: 'rotate3d(0, 0, 1, 60deg)', transformOrigin: 'top left', animationTimingFunction: 'ease-in-out', opacity: '1', offset: 0.8, }),
    ])
], { params: { animate: '1000ms' } })

const jackInTheBox = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale(0.1) rotate(30deg)', transformOrigin: 'center bottom', offset: 0, }), style({ opacity: '1', transform: 'scale(1)', offset: 1, }), style({ transform: 'rotate(-10deg)', offset: 0.5, }), style({ transform: 'rotate(3deg)', offset: 0.7, }),
    ])
], { params: { animate: '1000ms' } })

const rollIn = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', offset: 0, }), style({ opacity: '1', transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const rollOut = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', transform: 'translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const zoomIn = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0, }), style({ opacity: '1', offset: 0.5, }),
    ])
], { params: { animate: '1000ms' } })

const zoomInDown = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 0.6, }),
    ])
], { params: { animate: '1000ms' } })

const zoomInLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 0.6, }),
    ])
], { params: { animate: '1000ms' } })

const zoomInRight = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 0.6, }),
    ])
], { params: { animate: '1000ms' } })

const zoomInUp = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 0.6, }),
    ])
], { params: { animate: '1000ms' } })

const zoomOut = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '1', offset: 0, }), style({ opacity: '0', offset: 1, }), style({ opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0.5, }),
    ])
], { params: { animate: '1000ms' } })

const zoomOutDown = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)', transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0.4, }),
    ])
], { params: { animate: '1000ms' } })

const zoomOutLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale(0.1) translate3d(-2000px, 0, 0)', transformOrigin: 'left center', offset: 1, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)', offset: 0.4, }),
    ])
], { params: { animate: '1000ms' } })

const zoomOutRight = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale(0.1) translate3d(2000px, 0, 0)', transformOrigin: 'right center', offset: 1, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)', offset: 0.4, }),
    ])
], { params: { animate: '1000ms' } })

const zoomOutUp = animation([
    animate('{{animate}}'), keyframes([
        style({ opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)', transformOrigin: 'center bottom', animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1)', offset: 1, }), style({ opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)', animationTimingFunction: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', offset: 0.4, }),
    ])
], { params: { animate: '1000ms' } })

const slideInDown = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, -100%, 0)', visibility: 'visible', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideInLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideInRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(100%, 0, 0)', visibility: 'visible', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideInUp = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 100%, 0)', visibility: 'visible', offset: 0, }), style({ transform: 'translate3d(0, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideOutDown = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ visibility: 'hidden', transform: 'translate3d(0, 100%, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideOutLeft = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ visibility: 'hidden', transform: 'translate3d(-100%, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideOutRight = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ visibility: 'hidden', transform: 'translate3d(100%, 0, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })

const slideOutUp = animation([
    animate('{{animate}}'), keyframes([
        style({ transform: 'translate3d(0, 0, 0)', offset: 0, }), style({ visibility: 'hidden', transform: 'translate3d(0, -100%, 0)', offset: 1, }),
    ])
], { params: { animate: '1000ms' } })
