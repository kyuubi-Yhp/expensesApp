
const limit = 10_000
const currency = 'руб'
const statusInLimit = 'статус: вы укладываетесь в бюджет'
const statusOfLimit = 'статус: вы неукладываетесь в бюджет'
const statusOflimitClassNameGreen = 'status_green'
const statusOflimitClassNamered = 'status_red'
const errorBlockRed = 'нет такого значения'

const inputNode = document.querySelector('.sum-js')
const btnAdd = document.querySelector('.btn__add-js')
const errorBlock = document.querySelector('.error-js')
const historyNode = document.querySelector('.history__espenses-js')
const sumNode = document.querySelector('.total-js')
const limitNode = document.querySelector('.limit-js')
const statusNode = document.querySelector('.status-js')

const expenses = []

init(expenses)

btnAdd.addEventListener('click', function () {
  const expense = getExpenseFromInput()
  if (!expense) {
    return
  }
  treackExpense(expense) 
  render(expenses)
})

function treackExpense(expense) {
  expenses.push(expense)
}

function getExpenseFromInput() {
  if (!inputNode.value) {
    errorBlock.innerText = errorBlockRed
    return null
  }
  errorBlock.innerText = ''

  const expense = parseInt(inputNode.value)
  clearInput()
  return expense
}

function clearInput() {
  inputNode.value = ''
}

function init(expenses) {
  limitNode.innerText = limit
  statusNode.innerText = statusInLimit
  sumNode.innerText = calculeteExpenses(expenses)
}

function calculeteExpenses(expenses) {
  let sum = 0
  expenses.forEach(element => {
    sum += element
  })
  return sum
}

function render(expenses) {
  const sum = calculeteExpenses(expenses)
  renderHistory(expenses)
  renderSum(sum)
  renderStatus(sum)
}

function renderHistory(expenses) {
  let expensesListHTML = ''
  expenses.forEach(element => {
    const elementHTML = `<li>${element} ${currency}</li>`
    expensesListHTML += elementHTML
  })
  historyNode.innerHTML = `<ol> ${expensesListHTML} </ol>`
}

function renderSum(sum) {
  sumNode.innerText = sum
}

function renderStatus(sum) {

  if (sum <= limit) {
    statusNode.innerText = statusInLimit
    statusNode.classList.add(statusOflimitClassNameGreen)
  } else {
    statusNode.classList.add(statusOflimitClassNamered)
    statusNode.innerText = statusOfLimit
  }
}