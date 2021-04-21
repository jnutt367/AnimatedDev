gsap.registerPlugin(ScrollTrigger);

gsap.to('h1', { duration: 2, color: "red", repeat: -1, textShadow: "2px 2px white" });
gsap.to('h2', { duration: 3, color: "black", textShadow: "1px 1px white", scale: "0.8", ease: "elastic", textContent: "As you scroll down this page will be transforming with the wonderful powers of GSAP3 animations" });
gsap.to('.curve', { guration: 5, y: -720, x: 100 })

let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger",
            start: "top 70%",
            end: "bottom 60%",
            markers: false,
            scrub: 1
        }
    })
    .to('body', { backgroundImage: "url(assets/main-img.png)", backgroundRepeat: "no-repeat" })
    .to('.logo', { duration: 5, scale: "1.2", y: 30, rotate: 360, ease: "elastic" })
    .to('h1', { display: "none" })
    .to('.hand', { duration: 4, y: 200, opacity: 1, scale: "1.2" })
    .to('.svg', { opacity: 1, ease: "bounce" })
    .to('.jason', { duration: 3, y: -300, borderRadius: "50%" })
    .to('h2', { duration: 4, y: 250, margin: "0", background: "transparent", textContent: "So I thought I would showcase animation in my Portfolio, I mean it ONLY makes sense", paddingRight: "15", paddingLeft: "15", fontFamily: "fantasy", fontSize: "1.5em" })
    .to('p', { textAlign: "center", y: -300, duration: 5, scale: "1.1", fontFamily: "fantasy", paddingRight: "15", paddingLeft: "15" })