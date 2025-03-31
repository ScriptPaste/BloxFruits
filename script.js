@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
html {
    font-size: 100%; /* Ukuran font default */
    scroll-behavior: smooth;
}
body
{
    background: linear-gradient(#00296B, #3c053b);
    min-height: 250vh;
    overflow-x: hidden;
}
::selection
{
    background: #00296B;
    color: #fff;
}
#header
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
}
#header .logo
{
    color: #fff;
    font-weight: 700;
    font-size: 2em;
    text-decoration: none;
    font-family: "Aref Ruqaa Ink", serif;
}
#header .navigation
{
    display: flex;
    justify-content: center;
    align-items: center;
}
#header .navigation li
{
    list-style: none;
    margin-left: 20px;
}
#header .navigation li a
{
    text-decoration: none;
    padding: 6px 15px;
    font-size: 17.5px;
    color: #fff;
    font-family: "Aref Ruqaa Ink", serif;
    border-radius: 20px;
}
#header .navigation li a:hover,
#header .navigation li a.active
{
    background: #fff;
    color: #111;
}
section
{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
}
section img
{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    pointer-events: none;
}
.gif-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh; /* Agar selalu di tengah layar */
}

.gif-container img {
    width: 300px; /* Sesuaikan ukuran */
    border: 8px solid #6f1159; /* Warna sesuai tema */
    border-radius: 15px; /* Biar lebih smooth */
    box-shadow: 0 0 15px rgba(111, 17, 89, 0.6); /* Glow efek biar keren */
}

section img#mountains_front
{
    transform: translateY();
}
section img#mountains_behind
{
    transform: translateY();
}
section img#stars
{
    transform: translateY(-20px);
}
@keyframes moon-glow {
    0% {
        filter: drop-shadow(0 0 20px #04193a);
    }
    50% {
        filter: drop-shadow(0 0 40px #04193a);
    }
    100% {
        filter: drop-shadow(0 0 20px #04193a);
    }
}

section img#moon {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 600px; /* Atur ukuran sesuai kebutuhan */
    animation: moon-glow 3s infinite alternate; /* Animasi glow */
}

#text
{
    position: absolute;
    top: 50%;
    right: -115%;
    transform: translateY(-50%);
    color: #fff;
    font-size: 8vw;
    white-space: nowrap;
    text-shadow: 0 10px 15px rgba(0,0,0,0.25);
    font-family: "Aref Ruqaa Ink", serif;
}
.shade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px; /* Atur tinggi shade */
    background: linear-gradient(to bottom, rgba(140, 1, 106, 0) 0%, #3c053b 100%);
    pointer-events: none; /* Supaya tidak mengganggu interaksi */
}
.sec
{
    position: relative;
    padding: 350px;
    background: #3c053b;;
}
.sec h2
{
    font-size: 3em;
    color: #fff;
    margin-bottom: 10px;
    text-align: center;
    font-family: 'Aref Ruqaa Ink', serif;
}
.sec p
{
    font: 1em;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    font-family: "Aref Ruqaa Ink", serif;
}
.sec p2
{
    font: 1em;
    color: #fff;
    font-weight: 300;
    letter-spacing: 1px;
    bottom: 2%;
    text-align: center;
    font-family: "Aref Ruqaa Ink", serif;
}
.masjid-container {
    position: absolute;
    bottom: -5px; /* Atur jarak dari bawah */
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
}

#masjid {
    width: 100vh; /* Sesuaikan ukuran */
    max-width: 100%; /* Responsif */
}
.shade2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 250px; /* Atur tinggi shade */
    background: linear-gradient(to bottom, rgba(140, 1, 106, 0) 0%, #3c053b 100%);
    pointer-events: none; /* Supaya tidak mengganggu interaksi */
}
/* ✅ MEDIA QUERIES UNTUK LAYAR KECIL */
@media (max-width: 768px) {
    #header {
        padding: 15px 3%;
        flex-direction: column;
        text-align: center;
    }

    #header .navigation {
        flex-direction: column;
        gap: 10px;
    }

    section {
        height: 90vh;
    }

    #text {
        font-size: 10vw;
    }

    .sec {
        padding: 80px 5%;
    }

    .gif-container img {
        width: 60vw;
    }

    #masjid {
        width: 70vw;
    }
}
