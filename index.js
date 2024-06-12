// const windowWidth = window.innerWidth;
// console.log(`ширина вікна ${windowWidth}px`);

// ==================Навігація по DOM==============
// ==========================Пошук з вузлами================================
// Отримуємо об'єкт body
const bodyElement = document.body;

// Перший і останній дочірні елементи або вузли
const firstChildNode = bodyElement.firstChild
const lastChildNode = bodyElement.lastChild
//  console.log(firstChildNode); // в консолі бачимо перший вузол переводу строки між body та h1 хоч в html ми його не бачимо, але  в дереві DOM це окремий вузол
//  console.log(lastChildNode);

// Колекція (не масив) childNodes має в собі список всіх дітей, включно з текстовими вузлами
const childNodes = bodyElement.childNodes;
// console.log(childNodes);
// for (let node of childNodes)
   // console.log(node) // за допомогою циклу вивели колекцію в консоль

// Для перевірки наявності дочірніх вузлів існує
// спеціальна функція hasChildNodes()
// console.log(bodyElement.hasChildNodes());

// ==========================Пошук без вузлів================================
/* Для більшості задач текстові вузли та вузли коментарі нам непотрібні
 Нам потрібно маніпулювати вузлами-елементами (теги)*/

//  Отримуємо колекцію ВСІХ дочірніх елементів (без вузлів)
// const bodyChildren = bodyElement.children;
// console.log(bodyChildren);

// Перший і останній дочірні елементи (без вузлів)
const firstElementChildNode = bodyElement.firstElementChild;
const lastElementChildNode = bodyElement.lastElementChild;
   // console.log(firstElementChildNode);
   // console.log(lastElementChildNode);

   // Cусіди і батьківські елементи
   const previousSibling = bodyElement.previousElementSibling;
   const nextSibling = bodyElement.nextSibling;
   const parentElement = bodyElement.parentElement;

   // console.log(previousSibling);
   // console.log(nextSibling);
   // console.log(parentElement);
   
// ==========================Пошук об'єктів querySelector================================
// Пошук по селектору класа
// const elemsOne = document.querySelectorAll('.lesson_list');
// console.log(elemsOne);

// Пошук по селектору тега
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo[2]);
// for(var item of elemsTwo){ // за допомогою циклу вивели колекцію в консоль
// console.log(item); 
// }

// Пошук по змішаному селектору тега та класа
// const elemsThree = document.querySelectorAll('li.lesson_item-list');
// console.log(elemsThree);

// Пошук по тегу першого рівня вкладеності >
// const elemsFour = document.querySelectorAll('.lesson_list>li');
// console.log(elemsFour);

// Пошук по декільком класам
// const elemsFive = document.querySelectorAll('.lesson_list , .lesson_text' );
// console.log(elemsFive);

// Пошук по вкладеним класам
// const elemsSix = document.querySelectorAll('.lesson_list .lesson_text' );
// console.log(elemsSix);

// Пошук по ID
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// Пошук по атрибуту
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// Пошук по атрибуту із значенням
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);

// Пошук першого об'єкта querySelector без All
// const elemsTen = document.querySelector('li');
// console.log(elemsTen);

// =============== Різниця між querySelectorAll та getElementsBy===========
// Метод querySelectorAll повертає статичну колекцію
const listStatic = document.querySelectorAll('.lesson_item-list');
console.log(listStatic);
// Методи getElementsBy...повертають живу (актуальну інформацію DOM дерева) колекцію
const elemsLive = document.getElementsByClassName('lesson_item-list')
console.log(elemsLive);
// додамо новий html об'єкт
const lessonList = document.querySelector('.lesson_list');
lessonList.insertAdjacentHTML(
   'beforeend',
   '<li class="lesson_item-list">Новий пункт</li>'
);
// бачимо в консолі, що в живій колекції getElementsBy додався новий об'єкт  
// в статичній querySelectorAll все лишилось без змін

               // Вміст елемента innerHTML
   
// Отримаємо об'єкт
   // const lessonText = document.querySelector('.lesson-new_text');
// Отримаємо вміст об'єкта "як є" разом з HTML
   // const lessonTextContent = lessonText.innerHTML;
   // console.log(lessonTextContent);

// дописуємо вміст об'єкта (дзеркальні лапки ``)
   // lessonText.innerHTML = 
   //  `<p>${lessonTextContent}</p> <p><span class="yellow">Привіт світ!</span> я вивчаю JS</p>`;
   //  console.log(lessonText.innerHTML);

      // Вміст елемента outerHTML ( дістає повністю з об'єктом)

            // Отримаємо об'єкт
   // const lessonText = document.querySelector('.lesson-new_text');
// Отримаємо вміст об'єкта "як є" разом з HTML
   // const lessonTextContent = lessonText.outerHTML;
   // console.log(lessonTextContent);

// дописуємо вміст об'єкта (дзеркальні лапки ``)
   // lessonText.outerHTML = 
   //  ` <div ><span class="yellow">Привіт світ!</span> я вивчаю JS</div>`;
   //  console.log(lessonText.outerHTML); // але побачим старий запис з <p>
   
               //  Методи вставлення:
// Отримаємо об'єкт     
   const lesson = document.querySelector('.lesson');
//  Створення нового елемента (тега)
   const newElement = document.createElement('div');
// Наповнюємо новий елемент
   newElement.innerHTML = `<h1>Новий Елемент</h1>`;
   // console.log(newElement);

// Вставляємо новий елемент:
// ...перед об'єктом
   // lesson.before(newElement);
// ...після об'єкта
   // lesson.after(newElement);
//   ...всередину та на початок об'єкта
   // lesson.prepend(newElement);
//   ...всередину та в кінець об'єкта
   // lesson.append(newElement);

   // Якщо нам потрібно вставити  html теги любим із методів вище
   // lesson.append(`<h1>Новий Елемент</h1>`); // то ми побачимо, що теги вставились як звичайний текст
   //  Щоб вставити строку з html тегами як це робить inner html використовують 

   //========================= метод insertAdjacentHTML
   // const textElement = document.querySelector('.lesson_text');
   // textElement.insertAdjacentHTML(
   //    'afterbegin', // перший параметр відповідає за те, куди саме буде доданий html тег
      // `<h1>Новий Елемент</h1>`
   // )
   // 'beforebegin' - вставити html безпосередньо перед textElement
   // 'afterbegin' - вставити html на початок textElement
   // 'beforeend' - вставити html в кінець textElement
   // 'afterend' - вставити html безпосередньо після textElement

                  // Переніс елементів
// const textElement = document.querySelector('.lesson_text');
// lesson.before(textElement);
                  // Переніс клонованих елементів
// const textElement = document.querySelector('.lesson_text');
// клонування без дочірніх елементів
// const cloneTextElement = textElement.cloneNode()

// клонування разом з вмістом
// const cloneTextElement = textElement.cloneNode(true)

// lesson.before(cloneTextElement);
                  // видалення елементів
// const textElement = document.querySelector('.lesson_text');
// textElement.remove()

               // Управління класами className та classList

   // let a = 2 + 1;
   // let b = 4;
   // let result = 8 - (a =(b + 1));
   // console.log("Результат в душках " + a);
   // console.log(result);
