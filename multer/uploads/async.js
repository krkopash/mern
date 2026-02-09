var fetchMsg = function () {
    return new Promise(function (Resolve, reject) {
        setTimeout(function () {
            var success = Math.random() > 0.5;
            if (success) {
                Resolve("success");
            }
            else {
                reject("reject");
            }
        }, 1000);
    });
};
fetchMsg()
    .then(function (msg) {
    console.log(msg.toUpperCase());
})
    .catch(function (error) {
    console.log("Error:", error.message);
});
