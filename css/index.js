function openWhatsApp(){
    window.open("https://api.whatsapp.com/send/?phone=541132871430&text=Hola gracias por comunicarte con Beautiful Woman");
}
const $btnSignIn=document.querySelector('.sign-in-btn'),
      $btnSignUp=document.querySelector('.sign-up-btn'),  
      $signUp=document.querySelector('.sign-up'),
      $signIn=document.querySelector('.sign-in');
document.addEventListener('click',e=>{
    if(e.target===$btnSignIn || e.target===$btnSignUp ){
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }

})