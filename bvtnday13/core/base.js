const fs = require("fs");
class Base {
  render = (req, res, path, data = {}) => {
    fs.readFile(`./views/${path}.html`, "utf8", (err, viewContent) => {
      // viewContent = viewContent.replaceAll("{title}", data.title);
      const result = viewContent.match(/{.+?}/g);
      if (result.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");
          if (
            typeof data[itemKey] === "object" &&
            !Array.isArray(data[itemKey]) &&
            data[itemKey] !== null
          ) {
            viewContent = viewContent.replaceAll(item, data[itemKey]);
            let str = "";
            for (let i in data[itemKey]) {
              str += `<li>${data[itemKey][i]}</li>`;
            }
            viewContent = viewContent.replaceAll(itemKey, `${itemKey}:${str}`);
          }
          viewContent = viewContent.replaceAll(
            item,
            `${itemKey}:${data[itemKey]}`
          );
        }
      }
      res.end(viewContent); //Response Message Body
    });
  };
}
module.exports = Base;
