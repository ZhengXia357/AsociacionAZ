document.addEventListener("DOMContentLoaded", function () {
    if (!getCookie("cookiesAccepted")) {
        mostrarVentanaCookies();
    }
});

function mostrarVentanaCookies() {
    const ventanaEmergente = document.createElement("div");
    ventanaEmergente.innerHTML = `
        <div style="position: fixed; bottom: 0; left: 0; right: 0; background-color: #f0f0f0; padding: 20px; text-align: center;">
            <table  style="width: 100%">
            <tr>
                <td>
                <h2><font face="Verdana, Geneva, Tahoma, sans-serif"> En StellarUs utilizamos cookies para mejorar la experiencia del usuario. Al continuar navegando por este sitio, aceptas nuestro uso de cookies. <a href="../html/coockie.html">Leer más</a></font></h2>
                </td>
                <td>
                <a href="./index.html"><img src="../img/logoSinFondo.png" alt="Logo de Stellar Us" title="STELLAR US" width="150px" height="150px" style="padding: 30px;"/></a>
                </td>
                </tr>
                <tr>
                <td>
                <button id="btnAceptarCookies" style="padding: 15px 35px;">Aceptar</button>
                </td>
                </tr>
            </table>
            </div>
    `;
    document.body.appendChild(ventanaEmergente);

    document.getElementById("btnAceptarCookies").addEventListener("click", function () {
        setCookie("cookiesAccepted", true, 365); // Cookie válida por 365 días
        ventanaEmergente.remove();
    });
}

function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}