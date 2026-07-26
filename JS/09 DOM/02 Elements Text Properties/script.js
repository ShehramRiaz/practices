const container = document.querySelector(".container");

console.log(container.innerHTML);
console.log(container.outerHTML);
console.log(container.innerText);
console.log(container.textContent);

container.innerHTML =
    `
<h1>This is Dynamic Heading</h1>
<p>This is Dynamic Paragraph</p>
<span style="display: none;">This is Dynamic hidden span</span>
`;

container.innerText =
    `
<h1>This is Dynamic Heading</h1>
<p>This is Dynamic Paragraph</p>
<span style="display: none;">This is Dynamic hidden span</span>
`;

container.textContent =
    `
<h1>This is Dynamic Heading</h1>
<p>This is Dynamic Paragraph</p>
<span style="display: none;">This is Dynamic hidden span</span>
`;

container.outerHTML = 
`
<section>
    <h2>This is section heading</h2>
</section>
`;