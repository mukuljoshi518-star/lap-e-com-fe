/* eslint-disable prettier/prettier */
import { createContext, useState } from "react";

export const LaptopContext = createContext();

export function LaptopProvider({ children }) {
  const [laptops, setLaptops] = useState([
    {
      id: 1,
      name: "HP Pavilion 15",
      brand: "HP",
      price: 599,
      cpu: "Intel i5",
      ram: "8GB",
      storage: "512GB SSD",
      image: "",
    }
  ]);

  const addLaptop = (laptop) => {
    laptop.id = Date.now();
    setLaptops([...laptops, laptop]);
  };

  const updateLaptop = (updated) => {
    setLaptops(
      laptops.map((lap) => (lap.id === updated.id ? updated : lap))
    );
  };

  const deleteLaptop = (id) => {
    setLaptops(laptops.filter((lap) => lap.id !== id));
  };

  return (
    <LaptopContext.Provider value={{ laptops, addLaptop, updateLaptop, deleteLaptop }}>
      {children}
    </LaptopContext.Provider>
  );
}