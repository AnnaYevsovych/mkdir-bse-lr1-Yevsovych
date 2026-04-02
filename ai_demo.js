// Напиши функцію на JavaScript, яка обчислює площу кола по радіусу
function calculateCircleArea(radius) {
    if (radius < 0) {
        return "Радіус не може бути від'ємним числом.";
    }
    return Math.PI * radius ** 2;
}
console.log(calculateCircleArea(5));