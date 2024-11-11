let textZostalo = document.querySelectorAll("#odliczanie h3")
arrTextZostalo = [...textZostalo]
arrTextZostalo[0].textContent = "DO WAKACJI ZOSTAŁO:"

const endTime = new Date("2025-06-27 9:00:00").getTime()

const spanD = document.querySelector("span.d")
const spanH = document.querySelector("span.h")
const spanM = document.querySelector("span.m")
const spanS = document.querySelector("span.s")

setInterval(() => {
	const nowTime = new Date().getTime()

	// const time = Math.floor((endTime - nowTime)/1000);
	const time = endTime - nowTime
	const days = Math.floor(
		endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
	)
	let hours = Math.floor(
		(endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
	)
	hours = hours < 10 ? `0${hours}` : hours
	let minuts = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60)
	minuts = minuts < 10 ? `0${minuts}` : minuts
	let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60)
	seconds = seconds < 10 ? `0${seconds}` : seconds

	// console.log(days);

	spanD.textContent = days
	spanH.textContent = hours
	spanM.textContent = minuts
	spanS.textContent = seconds
}, 1000)
