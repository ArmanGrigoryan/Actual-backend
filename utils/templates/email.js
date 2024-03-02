const EmailTemplate = ({
    title = "",
    heading = "",
    description = "",
    detailedDescription = "",
    detailedDescription2 = "",
    detailedDescription3 = "",
}) => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>NodeMailer Email Template</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>
                body, html {
                    margin: 0;
                    padding: 0;
                }
                * {
                    font-family: "Nunito", sans-serif;
                }
                .container {
                    max-width: 100%;
                    height: 100%;
                }
                .email {
                    max-width: 100%;
                    margin: 0 auto;
                    background-color: #fff;
                }
                .email-header {
                    padding-bottom: 20px;
                    background-color: #151515;
                    background-image: url('http://localhost:3000/public/media/slider/bg-2.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    color: #fff;
                    text-align: center;
                }
                .text-center {
                    text-align: center;
                }
                .font-10 {
                    font-size: 10px;
                }
                .header {
                    padding: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .header i {
                    font-size: 24px;
                    color: #fff !important;
                }
                h2 {
                    color: #fff !important;
                    margin: 30px 0;
                }
                .email-body {
                    padding: 0 20px 20px;
                }
                .email-footer {
                    color: #fff;
                    padding: 20px;
                    text-align: center;
                    background-color: #2b467d;
                    background-image: url('http://localhost:3000/public/media/bg/footer-bg.png');
                    background-size: cover;
                }
                .email-footer > .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 20px;
                }
                .cursor-pointer {
                    cursor: pointer;
                }
                .text-center {
                    text-align: center;
                }
                .position-static {
                    position: static;
                }
                .widget-title {
                    text-align: left;
                    margin-bottom: 25px;
                    position: relative;
                }
                .widget-title:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -5px;
                    height: 2px;
                    width: 40px;
                    background: #ff5421;
                }
                ul, li, a {
                    font-size: 14px;
                    color: #fff;
                    text-decoration: none;
                }
                a.black-color {
                    color: #000;
                    font-weight: 700;
                }
                i {
                    color: #ff5421 !important;
                }
                ul {
                    margin: 0px;
                    padding: 0px;
                    list-style: none;
                }
                li {
                    display: flex;
                    gap: 15px;
                    margin-bottom: 10px;
                }
                .rounded-12 {
                    border-radius: 12px;
                }
                .height-max {
                    height: max-content;
                }
                .flex {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-top: 20px;
                }
                .px-10 {
                    padding-left: 10px;
                    padding-right: 10px;
                }
                @media (max-width: 540px) {
                    .email-header h2 {
                        padding: 0 30px;
                    }
                    .email-body {
                        padding: 0 10px 10px 20px;
                    }
                    .email-footer {
                        margin: 0;
                        padding-left: 10px;
                    }
                    .email-footer > .container {
                        margin: 0;
                        padding: 0;
                        padding-left: 10px;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 30px;
                    }
                }
            </style>
        </head>
        <body>
        <div class="container">
            <div class="email">
                <div class="email-header">
                    <div class="header">
                        <div>
                            <a href="https://actualhr.am" target="_blank">
                                <img class="rounded-12" width="170" height="55" src="http://localhost:3000/public/media/logo/logo-light.png" />
                            </a>
                        </div>
                        <div>
                            <a href="https://actualhr.am" target="_blank">
                                <i class="fa fa-bars"></i>
                            </a>
                        </div>
                    </div>
                    <h2>Ակտուալը Ողջունում է Ձեզ!</h2>
                </div>
                <div class="email-body">
                    <h1>${title}</h1>
                    <h2>${heading}</h2>
                    <p>${description}</p>
                    <p>
                        Գրանցվեք դասընթացներին, մասնագիտացեք ինչպես Մարդկային ռեսուրսների կառավարման, այնպես էլ այլ ոլորտներում՝ <a class='black-color' href='https://actualhr.am/course' target='_blank'>Այստեղ</a>։ Զարգացրեք Ձեր բիզնես մտածելակերպը, հետևեք մասնագիտական աճին։
                    </p>
                    <p>${detailedDescription}</p>
                    <p>${detailedDescription2}</p>
                    <p>${detailedDescription3}</p>
                    <p>Շնորհակալ ենք մեզ հետևելու և մեր կողքին լինելու համար։</p>
                    <p>Սիրով՝ Ակտուալ թիմ</p>
                </div>
                
                <div class="email-footer height-max">
                    <div class="container height-max">
                        <div>
                            <h3 class="widget-title">Հասցե</h3>
                            <ul class="address-widget">
                                <li>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div class="desc">Խանջյան 19, Երևան</div>
                                </li>
                                <li>
                                    <i class="fa-solid fa-phone"></i>
                                    <div class="desc"><a href="tel:(+374)44-30-30-28">(+374) 44-30-30-28</a></div>
                                </li>
                                <li>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    <div class="desc">
                                        <a href="mailto:support@actualhr.am?subject=Հետադարձ կապ">support@actualhr.am</a>
                                    </div>
                                </li>
                                <li>
                                    <ul class="flex">
                                        <li>
                                            <a href="https://www.facebook.com/ActualHPartner" class="cursor-pointer" target="_blank">
                                                <i class="fa-brands fa-facebook position-static"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/actual_hrpartner/" class="cursor-pointer" target="_blank">
                                                <i class="fa-brands fa-instagram position-static"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://t.me/actual_hragency" class="cursor-pointer" target="_blank">
                                                <i class="fa-brands fa-telegram position-static"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/@ActualHRPartner" class="cursor-pointer" target="_blank">
                                                <i class="fa-brands fa-youtube position-static"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <div class="text-center">
                                <p class="text-center font-10">Բոլոր իրավունքները պաշտպանված են  2024թ</p>
                            </div>
                        </div>

                        // <div class="rounded-12">
                        //     <iframe
                        //         title="Map"
                        //         class="rounded-12" 
                        //         width="100%" 
                        //         height="250px"
                        //         frameBorder="0" 
                        //         scrolling="no" 
                        //         src="https://maps.google.com/maps?width=530&amp;height=530&amp;hl=en&amp;q=Khanjyan 19&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        //     />
                        // </div>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </html>
    `;
}

module.exports = EmailTemplate;