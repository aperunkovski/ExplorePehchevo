// Функција за отворање на модалот
function openModal() {
    document.getElementById('accommodationModal').classList.add('active');
    document.body.style.overflow = 'hidden'; // Спречува скролање на страната во позадина
}


document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('accommodationModal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Функција за менување на главната слика во галеријата
function changeImg(src) {
    document.getElementById('current-img').src = src;
}

// Затворање ако се кликне надвор од прозорецот
window.onclick = function(event) {
    let modal = document.getElementById('accommodationModal');
    if (event.target == modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}



document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const menu = document.getElementById("navMenu"); // Ова сега бара ID

    if (burger && menu) {
        burger.onclick = () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
            
            if (menu.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };
    }
});
// Додај го ова под делот за бургерот
const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Кога ќе кликнеш линк, затвори го менито и врати скрол на body
        const burger = document.querySelector(".burger");
        const menu = document.getElementById("navMenu");
        
        burger.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});


























// 1. Податоци за локациите (наместо fetch од друг фајл)
const activityData = {
    'ravna-reka': {
        title: "Равна Река",
        type: "Туристичка зона",
        desc: "Туристичката населба Равна Река е вистинска оаза на мирот и најпознатото излетничко место во близина на Пехчево. Оваа област е позната по своите чисти извори на вода и бројните рибници во кои се одгледува речна пастрмка. Покрај реката се изградени викендички и ресторани каде посетителите можат да уживаат во традиционална храна. Равна Река е идеална почетна точка за многу планинарски тури кои водат кон највисоките врвови. Свежината на реката и сенките на боровите дрвја нудат спас од летните горештини.",
        loc: "10км од центар",
        diff: "Лесна",
        time: "Лето",
        gear: "Спортска",
        img: "img/ravnareka3.jpg"
    },
    'vrv-kadiica': {
        title: "Врв Кадиица",
        type: "Авантура",
        desc: "Врвот Кадиица е највисоката точка на планината Влаина и претставува вистински предизвик за планинарите. Со својата висина од 1932 метри, тој нуди спектакуларен поглед на цела Источна Македонија и делови од Бугарија. Патеката до врвот минува низ пасишта и каменити предели каде можат да се сретнат стада овци. На самиот врв често дуваат силни ветрови, но чистиот хоризонт вреди за секој вложен напор. Ова е место каде небото и земјата се допираат во една величествена панорама.",
        loc: "Влаина Планина",
        diff: "Тешка",
        time: "Мај - Октомври",
        gear: "Планинарска",
        img: "img/kadiica.webp"
    },
    'pehcevski-vodopadi': {
        title: "Пехчевски Водопади",
        type: "Природен феномен",
        desc: "Пехчевските водопади се едни од најубавите природни реткост во Малешевскиот регион, сместени на текот на реката Брегалница. Секој од водопадите има своја специфична убавина и различна висина, а најпознатиот паѓа од преку десет метри. До нив водат добро обележани патеки кои минуваат низ густа и недопрена шума. Звукот на водата и свежиот планински воздух создаваат неповторливо чувство на спокој и релаксација. Ова е задолжителна дестинација за секој посетител кој сака да ја доживее дивата природа на Пехчево.",
        loc: "Равна Река",
        diff: "Лесна",
        time: "Април - Октомври",
        gear: "Патики",
        img: "img/vodopad2.jpeg"
    }
};

// 2. Функција за отворање
function openActivity(id) {
    const data = activityData[id];
    if (!data) return;

    document.getElementById('act-title').innerText = data.title;
    document.getElementById('act-type').innerText = data.type;
    document.getElementById('act-desc').innerText = data.desc;
    document.getElementById('act-location').innerText = data.loc;
    document.getElementById('act-diff').innerText = data.diff;
    document.getElementById('act-time').innerText = data.time;
    document.getElementById('act-gear').innerText = data.gear;
    document.getElementById('act-img').src = data.img;

    const modal = document.getElementById('activityModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 3. Функција за затворање
function closeActivityModal() {
    const modal = document.getElementById('activityModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Затвори на клик надвор од модалот
window.onclick = function(event) {
    const modal = document.getElementById('activityModal');
    if (event.target == modal) {
        closeActivityModal();
    }
}