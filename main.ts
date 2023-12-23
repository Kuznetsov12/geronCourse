// let bmw:number = 18;
// let audi:number = 19;
// let age: number | string = 25; // тип данных число или строка 
// type StatusServer = 200 | 300 | 400; // свой тип данных 
// let current:StatusServer = 200; // передаются только те значение которые указаны в своем типе данных
// let sum = bmw + audi;
// console.log(sum);
// bmw = 20;
// audi = 21;
// let subtraction = bmw - audi;
// console.log(subtraction);
// bmw = 22;
// audi = 23;
// let del = bmw / audi;
// console.log(del);
// bmw = 24;
// audi = 25;
// let multi = bmw * audi;
// console.log(multi);

// if(bmw == audi){
//     console.log('max loh')
// }
// else if(audi = bmw){
//     console.log('max soset')
// }
// else{
//     console.log('max pedik')
// }




// let password: string = `qwehuhuh    iulo123`
// for(let i = 12; i < password.length && password.replace(` `, ``);){
//     if((password.length > 8) && !(password.includes('qwerty'))){
//         console.log(password)
//         break;
//     }
//     else{
//         break;
//     }

// }

// const techonlogy:departament = {
//     name: 'Технический',
//     closedproject: 20,
//     openproject: 30
// }
// const apparat:departament = {
//     name: 'Аппаратный',
//     closedproject: 10,
//     openproject: 5
// }
// const project:departament = {
//     name: 'Проектирующий',
//     closedproject: 60,
//     openproject: 2
// }
// type departament = {
//     name: string;
//     closedproject: number;
//     openproject: number;
// }
// function checkdepartament(typeObject: departament): string{
//     const {name , closedproject , openproject} = typeObject;
//     const calculation = ((closedproject + openproject)/ 100 * openproject);
//     if(calculation > 70){
//         return `Отдел ${name} получает премию 10%`;
//     }
//     else if(calculation < 40){
//         return `Отдел ${name} закрыт!`;
//     }
//     else{
//         return `Отдел ${name} не понял!`;
//     }
// }
// console.log(checkdepartament(techonlogy))
// console.log(checkdepartament(apparat))
// console.log(checkdepartament(project))


// const stazh: number = 5;
// const projectEngine: number = 3;
// function calceffect(stazh: number, projectEngine:number): string {
//     const effect = projectEngine/stazh
//     if(effect >=4){
//         return `Сотрудник эффективен`
//     }
//     else if(effect >=3){
//         return `Сотрудник должен улучшить результаты`
//     }
//     else{
//         return ` сотруднику надо перепройти квалификацию`
//     }

// } 

// console.log(calceffect(stazh, projectEngine));


// let randomString:string = 'макслох'

// console.log(randomString.split('').reverse().join(''))

// if(randomString =randomString.split('').reverse().join('')){
//     console.log(`Слово ${randomString} - палиндром`)
// }

// slice() - можно использовать отрицательные числа создает новую строку
// substring() - обрубает строку 

    



// let number: number = 10;
// let number2: number = 15;
// let number3: number = 12;
// if(number > number2 && number > number3){
//     console.log(number)
// }
// else if(number2 > number && number2 > number3){
//     console.log(number2)
// }
// else{
//     console.log(number3)
// }


// let year: number = 2023;
// if(year % 400  == 0 && year % 4 == 0 && year % 100 !== 0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


// type simm = number | string 
// let simm2:number = 1001
// let stringNum:string = simm2.toString()

// if(stringNum == stringNum.split('').reverse().join('')){
//    console.log(1)
// }
// else{
//     console.log(2);
// }

// let defaultPrice: number = 1000;
// let state: string = 'аварийный' ;

//     let finalCoast: number = 0;
//     if(state === 'новый'){
//         finalCoast = defaultPrice;

//     }
//     else if( state === 'б/у'){
//         finalCoast = defaultPrice * 0.85;
//     }
//     else if( state === 'аварийный'){
//         finalCoast = defaultPrice * 0.25;
//     }


// console.log(`Стоимость товара с учетом надбавки - ${finalCoast} тенге при состоянии ${state} `)


// let sumGrade: number = 1000;
// let quantityGrade: number = 40;
// let allow:number = 250;

// function qualityOfWork(sumGrade: number, quantityGrade: number , allow: number){
//     let middleGrade: number = sumGrade / quantityGrade;
//     let price:number = allow;
//     if(middleGrade <= 1.5){
//         return 'Плохая эффективность, необходимо пройти переквалификацию' 
//     }
//     else if(middleGrade <= 2.5){
//         return 'Хорошая эффективность, но нужно пройти дополнительные курсы'
//     }
//     else if(middleGrade >= 2.6 && price > 399 ){

//         return `Отличная эффективность, ваша итоговая зп равна ${price * 1.10 }` 

//     }
    
//     else if(middleGrade >= 2.6 && price > 300){
        
//         return `Отличная эффективность, ваша итоговая зп равна ${price * 1.10} `
//     }
//     else if(middleGrade >= 2.6 && allow > 10 && price < 299){
        
//         return `Отличная эффективность, ваша итоговая зп равна ${price * 1.10}`
//     }

// }

// const quality: any = qualityOfWork(sumGrade , quantityGrade , allow )

// console.log(quality ,',', 'Ваша средняя оценка равна:' ,sumGrade/quantityGrade )







// type typeOfProcessing = 'выходные' | 'праздник' | 'отпускные'
// const salary: number = 1000;
// const hoursInTheMouth: number = 200;
// const hoursOverWorked: number = 40;
// const typeOfProcessing: typeOfProcessing = 'отпускные'

// function calculationOfAllowance(hoursOverWorked:number , typeOfProcessing:typeOfProcessing):any{
//     if(hoursOverWorked > 20){
//         return typeOfProcessing === 'выходные' ? 0.15 : (typeOfProcessing === 'праздник' ? 0.20 : 0.30)
//     }
//     else if(hoursOverWorked >= 10 && hoursOverWorked <=20){
//         return typeOfProcessing ==='выходные' ? 0.10 : (typeOfProcessing === 'праздник' ? 0.15: 0.25) 
//     }
//     else if(hoursOverWorked >= 1 && hoursOverWorked <=10){
//         return typeOfProcessing === 'выходные' ? 0.05: (typeOfProcessing === 'праздник' ? 0.10: 0.15)
//     }
//     else{
//         return 0;
//     }

// }

// function wage( hoursInTheMouth: number,hoursOverWorked: number , typeOfProcessing:typeOfProcessing):any{
//     const defaultWage: number = hoursInTheMouth * salary;
//     const salaryAddition:number = calculationOfAllowance(hoursOverWorked , typeOfProcessing)
//     const WageSalary: number = defaultWage + (defaultWage * salaryAddition);
//     return WageSalary;
// }

// const defaultWAGE: number = hoursInTheMouth * salary;
// const ZP: number = wage(hoursInTheMouth , hoursOverWorked , typeOfProcessing)

// console.log(`Начальная зп: ${defaultWAGE} $`)
// console.log(`Зп с учетом надбавки ${ZP} $`)
// console.log(`переработка ${hoursOverWorked} часов в ${typeOfProcessing}`)



// type TPlace = 'college' | 'school';
// const place:TPlace = 'college';
// const score:number = 200;

// const getCourse = (place:TPlace , score:number) => {
//     if(score > 180){
//         if(place === 'college'){
//             return 'Вы поступили на второй курс' 
//         }
//         else{
//             return 'вы поступили на первый курс'
//         }
//     }
//     else{
//         return 'не поступил'
//     }
// }

// console.log(getCourse('college' , 200))


// const coorKingY: number = 2;
// const coorKingX: number = 2;
// const coorRivalY: number = 3;
// const coorRivalX: number = 4;

// if(Math.abs(coorKingY - coorRivalY) <= 1 && Math.abs(coorKingX - coorRivalX) <= 1){
//     console.log('убьет')
// }
// else{
//    console.log('соси')
// }


// enum Ecolors{
//     red = 'красный',
//     green = 'зеленый',
//     purple = 'фиолетовый'
    
// }

// const color = Ecolors.red
// console.log(color);
// const getColorText = (color: Ecolors) => {
//     switch(color){
//         case Ecolors.red:
//             console.log('красный')
//             break;
//         case Ecolors.green:
//             console.log('зеленый')
//             break;
//         case Ecolors.purple:
//             console.log('фиолетовый')
//             break;
//         default:
//             console.log('пососо')
//             break;
    
//     }
// }


// type TCallback = (num1:number , num2:number) => number;

// const generateRandomNumber = (callback: TCallback) =>{
//     let num1 = Math.floor(Math.random() * 100)
//     let num2 = Math.floor(Math.random() * 100)
//     let answer = callback(num1, num2)
//     return answer;
// }
// const summNumber = (num1:number, num2:number) =>{
//     return num1 + num2;
// }
// console.log(generateRandomNumber(summNumber))


// type StrCallback = (str1:string) => string;

// const doString = (callback: StrCallback) =>{
//     let str1 = 'mochahachatakto'
//     str1 = str1.toUpperCase();
//     let answerString = callback(str1) 
//     return answerString;

// }


// const anyString = (str1:string) =>{
//     if((str1.length > 8) && !(str1.includes('qwerty'))){
//         return str1 + 'daposhelti'
//     }
//     else{
//         return 'sam takoi'
//     }
    
// }


// const polidrom = (str1:string) =>{
//     if(str1 == str1.split('').reverse().join('')){
//             return(`Слово ${str1} - палиндром`)
//         }
//         else{
//             return 'sosi'
//         }
// }

// console.log(doString(polidrom))


// type teleOperators = 'Beeline' | 'Tele2' | 'Kcell' | 'Active'
// const oneOperator: teleOperators = 'Beeline'
// const chooseOperator = (oneOperator:teleOperators) =>{

//     if(oneOperator === 'Beeline'){
//         return `Поздравляем вы выбрали Билайн живете на яркой стороне, стоимость нашего продукта равна ${400}$`
//     }
//     else if(oneOperator === 'Active'){
//         return `Поздравляем вы выбрали Актив будьте всегда активны, стоимость нашего продукта равна ${900}$`
//     }
//     else if(oneOperator === 'Tele2'){
//         return `Поздравляем вы выбрали tele2 будьте всегда pedikom, стоимость нашего продукта равна ${1000}$`
//     }
//     else if(oneOperator === 'Kcell'){
//         return `Поздравляем вы выбрали Kcell будьте животым если нет шкибиди доп доп ес ес, наш продукт бесплатный`
//     }
//     else{
//         return 'sak'
//     }
// }

// console.log(chooseOperator(oneOperator)) 


// type Tperson = {
//     age: number,
//     name: string,
//     id?:number | string
// }

// interface IPerson {
//     age: number,
//     name: string,
//     id?:number | string
// }

// let person:IPerson = {
//     age:12,
//     name: 'Zhenya'
// }
// // создание нового интерфейса на основе TPerson type
// type TPerson = Tperson & {
//     newKey:number
// }
// // создание нового интерфейса на основе IPerson interface
// interface IPerson2 extends IPerson{
//     newKey:number
// }
// // перезапись ключа 
// person.age = 13;

// const ArrayYear: number[] = [2014, 2015, 2016, 2017 , 2018, 2019 , 2020 , 2021 , 2022 , 2023 , 2024]
// const NameYear: string[] = ['Весна' , 'Осень' , 'Лето' , 'Зима']
// console.log(NameYear[2])
// console.log(NameYear[3])
// console.log(ArrayYear[0])
// console.log(ArrayYear[8])

// const ArrayObject:IPerson[]  = [
//     {
//         name: 'John',
//         age: 13,
//     },
//     {
//         name: 'bek',
//         age: 17,
//     },
//     {
//         name: 'sok',
//         age: 22,
//     }

// ]

// console.log(ArrayObject[1].age)
// console.log(ArrayObject[0].name)
// console.log(ArrayObject[2])

    


// // console.log(array[array.length -1])
// let num = 0;
// // while пока действие не случится будет работать
// while(num <20){
//     console.log('номер повторения:' + num)
//     num++;
// }
// // цикл for выполняется определенное кол-во раз
// for( let i = 0; i < 10; i++){
//     console.log('повтороение ' + i)
// }

// //пример чтобы узнать длину массива

// for(let i = 0; i < ArrayYear.length; i++){
//     console.log(ArrayYear[i])
// }

// interface IMonth  {
//     title:string,
//     days:number
// }

// let monthes:IMonth[] = [
//     {
//         title:'Январь',
//         days:31
//     },
//     {
//         title:'Февраль',
//         days:30
//     },
//     {
//         title:'Март',
//         days:29
//     },
//     {
//         title:'Апрель',
//         days:28
//     },
//     {
//         title:'Май',
//         days:27
//     }

// ]
// //добавление нового элемента в массив push - добавляет  элемент в конец массива unshift в начало нового массива
// monthes.push({
//     title: 'пососо',
//     days: 25
// })
// // Находим месяца с днями меньше 30
// let monthesMore30Days = [];
// for(let i = 0 ; i < monthes.length; i++){
//     if(monthes[i].days < 30){
//         monthesMore30Days.push(monthes[i])
//     }
// }
// console.log(monthesMore30Days)

// // Расчитать сумму всех дней в массиве

// let sumOfDay:number = 0
// for(let i = 0 ; i < monthes.length; i++){
//     sumOfDay += monthes[i].days
// }
// console.log('Сумма всех дней в массиве:' + sumOfDay)


// let minDayMonth = (values:IMonth[]) =>
//     values.reduce((x,y) => Math.min(x,y.days) , Infinity);

// const vault = minDayMonth(monthes)

// console.log(vault)


// interface Product {
//     Milky : number;
//     Bread : number;
//     meat : number;
// }

// interface DayWeek {
//     [day:string]: Product

// }


// const dailyPrice: DayWeek = {
//     Monday: { Milky: 5, Bread: 5, meat: 5 },
//     Tueday: { Milky: 6, Bread: 6, meat: 6 },
//     Wednesday: { Milky: 7, Bread: 7, meat: 7 },
//     Fourthday: { Milky: 8, Bread: 8, meat: 8 },
//     Friday: { Milky: 9, Bread: 9, meat: 9 },
//     Saturday: { Milky: 10, Bread: 10, meat: 10 },
//     Sunday: { Milky: 11, Bread: 11, meat: 11 },
// }

// const meatPrice: number = 4;
// const milkyPrice: number = 5;
// const breadPrice: number = 8;
// let allMoney: number = 0;

// Object.entries(dailyPrice).forEach(([keys,value]) =>{
//     console.log(value)
//     allMoney += meatPrice * value.meat + breadPrice * value.Bread + milkyPrice * value.Milky
    
// })

// console.log(`Продано продукции на ${allMoney} $`)


// const companyZP:number[] = [120000 , 200000 , 300000 , 400000 , 500000]

// const buhalterStavka: number = 0.3;

// const minCmpanyZP: number = 120000;

// const calcZpBuhalter = (companyZP : number[]) => { 
//     let totalZp: number = 0;
//     for (let i = 0; i < companyZP.length; i++){
//         totalZp += Math.max(companyZP[i] , minCmpanyZP)
//     }
//     const ZpBuhalter: number = buhalterStavka * totalZp;
//     return ZpBuhalter;
// }

// const total: number = calcZpBuhalter(companyZP)
// console.log(`Зарплата бухалтера за месяц ${total}`)




// const yearSocial: number = 3;

// const chooseUrRank = (yearSocial:number) => {
//     if( yearSocial <= 2){
//         return 'лох педальный'
//     }
//     else if (yearSocial <= 4 || yearSocial > 2){
//         return 'ну так средняк'
//     }
//     else if(yearSocial > 4){
//         return `гуру вайба и чуханчика`
//     }
// }
// const urStatus = chooseUrRank(yearSocial)
// console.log(urStatus)


// interface IanimalType {
//     weight: number
// }


// const CalcFood = (weight: number) =>{
//     const weightAnimalFood: number = 4;
//     const dayInYear: number = 365;
//     const foodInDay: number = (weight / 100) * weightAnimalFood
//     const foodInYear: number = foodInDay * dayInYear;
//     return foodInYear;
// }

// const tiger: IanimalType = { weight: 200}
// const Dog: IanimalType = { weight: 100}
// const Crocodile: IanimalType = { weight: 50}

// const foodTigerInYear: number = CalcFood(tiger.weight)
// const foodCrocodileInYear: number = CalcFood(Crocodile.weight)
// const foodDogInYear: number = CalcFood(Dog.weight)

// console.log(`Тигр весом ${tiger.weight}  кг потребляет ${foodTigerInYear} кг корма в год`)
// console.log(`Крокодил весом ${Crocodile.weight}  кг потребляет ${foodCrocodileInYear} кг корма в год`)
// console.log(`Собака весом ${Dog.weight}  кг потребляет ${foodDogInYear} кг корма в год`)



// interface IOrder {
//     totalCost: number;
//     promoCode: boolean;
// }
// const calculateOrderCost = (order : IOrder) =>{
//     const freeCostDilivery: number = 4000;
//     const promoCodeDiscount: number = 15;
//     let finalCoast: number = order.totalCost
//     if(order.totalCost >= freeCostDilivery){
//         console.log('Ваша доставка будет бесплатный')
//     }
//     if(order.promoCode){
//         const discount: number = (promoCodeDiscount / 100) * order.totalCost;
//         finalCoast = finalCoast - discount
//         console.log(`Ваш промокод активирован. Cкидка составила ${promoCodeDiscount}%`)
//     }
//     return finalCoast;    
// }
// const orderUser: IOrder = {
//     totalCost: 5000,
//     promoCode: true
// }
// const finalOrderCost: number = calculateOrderCost(orderUser)    
// console.log(`Стоимость заказа: ${finalOrderCost}`)




// interface ITeleShow {
//     Nickelodion : number;
//     Jetix : number;
//     CartoonNetwork : number;
// }

// const teleShow : ITeleShow = {
//     Nickelodion : 100000,
//     Jetix: 40000,
//     CartoonNetwork: 200000
// }

// const calculateAdvertisment = (show: ITeleShow) => {
//     let advertismentNickelodion: number = 0;
//     let advertismentJetix: number = 0;
//     let advertismentCartoonNetwork: number = 0;
//     if(show.Nickelodion > 10000 || show.Jetix > 10000 || show.CartoonNetwork > 10000){
//         advertismentNickelodion = show.Nickelodion / 10000;
//         advertismentJetix = show.Jetix / 10000;
//         advertismentCartoonNetwork = show.CartoonNetwork / 10000
//         return `Реклама за час не будет превышать ${advertismentNickelodion} на канале Никелодион , на канале джетикс не будет превышать ${advertismentJetix} и на канале картун не больше ${advertismentCartoonNetwork} в час`
//     }
// }
// console.log(calculateAdvertisment(teleShow))



// enum StageGroup {
//     Selection = 'Отбор',
//     Concurs = 'Конкурс',
//     Duel = 'Дуэль',
//     Grand = 'Гранд'
// }

// interface IStatusCommand {
//     stage : StageGroup;
//     points : number;
// }


// const products = [
//     { title: "BOSH-30", category: "Холодильник", price: 150000 },
//     { title: "Samsung", category: "Пенсил", price: 120000 },
//     { title: "Airpods", category: "Наушники", price: 160000 }
//   ];
  

//   let mostExpensiveProduct = products[0];
//   for (let i = 1; i < products.length; i++) {
//     if (products[i].price > mostExpensiveProduct.price) {
//       mostExpensiveProduct = products[i];
//     }
//   }
//   console.log("Самый дорогой товар:", mostExpensiveProduct);
  
//   let cheapestProduct = products[0];
//   for (let i = 1; i < products.length; i++) {
//     if (products[i].price < cheapestProduct.price) {
//       cheapestProduct = products[i];
//     }
//   }
//   console.log("Самый дешевый товар:", cheapestProduct);

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 140000) {
//       products[i].price -= 40000;
//     }
//   }
//   console.log("Обнорвленные товары", products);
  
//   let categories: any = [];
//   for (let i = 0; i < products.length; i++) {
//     if (!categories.includes(products[i].category)) {
//       categories.push(products[i].category);
//     }
//   }
//   console.log("Категории товаров", categories);
  
  


// const numbers = [10 , 20 , 30 ,40 ,50 , 60 ,70 ,80 ,15 ,22 , 43]

// const maxNumberInArray = Math.max(...numbers);
// console.log(`Самое больше число ` , maxNumberInArray)

// const minNumberInArray = Math.min(...numbers);
// console.log(`Самое мелкое число ` , minNumberInArray)

// let allSumArray = 0;
// for (let i  = 0; i < numbers.length; i++){
//     allSumArray += numbers[i]
// }
// console.log(`сумма всех чисел`,allSumArray)

// const arrayFrom70 = numbers.filter(number => number >= 70)
// console.log(`массив с числами от 70` , arrayFrom70)

// const arrayBefore30 = numbers.filter(number => number < 30)
// console.log(`массив с числами до 30` , arrayBefore30)

// const newCombinatedArray = [...arrayBefore30 , ...arrayFrom70]
// console.log(`новый объеденный масив ` , newCombinatedArray)

// console.log(`кол-во элементов в новом массиве` , newCombinatedArray.length)

// numbers.forEach((num : number , index: number , array: number[]) =>{
//     if(num >= 30 && num <= 50 ){
//         array[index] = 20;
//     }
// })
// console.log(`массив с заменнеными числами 30-50 на 20` , numbers)

// numbers.forEach((num : number , index: number , array: number[]) =>{
//     if(num >= 50 && num <= 70 ){
//         array[index] = 80;
//     }
// })
// console.log(`массив с заменнеными числами 50 do 70 на 80` , numbers)

// let newSumOfNumber = 0;
// for(let i = 0; i < numbers.length; i++){
//     newSumOfNumber += numbers[i]
// }
// console.log(`сумма всех новыйх чисел в массиве равна`, newSumOfNumber)


// методы для добавления элементов в массив 

let numbers: number[] = [1,2,3,4,5]

numbers.push(8);
console.log(numbers) // добавил элемент в массив 


numbers.forEach(item =>{
    console.log(item)
})


numbers.sort((a,b) =>{
    return a-b
})

type Tcategory = 'smartphone' | 'laptop' 
interface IStuff {
    category: Tcategory,
    price: number,
    count: number

}

let stuffs:IStuff[] = [
    {
        category: 'smartphone',
        price: 2000000,
        count: 10
    },
    {
        category: 'laptop',
        price: 6000,
        count: 9
    },
    {
        category: 'smartphone',
        price: 690000,
        count: 4
    },
    {
        category: 'laptop',
        price: 610000,
        count: 5
    },
    {
        category: 'smartphone',
        price: 69000,
        count: 7
    },
]

// сделать отдельный массив под каждыукю категорию

let smartphones:IStuff[] = stuffs.filter((item) => {
return item.category === 'smartphone'
})
console.log(smartphones)

let laptops:IStuff[] = stuffs.filter((item) => {
    return item.category === 'laptop'
})
console.log(laptops)

smartphones.sort((a,b) =>{
    return b.price-a.price
})
console.log(smartphones)
laptops.sort((a,b) =>{
    return b.price-a.price
})
console.log(laptops)

 

let addStuffSmartphone = (category: Tcategory , price: number , count : number) =>{
    if(category === 'smartphone'){
        smartphones.push(
            {
                category: category,
                price: price,
                count: count
            }
        )
    }
    else{
        laptops.push(
            {
                category: category,
                price: price,
                count: count 
            }
        )
    }

    
}

console.log(addStuffSmartphone('smartphone' , 2000 , 10))
console.log(addStuffSmartphone('laptop', 100 ,10))



stuffs.push(
    {
        category: 'laptop',
        price: 1000,
        count: 10
    },
    {
        category: 'laptop',
        price: 100,
        count: 100
    },
    {
        category: 'smartphone',
        price: 1000,
        count: 10
    },
    {
        category: 'smartphone',
        price: 1000,
        count: 10
    }

)
console.log(stuffs)

smartphones.map((item) => item.price *= 1.1)
console.log(smartphones)


laptops.map((item) => item.price *= 0.8)
console.log(laptops)

smartphones.sort((a,b) =>{
    return a.price - b.price
})
console.log(smartphones)

laptops.sort((a,b) =>{
    return b.price - a.price
})
console.log(laptops)

const newArrayStuff = [...smartphones , ...laptops]
console.log(newArrayStuff)

newArrayStuff.sort((a,b)=>{
    return a.price - b.price
})
console.log(newArrayStuff)


// дз 
interface Employee {
    name: string
    age : number
    isActive : boolean
    salary? : number
}

const Employes: Employee[] =[

  { name: "Rina", age: 58, isActive: true },
  { name: "Kathryn", age: 25, isActive: false },
  { name: "Wilfred", age: 17, isActive: true },
  { name: "Genna", age: 26, isActive: true },
  { name: "Celle", age: 25, isActive: true },
  { name: "Torre", age: 24, isActive: false },
  { name: "Amerigo", age: 46, isActive: false },
  { name: "Shayne", age: 11, isActive: true },
  { name: "Darline", age: 32, isActive: false },
  { name: "Rourke", age: 64, isActive: false },

]
let defaultSalary: number = 50000;
const salaryAddActiveEmployes: number =  0.1;
const activeEmployes = Employes.map((Employee) =>{
    const salary = Employee.isActive
    ? defaultSalary * (1 + salaryAddActiveEmployes) : defaultSalary
    return { ...Employee , salary}

})

console.log(activeEmployes)

const stats = {
    AllEmployees: Employes.length,
    activeEmployees: Employes.filter((Employee) =>{
      return Employee.isActive
    }).length,
    noActiveEmployees: Employes.filter((Employee) =>{
        return !Employee.isActive
      }).length,
    totalSalary: activeEmployes.reduce((total , Emploee) => total + (Emploee.salary || 0) , 0)

}
console.log(stats)


type TCategory = 'smartphone' | 'laptop' 
interface ISTuff {
    category: TCategory,
    price: number,
    count: number

}
let stuff:ISTuff[] = [
    {
        category: 'smartphone',
        price: 20000,
        count: 10
    },
    {
        category: 'laptop',
        price: 600000,
        count: 9
    },
    {
        category: 'smartphone',
        price: 6900200,
        count: 4
    },
    {
        category: 'laptop',
        price: 610,
        count: 5
    },
    {
        category: 'smartphone',
        price: 6943000,
        count: 7
    }
]

let Smartphones : ISTuff[] = stuff.filter((item) =>{
    return item.category == 'smartphone'
})
console.log(Smartphones)

let Laptops : ISTuff[] = stuff.filter((item) =>{
    return item.category == 'laptop'
})
console.log(Laptops)

Smartphones.sort((a,b) =>{
    return a.price - b.price
})
console.log(Smartphones)
Laptops.sort((a,b) =>{
    return a.price - b.price
})
console.log(Laptops)

let functionAddProduct = (category: TCategory , price: number , count : number): void =>{
    if(category === 'smartphone'){
        Smartphones.push(
            {
                category: category,
                price: price,
                count: count
            }
        )
    }
    else{
        Laptops.push(
            {
                category: category,
                price: price,
                count: count
            }
        )
    }

}
functionAddProduct('smartphone', 10, 20);
functionAddProduct('laptop', 20, 10);
console.log(Smartphones)
console.log(Laptops)

stuff.push(
    {
        category: 'laptop',
        price: 200,
        count: 100
    },
    {
        category: 'laptop',
        price: 100,
        count: 100
    },
    {
        category: 'smartphone',
        price: 1000,
        count: 10
    },
    {
        category: 'smartphone',
        price: 1000,
        count: 10
    }

)
console.log(stuff)

Smartphones.map((item) =>{
    item.price *= 1.1
})
console.log(Smartphones)

Laptops.map((item) =>{
    item.price *= 0.8
})
console.log(Laptops)

Smartphones.sort((a,b) =>{
    return a.price - b.price
})
console.log(Smartphones)
Laptops.sort((a,b) =>{
    return b.price - a.price
})
console.log(Laptops)

const newArrayTwice = [...Smartphones , ...Laptops]
console.log(newArrayTwice)

newArrayTwice.sort((a,b) =>{
    return a.price - b.price
})
console.log(newArrayTwice)


interface Employes {
    name: string
    age : number
    isActive : boolean
    salary? : number
}

const Employers: Employes[] =[

    { name: "Rina", age: 58, isActive: true },
    { name: "Kathryn", age: 25, isActive: false },
    { name: "Wilfred", age: 17, isActive: true },
    { name: "Genna", age: 26, isActive: true },
    { name: "Celle", age: 25, isActive: true },
    { name: "Torre", age: 24, isActive: false },
    { name: "Amerigo", age: 46, isActive: false },
    { name: "Shayne", age: 11, isActive: true },
    { name: "Darline", age: 32, isActive: false },
    { name: "Rourke", age: 64, isActive: false },
  
  ]

let activeEmployJobs = Employers.filter((employ) =>{
        return employ.isActive
    })

console.log(activeEmployJobs)

for( let i = 0; i < activeEmployJobs.length; i++){
    const employ =  activeEmployJobs[i] 
    if(employ.age > 1 && employ.age < 20){
        employ.salary = (employ.salary || 0) + 50000;
    }
    else if(employ.age > 20 && employ.age < 30){
        employ.salary = (employ.salary || 0) + 100000;
    }
    else if(employ.age > 30 && employ.age < 40){
        employ.salary = (employ.salary || 0) + 150000;
    }
    else if(employ.age > 40 && employ.age < 50){
        employ.salary = (employ.salary || 0) + 200000;
    }
    else if(employ.age > 50 && employ.age < 60){
        employ.salary = (employ.salary || 0) + 250000;
    }
}

Employers.sort((a,b)=>{
    return a.age - b.age
})
console.log(Employers)
console.log(activeEmployJobs)

import {testFunction} from "./src/scripts/geron"; // обычеый импорт того чего хочешь

import * as TestObject from './src/scripts/geron' // импортируешь все объекты 

import test from "./src/scripts/geron"; // импорт при дефолтном экспорте


const office = {
    tech: {
        employersCount:10,
        jobsCount: 5
    },
    design:{
        employersCount:2,
        jobsCount: 10
    }
}

let summ = office.tech.jobsCount + office.design.jobsCount
let sumOfWorks = 0;
Object.entries(office).forEach(([keys,values]) =>{
    sumOfWorks += values.jobsCount
})






