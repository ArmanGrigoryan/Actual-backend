module.exports= {
    verification:(email,activateCode)=>({
        from:`'${email}'<test@mail.ru>`,//sender address
        to:"test1@mail.ru,test2@mail.ru",//list of receivers
        subject:"Hello your verification",//subject line
        html:`
        <div style="text-aligan:center"
        <a href="http://localhost:3001?user/verification/${activateCode}">Cclick me</a>
        </div>
        `,
    })
}