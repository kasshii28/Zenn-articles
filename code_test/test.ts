type A0 = new (a: number, b: string) => object;
class A {
    constructor(a: number, b: string) {}
}

function func(): string {
    return "hello"
}

type T0 = ReturnType<typeof func>

class B {
    a = 0;
    b = "hello";
}

type B0 = InstanceType<typeof B>

// 
class C {
    constructor(a: number, b: string) {}
}

type C1 = InstanceType<typeof C>

function createStreetLight<T extends string>(
    colors: T[],
    defaultColor?: T
) {
    return {
        colors,
        defaultColor
    }
}

type colors = "red" | "green" | "blue"

const colors: colors[] = ["red", "green", "blue"]

createStreetLight(colors, "red")
createStreetLight(colors, "yellow")

function func1(this: {a: number }, b: string) {}

type T4 = ThisParameterType<typeof func1>
// {a: number, b: string}

function func2(a: number, b: string){}

type T1 = ThisParameterType<typeof func2>

function toHex(this: Number) {
    return this.toString(16);
}
   
const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

function func0(this: { a: number }): string{
    return `${this.a}year`
}

type func0Type = typeof func0
type Omitfunc0 = OmitThisParameter<typeof func0>

interface Person {
    name: string;
    age: number;
}

const obj = {
    name: "test",
    hello() {
        console.log(`Hello ${this.name}`)
    }
}

type ObjMethod = {
    name: string;
    hello(): void;
} & ThisType<Person>

const obj2: ObjMethod = {
    name: "test",
    hello() {
        console.log(`Hello ${this.name}`)
        console.log(`I'm ${this.age}`)
    }
}

type T6 = "Hello, world"

type UpperT = Uppercase<T6>
// HELLO, WORLD

type LowerT = Lowercase<T6>
// hello, world

type CapT = Capitalize<LowerT>
// Hello, world

type UnCapT = Uncapitalize<UpperT>
// hELLO, WORLD
