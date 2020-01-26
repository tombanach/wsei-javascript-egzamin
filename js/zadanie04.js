const sampleClassElements = document.querySelectorAll('.sample_class');
const sampleElement = document.querySelector('#sample_id');

const getTagsOfElements = elements => Array.from(elements).map(({ tagName }) => tagName);
const getClassesOfElement = element => Array.from(element.classList);

console.log(getTagsOfElements(sampleClassElements));
console.log(getClassesOfElement(sampleElement));