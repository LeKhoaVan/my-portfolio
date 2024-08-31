// click of menu 
let menuIttem = ["m-header", "m-about", "m-education", "m-skill", "m-experience", "m-project"];
let menuLinks = menuIttem.map(item => document.querySelector(`.${item} a`));

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(l => {
            l.removeAttribute("class");
        });

        link.setAttribute("class", "active");
    })
});
// end click of menu



//scroll and station menu
document.querySelector(".portfolio .portfolio__container .container__body .content").addEventListener('scroll', function () {
    const sections = [
        { element: document.querySelector('.content__header').getBoundingClientRect(), menu: document.querySelector('.m-header a') },
        { element: document.querySelector('.content__about').getBoundingClientRect(), menu: document.querySelector('.m-about a') },
        { element: document.querySelector('.content__education').getBoundingClientRect(), menu: document.querySelector('.m-education a') },
        { element: document.querySelector('.content__skill').getBoundingClientRect(), menu: document.querySelector('.m-skill a') },
        { element: document.querySelector('.content__experience').getBoundingClientRect(), menu: document.querySelector('.m-experience a') },
        { element: document.querySelector('.content__project').getBoundingClientRect(), menu: document.querySelector('.m-project a') },
        { element: document.querySelector('.content__footer').getBoundingClientRect(), menu: document.querySelector('.m-project a') }
    ];

    sections.forEach(({ menu }) => menu.classList.remove("active"));

    // menuLinks.forEach(link => link.classList.remove("active"));

    if (sections[0].element.top >= -window.innerHeight / 2) {
        sections[0].menu.classList.add("active");
    } else if (sections[1].element.top >= -window.innerHeight / 2) {
        sections[1].menu.classList.add("active");
    } else if (sections[2].element.top >= -window.innerHeight / 6) {
        sections[2].menu.classList.add("active");
    } else if (sections[3].element.top >= -window.innerHeight / 2) {
        sections[3].menu.classList.add("active");
    } else if (sections[4].element.top >= -window.innerHeight / 2) {
        sections[4].menu.classList.add("active");
    } else if (sections[5].element.top >= -window.innerHeight / 2) {
        sections[5].menu.classList.add("active");
    } else if (sections[6].element.top >= -window.innerHeight / 2) {
        sections[6].menu.classList.add("active");
    } else {
        sections[6].menu.classList.add("active");
    }
});
//end scroll and station menu


//  send email 
document.querySelector(".contact .icon-send-mail").addEventListener("click", function () {
    const email = "lekhoavan325802@gmail.com";

    // Tạo liên kết mailto
    const mailtoLink = `mailto:${email}`;

    // Mở trình soạn email
    window.location.href = mailtoLink;
});
//  end send email 