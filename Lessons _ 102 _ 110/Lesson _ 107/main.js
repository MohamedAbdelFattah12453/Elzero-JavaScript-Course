/*
    BOM [Browser Object Model]
    - open (URL [Opt], Window Name OR Target Attr [Opt], Win Features [Opt], History)
    - close()
    Window Features
    --- width [Num]
    --- height [Num]
    --- left [Num]
    --- top [Num]

    Search
    - Window.Open Window Features
*/

setTimeout(function () {
    window.open("https://google.com", "_blank", "width=400, height=400, left=200, top= 100");
}, 2000);