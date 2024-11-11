// MENU 1

const menu1Ol = document.querySelectorAll("#menu1 > ol")

//menu 1 ol 0
const menu1ol0 = menu1Ol[0].querySelectorAll("li")

menu1ol0[1].innerHTML = '<a href="kontakt_towarzystwo.html">Kontakt</a>'

let rodoTowarzystwo = document.createElement("li")
menu1Ol[0].appendChild(rodoTowarzystwo).innerHTML =
	'<a href="rodoTowarzystwo.html">RODO</a>'
let strategiaOchronyMaloletnichTowarzystwo = document.createElement("li")
menu1Ol[0].appendChild(strategiaOchronyMaloletnichTowarzystwo).innerHTML =
	'<a href="standardyOchronyMaloletnichTowarzystwo.html">Standardy Ochrony Małoletnich</a>'

//menu 1 ol 1

const menu1ol1 = menu1Ol[1].querySelectorAll(`li`)
menu1ol1[1].innerHTML = '<a href="kodeks_etyki_namyslow.html">Kodeks etyki</a>'

menu1ol1[0].innerHTML = '<a href="statut_mow_namyslow.html">Statut Ośrodka</a>'
menu1ol1[4].innerHTML = '<a href="histosr.html">Historia Ośrodka</a>'
menu1ol1[5].innerHTML = '<a href="kontakt_namyslow.html">Kontakt</a>'

let rodoMowNamyslow = document.createElement("li")
let strategiaOchronyMaloletnichNamyslow = document.createElement("li")
menu1Ol[1].appendChild(rodoMowNamyslow).innerHTML =
	'<a href="rodoMowNamyslow.html">RODO</a>'
menu1Ol[1].appendChild(strategiaOchronyMaloletnichNamyslow).innerHTML =
	'<a href="standardyOchronyMaloletnichNamyslow.html">Standardy Ochrony<BR>Małoletnich </a>'

//menu 1 ol 2
const menu1ol2 = menu1Ol[2].querySelectorAll(`li`)

let warsztaty = document.createElement("li")
menu1Ol[2].appendChild(warsztaty).innerHTML =
	'<a href="kalendarzzsz.html">Rok szkolny 2024/2025</a>'

// let kalendarzzsz = document.createElement('li');
// menu1Ol[2].appendChild(kalendarzzsz).innerHTML = '<a href="kalendarzzsz.html"> szkolny 2021/2022</a>';

menu1ol2[0].innerHTML = '<a href="warsztaty.html">Warsztaty</a>'

let kontaktNbsis = document.createElement("li")
menu1Ol[2].appendChild(kontaktNbsis).innerHTML =
	'<a href="kontakt_nbsis.html">Kontakt</a>'

let rodoNbsis = document.createElement("li")
menu1Ol[2].appendChild(rodoNbsis).innerHTML =
	'<a href="rodoNbsis.html">RODO</a>'

//MENU 3

let menu3Ol = document.querySelectorAll("#menu3 > ol")

//menu 3 ol 0
let menu3ol0 = menu3Ol[0].querySelectorAll("li")
let rodoMowStobrawa = document.createElement("li")
let opisZadaniePubliczne = document.createElement("li")
let strategiaOchronyMaloletnichStobrawa = document.createElement("li")
let uslugiDlaDzieciMlodziezy = document.createElement("li")
menu3Ol[0].appendChild(rodoMowStobrawa).innerHTML =
	'<a href="rodoStobrawa.html">RODO</a>'

menu3Ol[0].appendChild(strategiaOchronyMaloletnichStobrawa).innerHTML =
	'<a href="standardy ochrony maloletnich stobrawa.html">Standardy Ochrony<br> Małoletnich</a>'


menu3ol0[0].innerHTML = '<a href="statu_mow_stobrawa.html">Statut Ośrodka</a>'

menu3ol0[1].innerHTML = '<a href="kodeks_etyki_stobrawa.html">Kodeks etyki</a>'
menu3ol0[2].innerHTML = '<a href="zadaniePubliczneOpis.html">Opis - Zadanie publiczne pt.: "USŁUGI DLA DZIECI I MŁODZIEŻY WYMAGAJĄCEJ WSPARCIA"</a>'



let zaproszenieDoWpspolpracy = document.createElement("li")
let zadanie = document.createElement("li")
let zapytanie = document.createElement("li")
let galeriaZadaniePubliczne = document.createElement("li")
menu3ol0[2].appendChild(uslugiDlaDzieciMlodziezy).innerHTML = '<a href="zadaniePubliczne.html">Usługi dla dzieci i młodzieży wymagającej wsparcia</a>'
menu3ol0[2].appendChild(zaproszenieDoWpspolpracy).innerHTML = '<a href="zaproszenieDoWspolpracy.html">Zaproszenie do współpracy</a>'
menu3ol0[2].appendChild(zadanie).innerHTML = '<a href="zadaniePubliczneTerminarz.html">Terminarz realizacji zadania publicznego</a>'
menu3ol0[2].appendChild(galeriaZadaniePubliczne).innerHTML = '<a href="zadaniePubliczneGaleria.html">Galeria</a>'
menu3ol0[2].appendChild(zapytanie).innerHTML = '<a href="zadaniePubliczneZapytanieOfertowe.html">Zapytanie ofertowe</a>'

menu3ol0[3].innerHTML = '<a href="kontakt_Stobrawa.html">Kontakt</a>'



// let nbsisStobrawaRokSzkolny = document.createElement(`li`);
// menu3Ol[0].appendChild(nbsisStobrawaRokSzkolny).innerHTML = '<a href="">rok szkolny stobrawa</a>';

// let rokSzkolnyNbsisStobrawa = document.createElement('li');
// menu3Ol[0].appendChild(rokSzkolnyNbsisStobrawa).innerHTML = '<a href="rodoStobrawa.html">rok szkolny stobrawa</a>'

//menu 3 ol 1
let menu3ol1 = menu3Ol[1].querySelectorAll("li")

menu3ol1[0].remove()
menu3ol1[1].remove()
menu3ol1[2].remove()
menu3ol1[3].remove()
menu3ol1[4].remove()
menu3ol1[5].remove()

// menu 3 ol 1a

// let menu3ol1a =

//menu 3 ol 2
let menu3ol2 = menu3Ol[2].querySelectorAll("li")

// menu 3 table
const nbsisStobrawa = document.createElement("table")
menu3Ol[0].appendChild(nbsisStobrawa).innerHTML =
	'<img src="Obrazki/stobrawaNbsis.png" alt="przycisk z napisek nbsis w stobrawie" style="margin-top: 15px">'

const rokSzkolnyNbsisStobrawa = document.createElement("li")
menu3Ol[0].appendChild(rokSzkolnyNbsisStobrawa).innerHTML =
	'<a href="kalendarzNbsisStobrawa.html">Rok szkolny 2024/2025</a>'

const kontaktStobrawaNbsis = document.createElement("li")
menu3Ol[0].appendChild(kontaktStobrawaNbsis).innerHTML =
	'<a href="kontakt_nbsis_stobrawa.html">Kontakt</a>'

const rodoNbsisStobrawa = document.createElement("li")
menu3Ol[0].appendChild(rodoNbsisStobrawa).innerHTML =
	'<a href="rodoNbsisStobrawa.html">RODO</a>'

	let menu3tables = menu3.querySelectorAll('table')
	menu3tables[2].remove()

// const nloStobrawa = document.createElement("table")
// menu3Ol[0].appendChild(nloStobrawa).innerHTML =
// 	'<img src="Obrazki/stobrawaNlo.png" style="margin-top: 15px">'

// const rokSzkolnyNloStobrawa = document.createElement("li")
// menu3Ol[0].appendChild(rokSzkolnyNloStobrawa).innerHTML =
// 	'<a href="kalendarzNloStobrawa.html">Rok szkolny 2023/2024</a>'

// const kontaktNloStobrawa = document.createElement("li")
// menu3Ol[0].appendChild(kontaktNloStobrawa).innerHTML =
// 	'<a href="kontakt_nlo_stobrawa.html">Kontakt</a>'
//
// const rodoNloStobrawa = document.createElement("li")
// menu3Ol[0].appendChild(rodoNloStobrawa).innerHTML =
// 	'<a href="rodoNloStobrawa.html">RODO</a>'

// const allTableButton = document.querySelectorAll('table');

// allTableButton[4].
// menu3Ol[0].remove()

//
// const allTables = document.querySelectorAll("table");
// const rokSzkolnyNbsisStobrawa = document.createElement('li');
// allTables[4].appendChild(rokSzkolnyNbsisStobrawa).innerHTML = '<a href="kalendarzNloStobrawa.html">Rok szkolny 2022/2023</a>';

// ol 1
// let statutMowNamyslow = document.createElement('li')
// statutMowNamyslow.innerHTML = '<a href="statut_mow_namyslow.html">Statut Ośrodka</a>';
// menu1Ol[1].appendChild(statutMowNamyslow);
//
// let rodoMowNamyslow = document.createElement('li')
// rodoMowNamyslow.innerHTML = '<a href="rodoMowNamyslow.html">RODO</a>';
// menu1Ol[1].appendChild(rodoMowNamyslow);
//
// let warsztaty = document.createElement('li')
// warsztaty.innerHTML = '<a href="warsztaty.html">Warsztaty</a>';
// menu1Ol[2].appendChild(warsztaty);

// const menu1Li = document.querySelectorAll('#menu1 > ol > li');
// //
// menu1Li[1].innerHTML = '<a href="kontakt_towarzystwo.html">Kontakt</a>';
// menu1Li[2].innerHTML = '<a href="statut_mow_namyslow.html">Statut Ośrodka</a>';
// menu1Li[7].remove();
// menu1Li[8].innerHTML = '<a href="kontakt_namyslow.html">Kontakt</a>';
// menu1Li[9].remove();
//
// let buttonMenu2Li = document.createElement('li');
// buttonMenu2Li.innerHTML = '<a href="kalendarzzsz.html">Rok szkolny 2021/2022</a>';
// menu1Ol[2].appendChild(buttonMenu2Li);

// MENU 3

// const menu3Li = document.querySelectorAll('#menu3 > ol > li');

// menu3Li[0].innerHTML = '<a href="statu_mow_stobrawa.html">Statut Ośrodka</a>';
// menu3Li[1].innerHTML = '<a href="kodeks_etyki_stobrawa.html">Kodeks etyki</a>';
//
// menu3Li[2].innerHTML = '<a href="kalendarzNloStobrawa.html">Rok szkolny 2021/2022</a>';
// menu3Li[3].innerHTML = '<a href="kontakt_Stobrawa.html">Kontakt</a>';
// menu3Li[4].innerHTML = '<a href="statut_mow-zawisc.html">Statut Ośrodka</a>';
// menu3Li[5].innerHTML = '<a href="kodeks_etyki_zawisc.html">Kodeks etyki</a>';
// menu3Li[6].remove();
// menu3Li[8].innerHTML = '<a href="kalendarzzawisc.html">Rok szkolny 2021/2022</a>';
//
// const menu3ol = document.querySelectorAll('#menu3 > ol');
// let buttonMenu3Ol1Li = document.createElement('li');
// menu3ol[0].appendChild(buttonMenu3Ol1Li).innerHTML = '<a href="rodoStobrawa.html">RODO</a>';

// menu30l[1].appendChild(buttonMenu3Li);
// let buttonMenu32Li = document.createElement('li')

// =======================================================================================
// INNE TAKIE MOJE DZIAŁA
// let newMenu1Ol = document.querySelectorAll('#menu1 ol');

// let newMenu1Li1 = newMenu1Ol[0];
// let newMenu1Li2 = newMenu1Ol[1];
// let newMenu1Li3 = newMenu1Ol[2];

// let newMenu3Ol = document.querySelectorAll('#menu3 ol');

// let newLi = document.createElement('li');

// newLi.innerHTML = '<a href="kalendarzzawisc.html">RRok szkolny 2019/2020</a>';
// const newLi1 = document.createElement('li');

// newMenu1Li1.appendChild(newLi);
// newMenu1Li2.appendChild(newLi1);
