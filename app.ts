//Primitive types: number string boolean;
// let a:boolean = true;

// a = "string";

// console.log(a);

//Arrays
const array: string[] = ["5", "string", "hello", 5, false];
array.push(true);

//Any
let obj: any = { a: 5, b: "string" };
//{ a:5, b:"string"}
obj.c = 6;
//{ a:5, b:"string",c:6}
obj = "I am Groot!";
//"I am Groot!"
console.log(obj);

//Functions

function foo(a: string | number[] | number) {
  return a.length;
}

foo("5");
foo([4, 5]);
foo(5);

//anonymous functions

const array2 = [1, 2, 3, 4, 5, 6];
const names = ["Alice", "Bob", "Eve"];

names.forEach(function (el) {
  el.toUppercase();
});

names.forEach((el) => {
  console.log(el);
});

//Object functions

//{a:5,b:"string",c:true}
function objFunc(obj: {
  a: number;
  b: string;
  c: boolean;
  isDeleted?: boolean;
}) {
  console.log(obj.isDeleted.toString());

  if (obj.isDeleted !== undefined) {
    console.log(obj.isDeleted.toString());
  }

  console.log(obj.isDeleted?.toString());
}

objFunc({ a: 5, b: "string", c: true });
// isDeleted:true
objFunc({ a: 5, b: "string", c: true, isDeleted: true });

//Type Aliases

type ArrayType = {
  a: number;
  b: number;
  c: string;
};

type NewType = {
  name: string;
  isDeleted: boolean;
  group: number;
  newParam?: string;
  array: ArrayType[];
};

type secondNewType = NewType & {
  newParam2: boolean;
};

function groupFunc({ name, isDeleted, group, array }: secondNewType) {
  //   console.log(name, isDeleted, group);

  array.forEach((el) => {
    console.log(el);
  });
}

groupFunc({
  name: "Serik",
  array: [{ a: 1, b: 2, c: "4" }],
  isDeleted: false,
  group: 10,
  newParam: "new",
  newParam2: true,
});

//Type Aliases in primitives
type ID = number | string;

// careful!
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput()); //waiting for string

// Can still be re-assigned with a string though
userInput = "new input";

//Interfaces:
interface myClassI {
  surname: string;
  age: number;
  array: number[];
}

//backend - npm library
//lodash  => arrayFlatten  => <ArrayFlattenInterface>

// interface ArrayFlattenInterface{
//     push: blablabla
// }

interface myClassI {
  group: number | string;
}

interface myGroupI extends myClassI {
  groupName: string;
}

const boo = ({ surname, age, array }: myGroupI) => {
  console.log(surname, age, array);
};

boo({
  surname: "Berikov",
  age: 5,
  array: [4, 3, 5, 6],
  group: 10,
  groupName: "c-04",
});

// Type Assertions

// tsx  = > jsx
const canvas = document.getElementById("canvas-element") as HTMLCanvasElement;

const hello = "hello" as number;

function aFunc(possiblyStringButIKnowThatNotString: string) {
  let hello2 = possiblyStringButIKnowThatNotString as any as number;
}

//Literal Types

let a: "hello world" | "good by world" = "hello world" as any;
console.log(a);
a = "hello world";
a = "good by world";

const b = "hello world";

console.log(b);

const changeFlex = (
  marginLeft: number,
  flex: "flex-end" | "flex-start" | "center"
) => {
  return <div style={{ marginLeft, justifyContent: flex }}>...</div>;
};

changeFlex(50, "center");

enum enumSWData {
  ID = 5,
  IDv2 = 10,
}

const getSWDataByID = (id: enumSWData) => {
  console.log(id);
};

getSWDataByID(enumSWData.IDv2);

enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  // ...
}

respond("Princess Caroline", UserResponse.No);
