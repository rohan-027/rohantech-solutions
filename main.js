(function () {
  var PHONE = "917396345795"; // WhatsApp number: country code + number, no + or spaces

  // Mobile menu
  var btn = document.getElementById("menuBtn");
  var nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // Contact form: opens WhatsApp with the message filled in
  var form = document.getElementById("quoteForm");
  var err = document.getElementById("formError");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var msg = form.msg.value.trim();
    if (!name || !phone || !msg) { err.hidden = false; return; }
    err.hidden = true;
    var text = "Hello RohanTech Solutions,\nName: " + name + "\nPhone: " + phone + "\nRequest: " + msg;
    window.open("https://wa.me/" + PHONE + "?text=" + encodeURIComponent(text), "_blank", "noopener");
    form.reset();
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
})();
