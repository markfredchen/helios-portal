var app = document.getElementById("app");
app.innerHTML = 'hi test 1';

if (DEVELOPMENT) {
    if (module.hot) {
        module.hot.accept();
    }
}