// ! 화살표 함수는 함수 선언문으로 정의할 수 없고 함수 표현식으로 정의 해야한다.
const multiply = (x,y) => x*y;

console.log(multiply(2,3))

// ! 매개변수가 여러개인 경우 소괄호 ()안에 매개변수를 선언
const arrow = (x,y) => x*y+x;

console.log(arrow(5, 6))

// ! 매개변수가 한 개인 경우 소괄호 ()를 생략 가능
const arrowOne = x => x= 3;
console.log(arrowOne())

// ! 매개변수가 없는 경우 소괄호 ()를 생략 불가
const arrowZero = () => y= 4;
console.log(arrowZero())

// * 함수 몸체 정의 : 
// ! 함수 몸체가 하나의 문으로 구성된다면 함수 몸체를 감싸는 중괄호 {}를 생략 가능
const power = x => x ** 2;
console.log(power(2))

const powerOther = x => {return x ** 2;}
console.log(powerOther(2))

// ! 객체 리터럴을 반환하는 경우 객체 리터럴을 소괄호 ()로 감싸주어야 한다.
const create = (id, content)=>({id, content})
console.log(create(1, 'javascript'))

const createOther = (id, content) => {return {id, content}}
console.log(createOther(1, 'react'))

// ! 함수 몸체가 여러 개의 문으로 구성된다면 함수 몸체를 가싸는 중괄호{}를 생략 가능 / 반환값이 있다면 명시적으로 반환해야 한다.
const sum = (a, b) => {
    const result = a + b;
    return result;
}
console.log(sum(3,4))

// ! 즉시 실행 함수로 사용 가능
const person = (name => ({
    sayHi(){return `hi? My name is ${name}.`;}
}))('Jeong');

console.log(person.sayHi())

// ! 고차 함수에 인수로 전달 가능
// ES5
/*
[1, 2, 3].map(function(v){
    return v * 2;
})
*/
// ES6
const oneTwoThee = [1, 2, 3]
let num3 = oneTwoThee.map(v=>v*2)
console.log(num3)


