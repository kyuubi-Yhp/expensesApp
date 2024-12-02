# expensesApp
 инфа по приложухи или тонкости кода 
inputNode.value = '' 11 строка позволяет сбросить значение input без value не работает

 const expense = parseInt(inputNode.value) переводим из строчного в числовое значение 

 !inputNode.value тоже самое что  и inputNode.value === '' если значение пустое то 

   let expensesListHTML = ''
   переменная в которую мы положим список которую мы создали
  expenses.forEach(element => {
    const elementHTML = `<li>${element}</li>`
    expensesListHTML += elementHTML
  }) 
  цикл массива с элементом это внутренняя переменная 
  там мы создаем переменную котороая создает HTML разметку с этим эллементом 
  а этот эллемент это перебор массива 
  если вносить в консоль то увидим что она li выдает списком в строку 
  за счет пересчета массива выдает все значения 
  дальше вкладываем одну переменную в другую и оправляем в разметку это то что написанно ниже

  historyNode.innerHTML = `<ol> ${expensesListHTML} </ol>` 