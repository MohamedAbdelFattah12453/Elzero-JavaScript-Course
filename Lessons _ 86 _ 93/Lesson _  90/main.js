/*
    DOM [Create Elemnets]
    - Practice Product With Heading And Paragraph
*/

for (let i = 1; i <= 100; i++) {
    let myMainElement = document.createElement("div");
    let myHeading = document.createElement("h2");
    let myParagraph = document.createElement("p");
    let myHeadingText = document.createTextNode(`Product Title ${i}`);
    let myParagraphText = document.createTextNode(`Product Description ${i} `);
    myMainElement.className = "Product";

    // Div Formatting
    myMainElement.style.backgroundColor = "#f9f9f9";
    myMainElement.style.border = "2px solid #e0e0e0";
    myMainElement.style.padding = "20px";
    myMainElement.style.margin = "15px auto";
    myMainElement.style.borderRadius = "8px";
    myMainElement.style.maxWidth = "400px";
    myMainElement.style.fontFamily = "Arial, sans-serif";
    myMainElement.style.textAlign = "center";
    // H2 Formatting
    myHeading.style.color = "#2c3e50";
    myHeading.style.margin = "0 0 10px 0";
    // Paragraph Formatting
    myParagraph.style.color = "#7f8c8d";
    myParagraph.style.margin = "0";
    // Append Heading Text
    myHeading.appendChild(myHeadingText);

    // Append Heading To Main Element
    myMainElement.appendChild(myHeading);

    // Add Paragraph To Main Element
    myMainElement.appendChild(myParagraph);

    // Add Paragraph Text
    myParagraph.appendChild(myParagraphText);

    document.body.appendChild(myMainElement);
}

