// const form = document.getElementById("form")
const message = document.getElementById("response-text")
const submit = document.getElementById("submit-btn")


let providers = {
  airtel: /^(0701|0708|0802|0808|0901|0902|0812|0904|0907|0912)\d{7}$/,
  mtn: /^(0916|0912|0906|0903|0816|0814|0813|0810|0806|0803|0706|0703)\d{7}$/,
  glo: /^(0705|0817|0809|0805|0807|0905|0811|0815)\d{7}$/,
  etisalat: /^(0908|0909|0818|0817|0809|0818|)\d{7}$/
}


function checkCarrier() {
  submit.addEventListener("click", (e) => {
    e.preventDefault()

    let phoneNumber = document.getElementById("phone-number").value
    if (phoneNumber.match(providers.airtel)) {
      return message.innerHTML = `<span> Your network provider is  <img src="images/airtel.svg" alt="logo"> </span> `
    } else if (phoneNumber.match(providers.mtn)) {
      return message.innerHTML = `<span> Your network provider is  <img src="images/mtn.svg" alt="logo"> </span> `
    } else if (phoneNumber.match(providers.glo)) {
      return message.innerHTML = `<span> Your network provider is  <img src="images/glo.svg" alt="logo"> </span> `
    } else if (phoneNumber.match(providers.etisalat)) {
      return message.innerHTML = `<span> Your network provider is  <img src="images/etisalat.svg" alt="logo"> </span> `
    } else {
      return message.innerHTML = "We could not identify your number carrier, Plase make sure it's a Nigerian number"
    }
  })
}

checkCarrier();



function startApp() {

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //