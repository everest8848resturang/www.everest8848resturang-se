const I18N = {
  sv: {
    nav: { home:"HEM", menu:"MENY", gallery:"GALLERI", booking:"BOKA BORD", contact:"KONTAKT" },
    home: {
      welcome:"VÄLKOMMEN", restaurantBar:"RESTAURANG & BAR",
      heroText:"Smaker från Himalaya, en varm atmosfär och en meny skapad för att delas.",
      bookTable:"BOKA BORD", viewMenu:"SE MENY",
      ourStory:"VÅR HISTORIA", storyTitle:"Tradition, kvalitet och hjärta.",
      storyText1:"Vi kombinerar nepalesiska och indiska klassiker med utvalda rätter och en modern bar.",
      storyText2:"Hos oss handlar allt om upplevelsen — service, smak och stämning.",
      excellentRating:"Utmärkt betyg", yearsExperience:"ÅR ERFARENHET",
      whyChooseUs:"VARFÖR VÄLJA OSS", exceptionalExperience:"En enastående upplevelse",
      authenticFlavors:"Autentiska smaker", authenticFlavorsDesc:"Klassiska rätter tillagade med omsorg.",
      exclusiveBar:"Exklusiv bar", exclusiveBarDesc:"Drinkar, vin och utvalda favoriter.",
      warmAtmosphere:"Varm atmosfär", warmAtmosphereDesc:"Perfekt för familj, vänner och dejter.",
      reserveToday:"Reservera idag", reserveText:"Säkra din plats för en minnesvärd kväll.",
      bookNow:"BOKA NU",
      ourFavorites:"VÅRA FAVORITER", signatureDishes:"Signaturrätter",
      signatureText:"Några av våra mest älskade rätter.",
      from:"Från", momoDesc:"Saftiga dumplings med tomat-chutney.",
      chowmeinDesc:"Wokade nudlar med grönsaker och valfritt protein.",
      thaliDesc:"En komplett bricka med flera smaker.",
      salmonDesc:"Serveras med potatis, grönsaker och sås."
    },
    menu: {
      discover:"UPPTÄCK", ourMenu:"Vår Meny", menuText:"Välj en kategori och utforska våra rätter.",
      starterVeg:"Förrätt (Veg)", starterNonVeg:"Förrätt (Non-Veg)", bread:"Bröd",
      thali:"Thali", momoChowmein:"Momo/Chowmein", schnitzel:"Schnitzel",
      steaks:"Steaks", sides:"Tillbehör", drinks:"Drycker",
      spicy:"Stark", veg:"Veg", popular:"Populär",
      allergenNotice:"Allergener? Fråga personalen så hjälper vi dig."
    },
    booking:{
      title:"Boka Bord", text:"Fyll i uppgifterna så återkommer vi med bekräftelse.",
      name:"Namn", phone:"Telefon", date:"Datum", time:"Tid", guests:"Antal gäster", message:"Meddelande",
      submit:"Skicka bokning"
    },
    contact:{
      title:"Kontakt", text:"Hör av dig — vi svarar så snart vi kan.",
      name:"Namn", email:"E-post", message:"Meddelande", submit:"Skicka"
    },
    gallery:{ title:"Galleri", text:"Ett urval av vår atmosfär och rätter." },
    toast:{ sent:"Skickat! ✅ (demo)", required:"Fyll i alla obligatoriska fält." }
  },
  en: {
    nav: { home:"HOME", menu:"MENU", gallery:"GALLERY", booking:"BOOK", contact:"CONTACT" },
    home: {
      welcome:"WELCOME", restaurantBar:"RESTAURANT & BAR",
      heroText:"Himalayan flavors, a warm atmosphere, and a menu made for sharing.",
      bookTable:"BOOK A TABLE", viewMenu:"VIEW MENU",
      ourStory:"OUR STORY", storyTitle:"Tradition, quality and heart.",
      storyText1:"We blend Nepalese & Indian classics with selected dishes and a modern bar.",
      storyText2:"For us it’s all about the experience — service, flavor and ambience.",
      excellentRating:"Excellent rating", yearsExperience:"YEARS EXPERIENCE",
      whyChooseUs:"WHY CHOOSE US", exceptionalExperience:"An exceptional experience",
      authenticFlavors:"Authentic flavors", authenticFlavorsDesc:"Classic dishes made with care.",
      exclusiveBar:"Exclusive bar", exclusiveBarDesc:"Cocktails, wine and curated favorites.",
      warmAtmosphere:"Warm atmosphere", warmAtmosphereDesc:"Perfect for family, friends and dates.",
      reserveToday:"Reserve today", reserveText:"Secure your table for a memorable evening.",
      bookNow:"BOOK NOW",
      ourFavorites:"OUR FAVORITES", signatureDishes:"Signature dishes",
      signatureText:"Some of our most loved dishes.",
      from:"From", momoDesc:"Juicy dumplings with tomato chutney.",
      chowmeinDesc:"Wok noodles with veggies and your choice of protein.",
      thaliDesc:"A complete platter with multiple flavors.",
      salmonDesc:"Served with potatoes, veggies and sauce."
    },
    menu: {
      discover:"DISCOVER", ourMenu:"Our Menu", menuText:"Pick a category to explore our dishes.",
      starterVeg:"Starters (Veg)", starterNonVeg:"Starters (Non-Veg)", bread:"Bread",
      thali:"Thali", momoChowmein:"Momo/Chowmein", schnitzel:"Schnitzel",
      steaks:"Steaks", sides:"Sides", drinks:"Drinks",
      spicy:"Spicy", veg:"Veg", popular:"Popular",
      allergenNotice:"Allergens? Ask our staff and we’ll help."
    },
    booking:{
      title:"Book a Table", text:"Fill in the details and we’ll confirm shortly.",
      name:"Name", phone:"Phone", date:"Date", time:"Time", guests:"Guests", message:"Message",
      submit:"Send booking"
    },
    contact:{
      title:"Contact", text:"Reach out — we’ll reply as soon as possible.",
      name:"Name", email:"Email", message:"Message", submit:"Send"
    },
    gallery:{ title:"Gallery", text:"A selection of our ambience and dishes." },
    toast:{ sent:"Sent! ✅ (demo)", required:"Please fill all required fields." }
  }
};

function getLang() {
  return localStorage.getItem("lang") || "sv";
}
function setLang(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations();
}
function t(path){
  const lang = getLang();
  const parts = path.split(".");
  let cur = I18N[lang];
  for (const p of parts) cur = cur?.[p];
  return cur ?? path;
}

function applyTranslations(){
  document.documentElement.lang = getLang();
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
  });
  const langBtn = document.querySelector("#langBtn");
  if(langBtn) langBtn.querySelector("span").textContent = getLang().toUpperCase();
}

function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a=>{
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === path);
  });
}

function toast(msg){
  const el = document.querySelector("#toast");
  if(!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> el.classList.remove("show"), 2600);
}

function hookForms(){
  document.querySelectorAll("form[data-demo-submit='true']").forEach(form=>{
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const required = [...form.querySelectorAll("[required]")];
      const ok = required.every(i => String(i.value || "").trim().length > 0);
      if(!ok){ toast(t("toast.required")); return; }
      form.reset();
      toast(t("toast.sent"));
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();
  applyTranslations();

  const langBtn = document.querySelector("#langBtn");
  if(langBtn){
    langBtn.addEventListener("click", ()=>{
      setLang(getLang() === "sv" ? "en" : "sv");
    });
  }

  hookForms();
});
