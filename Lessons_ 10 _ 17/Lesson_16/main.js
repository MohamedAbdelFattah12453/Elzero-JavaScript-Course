/*
 * Project: Elzero Web School - JavaScript Lessons
 * Lesson: [16: Lessons 10-17]
 * Description:"Understanding JavaScript data types and how to check them using the typeof operator."
 * Author: Mohamed Abdel Fattah
 * Date: 2026-02-8
 */
/*
    Template Literals (Tempalte Strings)
*/
let title = "Elzero"
let desc = "Elzero Web school"

let markUp = `
<div class="card">
<div class="child">
<h2>${title}</h2>
<p style= "color :red;">${desc}</p>
    </div>
</div>
`;


document.write(markUp);