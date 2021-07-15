console.log("🥕🌶🌽🍅🍆🥒🥔🥦🥬🍠");

const getGroensels = async () => {
  const oldData = localStorage.getItem("groensels");
  if (oldData) {
    document.getElementById("data").innerHTML = oldData;
  }
  const rawHtml = await fetch(
    "https://europe-west1-thomasmaclean.cloudfunctions.net/getGroensels"
  );
  let html = await rawHtml.text();
  html = html.replace(/\s\s+/g, "\n");

  html = html.split("Deze week").join("<h3>Deze week</h3>");
  html = html.split("Volgende week").join("<h3>Volgende week</h3>");
  localStorage.setItem("groensels", html);
  document.getElementById("data").innerHTML = html;
};

getGroensels();
