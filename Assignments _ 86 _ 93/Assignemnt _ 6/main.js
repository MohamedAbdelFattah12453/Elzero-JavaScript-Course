let Element = document.querySelector("form");
let Div = document.querySelector(".results");
let countInput = document.querySelector("[name='elements']");
let textInput = document.querySelector("[name='texts']");
let typeInput = document.querySelector("[name='type']");
let createBtn = document.querySelector("[type='submit");

createBtn.style.backgroundColor = "#007bff";
createBtn.style.color = "white";
createBtn.style.padding = "10px 20px";
createBtn.style.borderRadius = "4px";
createBtn.style.border = "none";
createBtn.style.cursor = "pointer";

createBtn.onmouseenter = function () {
    createBtn.style.backgroundColor = "#0056b3";
};

createBtn.onmouseleave = function () {
    createBtn.style.backgroundColor = "#007bff";
};

// 1. إمساك كل الحقول اللي واخدة كلاس input
let allInputs = document.querySelectorAll(".input");

// 2. عمل Loop سريعة لتطبيق التنسيقات عليهم كلهم مرة واحدة
allInputs.forEach(function (input) {
    // مساحة داخلية مريحة للكتابة
    input.style.padding = "10px";

    // حجم خط مناسب وواضح
    input.style.fontSize = "16px";

    // حواف دائرية خفيفة متناسقة مع باقي التصميم
    input.style.borderRadius = "4px";

    // تغيير لون وطبيعة الحواف الافتراضية للرمادي الفاتح الشيك
    input.style.border = "1px solid #ccc";

    // مسافة من اليمين والشمال عشان ميبقوش ملزقين في بعض
    input.style.margin = "0 5px";

    // شيل الخط اللي بيظهر لما تضغط جوه الحقل وخلي مكانه حدود زرقاء عند التركيز
    input.style.outline = "none";

    // تأثير مرئي عند الضغط والكتابة جوه الحقل (Focus)
    input.onfocus = function () {
        input.style.borderColor = "#007bff"; // نفس أزرق زرار الـ Create
        input.style.boxShadow = "0 0 5px rgba(0, 123, 255, 0.2)"; // ظل خفيف جداً
    };

    // لما المستخدم يشيل الماوس أو يخرج من الحقل يرجع لشغله الطبيعي
    input.onblur = function () {
        input.style.borderColor = "#ccc";
        input.style.boxShadow = "none";
    };
});

Element.onsubmit = function (event) {
    event.preventDefault();
    Div.innerHTML = "";

    for (let i = 1; i <= countInput.value; i++) {
        let newElement = document.createElement(typeInput.value);
        newElement.className = "box";
        newElement.id = `id-${i}`;
        newElement.title = "Element";
        newElement.textContent = textInput.value;

        // Css Formatting
        newElement.style.backgroundColor = "#ff5722";
        newElement.style.color = "white";
        newElement.style.borderRadius = "6px";
        newElement.style.padding = "10px 20px";
        newElement.style.textAlign = "center";
        newElement.style.margin = "10px 0";
        newElement.style.fontWeight = "bold";
        newElement.style.cursor = "pointer";

        Div.appendChild(newElement);
    }
}