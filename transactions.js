

const transsName = document.getElementById("NtransName")
const transAmount = document.getElementById("NtransAmount")
const transCategory = document.getElementById("NtransCategory")
const transtype = document.getElementById("NtransType")
const transDate = document.getElementById("NtransDate")

const transData = document.getElementById("NtransData")


window.addEventListener("load", function () {
    displayTransactions(getTransactions())
})

const addBtn = document.getElementById("addTransBtn")

addBtn.addEventListener("click", function () {

    let name = transsName.value
    let amount = Number(transAmount.value)
    let category = transCategory.value
    let type = transtype.value
    let date = transDate.value
    // console.log(name,amount,category, type, date)

    const entry = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category,
        type: type,
        date: date
    };


    console.log(entry)
    addTransaction(entry)
    displayTransactions(getTransactions())

    transsName.value = ""
    transAmount.value = ""
    transCategory.value = ""
    transtype.value = ""
    transDate.value = ""



})



function displayTransactions(transactions) {


    // const transactions = getTransactions()




    transData.innerHTML = ""

    transactions.forEach(entry => {
        let transRow = document.createElement("tr")
        transRow.classList.add("text-center")


        let datetd = document.createElement("td")
        datetd.textContent = entry.date

        let nametd = document.createElement("td")
        nametd.textContent = entry.name

        let categorytd = document.createElement("td")
        categorytd.textContent = entry.category

        let typetd = document.createElement("td")
        typetd.textContent = entry.type
        typetd.textContent === "income" ? typetd.classList.add("text-green-500") : typetd.classList.add("text-red-500")
        // console.log(typetd.textContent)


        let amounttd = document.createElement("td")
        amounttd.textContent = entry.amount
        typetd.textContent === "income" ?
            amounttd.classList.add("text-green-500") : //if text content selected income true add green in the text of amount
            amounttd.classList.add("text-red-500") //if text content selected expense    true add green in the text of amount

        let delbtn = document.createElement("td")
        delbtn.innerHTML = `<button class="border border-gray-400 p-1 rounded delBtn"><i class="fa-solid fa-trash"></i></button>`

        transRow.append(datetd, nametd, categorytd, typetd, amounttd, delbtn)

        // console.log("the td tag is"+datetd,nametd, categorytd, typetd,amounttd)






        // transRow.innerHTML = `<td> ${entry.date} </td>
        //                 <td> ${entry.name} </td>
        //                 <td> ${entry.category} </td>
        //                 <td> ${entry.type} </td>

        //                 <td class="text-red-500">- ${entry.amount} </td>
        //                 <td class="flex gap-2 justify-center">

        //                 <button class="border border-gray-400 p-1 rounded delBtn"><i class="fa-solid fa-trash"></i></button>
        //             </td>`
        transData.append(transRow)

        const delBtn = transRow.querySelector(".delBtn")

        delBtn.addEventListener("click", function () {
            console.log("entry Id" + entry.id)
            deleteTransaction(entry.id);
            console.log("entry Id" + entry.id)
            displayTransactions(getTransactions()); // passing the arguments the function the array to parameter as transactions


        })
    });

}









//Selecting search inpout fields
// Filter By type functions
// selecting the filter select tag

const searchName = document.getElementById("searchName")
const filterType = document.getElementById("FType")
const filterCategories = document.getElementById("fCategory")
const resetBtn = document.getElementById("resetFilters")

function applyfilters() {
    let transactions = getTransactions();

    let searchText = searchName.value.toLowerCase();
    let selectedType = filterType.value;
    let selectedCategory = filterCategories.value;

    // Search from input text

    transactions = transactions.filter(function (entry) {
        return entry.name.toLowerCase().includes(searchText)
    });

    //filter by Type
    if (selectedType !== "All") {
        transactions = transactions.filter(function (entry) {
            return entry.type.includes(selectedType)


        });
    }

    //filter by categories

    if (selectedCategory !== "All_categories") {
        transactions = transactions.filter(function (entry) {
            return entry.category === selectedCategory
        });
    }

    displayTransactions(transactions);

}

searchName.addEventListener("keyup", applyfilters);



filterType.addEventListener("change", applyfilters);


filterCategories.addEventListener("change", applyfilters);



resetBtn.addEventListener("click", function () {
    filterType.value = "All"
    filterCategories.value = "All_categories"
    searchName.value = ""
    console.log(displayTransactions(getTransactions()))
    displayTransactions(getTransactions())
})











