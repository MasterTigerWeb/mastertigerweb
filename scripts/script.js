

//Carrossel de Depoimentos

const carrosselContainer = document.querySelector('.carrossel-container');
        let translateValue = 0;
        let itemWidth = 20;
      
        function moverParaEsquerda() {
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);

          if (isMobile) {
            itemWidth = 82;
          } else{
            itemWidth = 20;
          }
          if (translateValue < 0) {
          translateValue += itemWidth;
          carrosselContainer.style.transform = `translateX(${translateValue}%)`;
         }
        }
      
        function moverParaDireita() {
          const carrosselWidth = carrosselContainer.offsetWidth;
          const containerWidth = carrosselContainer.scrollWidth;
          let itemWidth = 82;
          
          // Verificar se é um dispositivo móvel
          const isMobile = /Mobi|Android/i.test(navigator.userAgent);
        
          if (isMobile) {
            if (containerWidth - translateValue > carrosselWidth) {
              console.log(translateValue);
              if (translateValue > -250) {
                translateValue -= itemWidth;
                carrosselContainer.style.transform = `translateX(${translateValue}%)`;
              }
            }
          } else {
            // Código para comportamento no desktop
            let itemWidth = 20;
            if (containerWidth - translateValue > carrosselWidth) {
              console.log(translateValue);
              if (translateValue > -80) {
                translateValue -= itemWidth;
                carrosselContainer.style.transform = `translateX(${translateValue}%)`;
              }
            }
          }
        }
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuIcon.addEventListener('click', function() {
  mobileMenuIcon.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});



//Função de Mandar Email para a Instituição

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_uupp9o9";
  const templateID = "template_r9vtvp2";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}