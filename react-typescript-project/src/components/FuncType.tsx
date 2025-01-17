import React from "react";

const FuncType = () => {
  // khai báo
  const name: string = "Nguyen Van A";
  const printName = (name: string): string => {
    return name;
  };
  // Gọi
  printName(name);

  interface IPerson {
    name: string;
    age: number;
  }

  const person: IPerson = {
    name: "Nguyen Van A",
    age: 18,
  };

  const printPerson = (person: IPerson): void => {
    const {age, name} = person;
    console.log(name + age);
  };

  printPerson(person);

  interface IProduct {
    name : string;
    price : number;
  }


  const products : IProduct[] = [
    {
        name: "Iphone",
        price: 1000,
    },
    {
        name: "Samsung",
        price: 2000,
    },
    {
        name: "Xiaomi",
        price: 3000,
    },
  ]

  return <div>FuncType</div>;
};

export default FuncType;
