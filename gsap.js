gsap.registerPlugin(ScrollTrigger);


let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: "top 70%",
            end: "bottom 60%",
            markers: false,
            scrub: 1
        }
    })
    .to('.logo', { duration: 5, scale: "1.2", y: 30, rotate: 360, ease: "elastic" })
    .to('h1', { display: "none" })
    .to('.hand', { duration: 4, y: 100, opacity: 1, scale: "1.2" })
    .to('.svg', { opacity: 1, ease: "bounce" })
    .to('.jason', { duration: 3, y: -300, borderRadius: "50%" })
    .to('h2', { duration: 4, y: 100, background: "transparent", textContent: "So I thought I would showcase animation in my Portfolio, I mean it ONLY makes sense", paddingRight: "15", paddingLeft: "15", fontFamily: "fantasy", fontSize: "1.5em" })
    .to('p', { textAlign: "center", y: -300, duration: 5, scale: "1.1", fontFamily: "fantasy", paddingRight: "15", paddingLeft: "15" })