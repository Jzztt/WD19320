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
    const { age, name } = person;
    console.log(name + age);
  };

  printPerson(person);

  interface IProduct {
    id: number;
    name: string;
    price: number;
  }

  const products: IProduct[] = [
    {
      id:1,
      name: "Iphone",
      price: 1000,
    },
    {
      id:2,
      name: "Samsung",
      price: 2000,
    },
    {
      id:3,
      name: "Xiaomi",
      price: 3000,
    },
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuncType;
