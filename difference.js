// ! 화살표 함수는 인스턴스를 생성할 수 없는 non-constructor다.
//const Foo = () => {};
//new Foo(); //TypeError: Foo is not a constructor

// ! 인스턴스를 생성할 수 없으므로 prototype 프로퍼티가 없고 프로토 타입도 생성하지 않는다.
const Foo2 = () => {};
Foo2.hasOwnProperty('prototype')

// ! 중복된 매개변수 이름을  선언 할 수 없다. / 일반 함수는 중복된 매개변수 이름을 선언해도 에러가 발생하지 않음
// ? 단, srict mode에서 중복된 매개변수 이름을 선언하면 에러 발생
function normal(a, a){return a + a}
console.log(normal(2, 3))

const arrow = (a, a) => a + a; //SyntaxError: Duplicate parameter name not allowed in this context

// ! 화살표 함수는 함수 자체의 this, arguments, super, new.target 바인딩을 갖지 않는다.
