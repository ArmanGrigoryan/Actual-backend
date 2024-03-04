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
            <title>Actual HR Partner</title>
        </head>
        <body style="padding:0; margin:0; font-size: 14px;">
            <div>
                <div>
                    <div style="min-height:250px; padding-bottom:20px; position:relative; background-size:cover; background-repeat:no-repeat; background-image:linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.35)), url('http://localhost:3000/public/media/slider/bg-2.jpg');">
                        <!-- <img 
                            style="position:absolute; top:0; left:0; right:0; bottom:0; width:100%; height:100%; object-fit:cover;"
                            src="http://localhost:3000/public/media/slider/bg-2.jpg" 
                            alt="bg" 
                        /> -->
                        <div style="position:relative; z-index:2;">
                            <div style="padding:20px; display:flex; justify-content:space-between; align-items:center;">
                                <div>
                                    <a href="https://actualhr.am" target="_blank">
                                        <img width="170" height="55" src="http://localhost:3000/public/media/logo/logo-light.png" />
                                    </a>
                                </div>
                                <div>
                                    <a href="https://actualhr.am" target="_blank">
                                        <img width="35" height="35" src="http://localhost:3000/public/media/logo/menu-bar.svg" />
                                    </a>
                                </div>
                            </div>
                            <h2 style="color:#fff !important; margin: 30px 0; font-size:20px; text-align:center;">Ակտուալը Ողջունում է Ձեզ!</h2>
                        </div>
                    </div>
                    <div style="padding: 0 10px 10px 20px;">
                        <h1>${title}</h1>
                        <p>${description}</p>
                        <p>
                            Գրանցվեք դասընթացներին, մասնագիտացեք ինչպես Մարդկային ռեսուրսների կառավարման, այնպես էլ այլ ոլորտներում՝ <a href='https://actualhr.am/course' target='_blank'>Այստեղ</a>։ Զարգացրեք Ձեր բիզնես մտածելակերպը, հետևեք մասնագիտական աճին։
                        </p>
                        <p>${detailedDescription}</p>
                        <p>${detailedDescription2}</p>
                        <p>${detailedDescription3}</p>
                        <p>Շնորհակալ ենք մեզ հետևելու և մեր կողքին լինելու համար։</p>
                        <p>Սիրով՝ Ակտուալ թիմ</p>
                    </div>

                    <div style="color:#fff !important; padding:20px; background-color:#2b467d; background-size:cover; background-image:url('http://localhost:3000/public/media/bg/footer-bg.png')">
                        <div>
                            <div>
                                <h3 style="display:inline-block; margin-bottom:20px; padding-bottom:5px; border-bottom:2px solid #ff5421;">Հասցե</h3>
                                <ul style="margin:0; padding:0 0 0 15px; list-style:none;">
                                    <li style="display:list-item; list-style:square outside none; margin-bottom:10px;">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <div>Խանջյան 19, Երևան</div>
                                    </li>
                                    <li style="display:list-item; list-style:square outside none; margin-bottom:10px;">
                                        <i class="fa-solid fa-phone"></i>
                                        <div><a style="color:#fff !important; text-decoration:none" href="tel:(+374)44-30-30-28">(+374) 44-30-30-28</a></div>
                                    </li>
                                    <li style="display:list-item; list-style:square outside none; margin-bottom:10px;">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <div><a style="color:#fff !important; text-decoration:none" href="mailto:support@actualhr.am?subject=Հետադարձ կապ">support@actualhr.am</a></div>
                                    </li>
                                    <li style="display:flex; gap:15px; margin-bottom:10px;">
                                        <ul style="margin:0; padding:0; list-style:none; display:flex; align-items:center; gap:20px; margin-top:20px;">
                                            <li style="display:flex; gap:15px; margin-bottom:10px;">
                                                <a href="https://www.facebook.com/ActualHPartner" target="_blank">
                                                    <i class="fa-brands fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li style="display:flex; gap:15px; margin-bottom:10px;">
                                                <a href="https://www.instagram.com/actual_hrpartner/" target="_blank">
                                                    <i class="fa-brands fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li style="display:flex; gap:15px; margin-bottom:10px;">
                                                <a href="https://t.me/actual_hragency" target="_blank">
                                                    <i class="fa-brands fa-telegram"></i>
                                                </a>
                                            </li>
                                            <li style="display:flex; gap:15px; margin-bottom:10px;">
                                                <a href="https://www.youtube.com/@ActualHRPartner" target="_blank">
                                                    <i class="fa-brands fa-youtube"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>

                                <div>
                                    <p style="text-align:center; font-size:10px;">Բոլոր իրավունքները պաշտպանված են  2024թ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;
}

module.exports = EmailTemplate;