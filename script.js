function createElement(id){
	const time = (Math.random() * 2 + 1).toFixed(3);
	return new Promise(resolve => {
		setTimeout(()=> resolve({id, time}), time*1000)
	})
}

const promises =  [createElement(1), createElement(2), createElement(3)]

Promise.all(promises).then(results =>{
	const output = document.getElementById("output");
	output.innerHTML = ""

	results.forEach(result=>{
		const row = document.createElement("tr");
		row.innerHTML = `<td>Promise ${result.id}</td><td>${result.time}</td>`
		output.appendChild(row);
	})
	const maxtime = Math.max(...results.map(r=> parseFloat(r.time))).toFixed(3)
	const totalRow =  document.createElement("tr");
	totalRow.innerHTML = `<td>Total</td><td>${maxtime}</td>`
	output.appendChild(totalRow)

	
})