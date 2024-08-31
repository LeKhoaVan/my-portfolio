
//  send email 

document.querySelector(".contact .icon-send-mail").addEventListener("click", function () {
    const email = "lekhoavan325802@gmail.com";

    // Tạo liên kết mailto
    const mailtoLink = `mailto:${email}`;

    // Mở trình soạn email
    window.location.href = mailtoLink;
});

//  end send email 