function startTimer(t, n) {
    var o, e, a = t;
    setInterval((function() {
        o = parseInt(a / 60, 10), e = parseInt(a % 60, 10), o = o < 10 ? "0" + o : o, e = e < 10 ? "0" + e : e, n.textContent = o + ":" + e, --a < 0 && (a = 0)
    }), 1e3)
}

function go() {
    window.onbeforeunload = null;
    window.location = `#YOUR_CAMPIGN_LINK`;
}

setTimeout(timer, 1e3), window.onload = void startTimer(118, document.querySelector("#timer")),
    function() {
        var t;
        try {
            const n = window.location.href.split(/[#]/)[0];
            for (t = 0; 10 > t; ++t) history.pushState({}, "", n + "#");
            onpopstate = function(t) {
                t.state && location.replace(`#YOUR_CAMPIGN_LINK`)
            }
        } catch (t) {
            console.log(t)
        }
    }();
