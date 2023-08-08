// Scroll Reveal
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.welcome__img, .about__img`, {delay: 900})
sr.reveal(`.welcome__text-section, .about__text-section`, {delay: 600, origin:"top"})

sr.reveal(`.about__img`, {delay: 2000})
sr.reveal(`.about__text-section`, {delay: 2000, origin:"top"})

sr.reveal(`.service__content--btns`, {origin:"left"})
sr.reveal(`.service__item`, {origin:"top", interval: 100})

sr.reveal(`.accordion`, {origin:"left", interval: 100})
sr.reveal(`.prices__contact`, {origin:"right"})

sr.reveal(`.contact__img`, {origin:"left"})
// sr.reveal(`.drop-down__content`, {origin:"right"})

// Scroll Up
// function scrollUp() {
//     const scrollUp = document.getElementById("scroll-up");
//     if(this.scrollY >= 200) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
// }
// window.addEventListener("scroll", scrollUp)

const navButton = document.querySelector(".nav-button")
const navigationList = document.querySelector(".mobile-nav")
const body = document.body

navButton.addEventListener("click", function (event) {
  event.stopPropagation()
  navigationList.classList.toggle("mobile-nav-active")
  navButton.classList.toggle("nav-button-close")
  body.classList.toggle("no-scroll")
})

window.addEventListener("click", function() {
  if (body.classList.contains("no-scroll")) {
    navigationList.classList.toggle("mobile-nav-active")
    navButton.classList.toggle("nav-button-close")
    body.classList.toggle("no-scroll")
  }
})

navigationList.addEventListener("click", function (event) {
  event.stopPropagation()
})

// Service Card Blur
const btns = document.querySelector(".service__content--btns")
const gardenCards = document.querySelectorAll(".service__item.garden")
const plantingCards = document.querySelectorAll(".service__item.planting")
const lawnCards = document.querySelectorAll(".service__item.lawn")

let btnsArray = []

btns.addEventListener("click",  event => {
    if (event.target.classList.contains("garden")) {

      if (event.target.classList.contains("btn__active")) {

        event.target.classList.replace("btn__active", "service__btn")

        if(btnsArray.length != 1) {
          btnsArray = btnsArray.filter(btn => btn !== "garden");

          gardenCards.forEach(element => element.classList.add("item-blur"));

        } else {
          btnsArray = btnsArray.filter(btn => btn !== "garden");

          gardenCards.forEach(element => element.classList.remove("item-blur"));
          plantingCards.forEach(element => element.classList.remove("item-blur"));
          lawnCards.forEach(element => element.classList.remove("item-blur"));
        }

      } else {
        if (btnsArray.length <2) {
          btnsArray.push("garden")
          event.target.classList.replace("service__btn", "btn__active")
          gardenCards.forEach(element => element.classList.remove("item-blur"));
          plantingCards.forEach(element => element.classList.remove("item-blur"));
          lawnCards.forEach(element => element.classList.remove("item-blur"));

          if (!btnsArray.includes("planting")) {
            plantingCards.forEach(element => element.classList.add("item-blur"));
          }

          if (!btnsArray.includes("lawn")) {
            lawnCards.forEach(element => element.classList.add("item-blur"));
          }
        }
      }

    } else if (event.target.classList.contains("lawn")) {

      if (event.target.classList.contains("btn__active")) {

        event.target.classList.replace("btn__active", "service__btn")

        if(btnsArray.length != 1) {
          btnsArray = btnsArray.filter(btn => btn !== "lawn");

          lawnCards.forEach(element => element.classList.add("item-blur"));

        } else {
          btnsArray = btnsArray.filter(btn => btn !== "lawn");

          gardenCards.forEach(element => element.classList.remove("item-blur"));
          plantingCards.forEach(element => element.classList.remove("item-blur"));
          lawnCards.forEach(element => element.classList.remove("item-blur"));
        }
      } else {
        if (btnsArray.length <2) {

          btnsArray.push("lawn")
          event.target.classList.replace("service__btn", "btn__active")
          lawnCards.forEach(element => element.classList.remove("item-blur"));
          gardenCards.forEach(element => element.classList.remove("item-blur"));
          plantingCards.forEach(element => element.classList.remove("item-blur"));

          if (!btnsArray.includes("planting")) {
            plantingCards.forEach(element => element.classList.add("item-blur"));
          }

          if (!btnsArray.includes("garden")) {
            gardenCards.forEach(element => element.classList.add("item-blur"));
          }
        }
      }

    } else if (event.target.classList.contains("planting")) {

      if (event.target.classList.contains("btn__active")) {
        event.target.classList.replace("btn__active", "service__btn")

        if(btnsArray.length != 1) {
          btnsArray = btnsArray.filter(btn => btn !== "planting");

          plantingCards.forEach(element => element.classList.add("item-blur"));

        } else {
          btnsArray = btnsArray.filter(btn => btn !== "planting");

          gardenCards.forEach(element => element.classList.remove("item-blur"));
          plantingCards.forEach(element => element.classList.remove("item-blur"));
          lawnCards.forEach(element => element.classList.remove("item-blur"));
        }
      } else {

        if (btnsArray.length <2) {
          btnsArray.push("planting")
          event.target.classList.replace("service__btn", "btn__active")
          plantingCards.forEach(element => element.classList.remove("item-blur"));
          gardenCards.forEach(element => element.classList.remove("item-blur"));
          lawnCards.forEach(element => element.classList.remove("item-blur"));

          if (!btnsArray.includes("lawn")) {
            lawnCards.forEach(element => element.classList.add("item-blur"));
          }

          if (!btnsArray.includes("garden")) {
            gardenCards.forEach(element => element.classList.add("item-blur"));
          }
        }
      }
  }
})

// Prices Accordion
const accordionsBtns = document.querySelector(".prices__accordion--container")
const accordHiddens = document.querySelectorAll(".accordion")
const basicsHid = document.querySelector(".h-basics")
const standardHid = document.querySelector(".h-standard")
const proHid = document.querySelector(".h-pro")

accordionsBtns.addEventListener("click",event => {
  if (event.target.parentNode.classList.contains("basics")) {

    if (basicsHid.classList.contains("accordion--active")) {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
    } else {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
      basicsHid.classList.add("accordion--active")
    }

  } else if (event.target.parentNode.classList.contains("standard")) {

    if (standardHid.classList.contains("accordion--active")) {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
    } else {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
      standardHid.classList.add("accordion--active")
    }

  } else if (event.target.parentNode.classList.contains("pro")) {

    if (proHid.classList.contains("accordion--active")) {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
    } else {
      accordHiddens.forEach(hidden => hidden.classList.remove("accordion--active"))
      proHid.classList.add("accordion--active")
    }
  }
})

// Contact Dropdown
const btnDropdown = document.querySelector(".drop-down__content")
const dropdown = document.querySelector(".drop-down")


btnDropdown.addEventListener("click", event => {
  if (event.target.classList.contains("drop-down__content") || event.target.parentNode.classList.contains("drop-down__content") ) {
    dropdown.classList.toggle("drop-down__active")
  }
})

const citylist = document.querySelector(".drop-down__citylist")
const adressesCity = document.querySelector(".adresses__city")
const adressesPhone = document.querySelector(".adresses__phone")
const adressesOffice = document.querySelector(".adresses__office")
const dropdownTitle = document.querySelector(".drop-down__title")
const adresses = document.querySelector(".adresses")
const callBtn = document.querySelector(".call__btn")

citylist.addEventListener("click", event => {
  dropdown.classList.remove("drop-down__active")

  if (event.target.classList.contains("Canandaigua")) {
    adresses.classList.add("adresses--active")
    chosenCity = "Canandaigua"
    dropdownTitle.innerText = "Canandaigua, NY"

    adressesCity.innerText = "Canandaigua, NY"
    adressesPhone.innerText = "+1	585	393 0001"
    adressesOffice.innerText = "151 Charlotte Street"
    callBtn.setAttribute("href","tel:+1	585	393 0001")

  } else if (event.target.classList.contains("NewYork")) {
    adresses.classList.add("adresses--active")
    chosenCity = "New York"
    dropdownTitle.innerText = "New York City"

    adressesCity.innerText = "New York City"
    adressesPhone.innerText = "+1	212	456 0002"
    adressesOffice.innerText = "9 East 91st Street"
    callBtn.setAttribute("href","tel:+1	212	456 0002")


  } else if (event.target.classList.contains("Yonkers")) {
    adresses.classList.add("adresses--active")
    chosenCity = "Yonkers"
    dropdownTitle.innerText = "Yonkers, NY"

    adressesCity.innerText = "Yonkers, NY"
    adressesPhone.innerText = "+1	914	678 0003"
    adressesOffice.innerText = "511 Warburton Ave"
    callBtn.setAttribute("href","tel:+1	914	678 0003")


  } else if (event.target.classList.contains("Sherrill")) {
    adresses.classList.add("adresses--active")
    chosenCity = "Sherrill"
    dropdownTitle.innerText = "Sherrill, NY"

    adressesCity.innerText = "Sherrill, NY"
    adressesPhone.innerText = "+1	315	908 0004"
    adressesOffice.innerText = "14 WEST Noyes BLVD"
    callBtn.setAttribute("href","tel:+1	315	908 0004")


  }
})


console.log("1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service [50/50]\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах [50/50]\n3. В разделе contacts реализован select с выбором городов [25/25]")
console.log("100/100")
