const fetch = require("node-fetch");
const jsdom = require("jsdom");

exports.getGroensels = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Max-Age", "3600");
  
  const rawHtml = await fetch("https://www.dewassendemaan.be/gemengde-biobox");
  const html = await rawHtml.text();

  const dom = new jsdom.JSDOM(html);
  const data = dom.window.document.querySelector(
    ".field-group__biobox-groenten"
  ).textContent;

  res.status(200).send(data);
};
