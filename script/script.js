// todo
// add class active to button

const bill = document.getElementById("total-cost")
const people = document.getElementById("people-count")
const personTipCount = document.getElementById("person-tip-count")
const personTotalCount = document.getElementById("person-total-count")
const tipCustom = document.getElementById("tipCustom")
const tipAmount = document.querySelectorAll(".cards__item input[name=tip]")
const resetBtn = document.getElementById("resultbtn")

let peopleResult
let billResult
let tipResult

// get input
bill.addEventListener("input", (e) => {
	billResult = e.target.value

	result()
})

people.addEventListener("input", (e) => {
	peopleResult = e.target.value
	if (peopleResult == 0) {
		document.querySelector(".errormsg").classList.add("active")
		e.target.style.outline = "2px solid rgb(253, 124, 38)"
	} else {
		e.target.style.outline = "none"
		document.querySelector(".errormsg").classList.remove("active")
	}

	result()
})

tipCustom.addEventListener("input", (e) => {
	tipResult = e.target.value

	tipAmount.forEach((e) => {
		e.checked = false
		document.querySelectorAll(".cards__item").forEach((e) => {
			e.style.backgroundColor = ""
			e.style.color = ""
		})
	})
	result()
})

tipAmount.forEach((e) => {
	e.addEventListener("click", (el) => {
		document.querySelectorAll(".cards__item").forEach((e) => {
			e.style.backgroundColor = ""
			e.style.color = ""
		})
		tipResult = el.target.value
		el.composedPath()[1].style.backgroundColor = "hsl(172, 67%, 45%)"
		el.composedPath()[1].style.color = "hsl(183, 100%, 15%)"
		tipCustom.value = ""
		result()
	})
})

// calculate function
function result() {
	let totalTip = 0
	if (billResult > 0 && peopleResult > 0) {
		if (tipResult) {
			totalTip = (billResult / 100) * tipResult
		}

		const personTip = (
			(Number(billResult) + totalTip) /
			Number(peopleResult)
		).toFixed(2)
		const personTotal = (totalTip / peopleResult).toFixed(2)
		personTipCount.innerHTML = `$${personTotal}`
		personTotalCount.innerHTML = `$${personTip}`
	}

	resetBtn.classList.add("active")
}

// reset btn
resetBtn.addEventListener("click", function () {
	if (this.classList.contains("active")) {
		window.location.reload()
	}
})
