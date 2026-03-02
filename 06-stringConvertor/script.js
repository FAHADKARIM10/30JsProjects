const input = document.querySelector("input");

const upperCaseOutput = document.querySelector("#uppercase span");
const lowerCaseOutput = document.querySelector("#lowercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");



function capitalizeString(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}


function normalizeString(str) {
  return str.trim().replace(/\s+/g, " ");
}



function toCamelCase(str) {
  const words = normalizeString(str)
    .toLowerCase()
    .split(" ");

  return words
    .map((word, i) => (i === 0 ? word : capitalizeString(word)))
    .join("");
}



function toPascalCase(str) {
  const words = normalizeString(str)
    .toLowerCase()
    .split(" ");

  return words
    .map(word => capitalizeString(word))
    .join("");
}



function toSnakeCase(str) {
  return normalizeString(str)
    .toLowerCase()
    .split(" ")
    .join("_");
}



function toKebabCase(str) {
  return normalizeString(str)
    .toLowerCase()
    .split(" ")
    .join("-");
}



function updateOutputs() {
  const value = input.value;

  upperCaseOutput.innerText = value.toUpperCase();
  lowerCaseOutput.innerText = value.toLowerCase();
  camelCaseOutput.innerText = toCamelCase(value);
  pascalCaseOutput.innerText = toPascalCase(value);
  snakeCaseOutput.innerText = toSnakeCase(value);
  kebabCaseOutput.innerText = toKebabCase(value);
  trimOutput.innerText = value.trim();
}


// Run once on load
updateOutputs();

// Update on typing
input.addEventListener("input", updateOutputs);