var e = {
        d: (o, t) => {
            for (var n in t)
                e.o(t, n) &&
                    !e.o(o, n) &&
                    Object.defineProperty(o, n, { enumerable: !0, get: t[n] });
        },
        o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
    },
    o = {};
function t(e, o) {
    for (var t = 0; t < o.length; t++) {
        var n = o[t];
        (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
    }
}
e.d(o, { default: () => n });
var n = (function () {
    function e(o) {
        !(function (e, o) {
            if (!(e instanceof o))
                throw new TypeError("Cannot call a class as a function");
        })(this, e),
            (this._token = o);
    }
    var o, n;
    return (
        (o = e),
        (n = [
            {
                key: "token",
                get: function () {
                    return console.log("__TOKEN__", this._token), this._token;
                },
            },
            {
                key: "doSomeCoolStuff",
                value: function () {
                    console.log("COOL STUFF");
                },
            },
        ]) && t(o.prototype, n),
        Object.defineProperty(o, "prototype", { writable: !1 }),
        e
    );
})();
module.exports.NpoPlayer = o.default;
