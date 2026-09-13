const $submit = document.getElementById("submit");
const $password = document.getElementById("password");
const $visible = document.getElementById("visible");
const $username = document.getElementById("username");

document.addEventListener("change", (e)=>{
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e)=>{
    if (e.target === $submit) {
        if ($password.value !== '' && $username.value !== ''){
            e.preventDefault();
            window.location.href = "home.html"
        }
    }
})