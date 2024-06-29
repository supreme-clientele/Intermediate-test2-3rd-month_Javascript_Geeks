// 1) функция для извлечения чисел 

function extractNumbers(str) {
    return str.match(/\d+/g).map(Number)
}

console.log(extractNumbers("a1fg5hj6")); // вернёт [1, 5, 6]


// 2) числа фибоначчи
function fibonacciWithDelay(n, prev = 0, curr = 1) {
    if (curr > 144) return;
    console.log(curr)
    setTimeout(() => 
        fibonacciWithDelay(n, curr, prev + curr), 1000);
}

fibonacciWithDelay(144)



// 3) запрос на API используя async await и try catch
async function fetchProductTitles() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        data.forEach(product => {
            console.log(product.title)
        });
    } catch (error) {
        console.log(error)
    }
}

fetchProductTitles()


// 4) 5 кнопок со цветами
document.querySelector('.button').addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        document.body.style.backgroundColor = event.target.textContent;
    }
});


// 5) Toggle Block
const square = document.getElementById('square');
const toggleButton = document.querySelector('.toggle');

toggleButton.addEventListener('click', () => {
    if (square.style.display === 'none' || square.style.display === '') {
        square.style.display = 'block';
    } else {
        square.style.display = 'none';
    }
});


// 6) Counter +1
const counterElement = document.querySelector('.counter');
    let count = 0;

    // Функция для увеличения счётчика и его отображения
    function increaseCounter() {
        if (count <= 100) {
            counterElement.textContent = count;
            count++;
        } else {
            clearInterval(interval); // останавливаем интервал при достижении 100
        }
    }


// 7) 
class JSONFetcher {
    async fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log('Данные JSON:', data);
        } catch (error) {
            console.log(error)
        }
    }
}

fetchData();










