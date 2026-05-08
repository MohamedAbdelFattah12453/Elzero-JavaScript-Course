function createSelectBox(StartYear, EndYear) {
    document.write(`<select>`)
    for (let i = StartYear; i <= EndYear; i++) {
        document.write(`<option value="${i}">${i} </option>`);
        console.log(`<option value="${i}">${i} </option>`);
    }
    document.write(`</select>`)
}

createSelectBox (2000, 2021)