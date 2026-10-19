/*(function(){
    emailjs.init({
      publicKey: "3OtfxBRzGHCLwjLvF",
    });
 })();

function weiter() {
  var templateParams = {
    name: document.getElementById("vorname").value + " " + document.getElementById("nachname").value,
    notes: 'Check this out!',
    email: document.getElementById("email").value
  };

  var templateId = "template_r3p5bwm";
  var serviceId = "service_schatzkasse";

  emailjs.send(serviceId, templateId, templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}*/