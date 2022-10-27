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
	result()
})

tipCustom.addEventListener("input", (e) => {
	tipResult = e.target.value
	tipAmount.forEach((e) => {
		e.checked = false
	})
	result()
})

tipAmount.forEach((e) => {
	e.addEventListener("click", (el) => {
		tipResult = el.target.value
		result()
	})
})

// calculate function
function result() {
	let totalTip = 0
	if (billResult > 0 && peopleResult > 0) {
		totalTip = Number((billResult / 100) * tipResult)
		const calculating = (
			(Number(billResult) + totalTip) /
			Number(peopleResult)
		).toFixed(2)
		personTotalCount.innerHTML = `$${calculating}`
		personTipCount.innerHTML = `$${(totalTip / peopleResult).toFixed(2)}`
	}
	resetBtn.classList.add("active")
}

// reset btn
resetBtn.addEventListener("click", function () {
	if (this.classList.contains("active")) {
		window.location.reload()
	}
})
