export type a = {
  name: string;
};

export type b = {
  age: number;
  surn: "surname";
};

export type c = a | b;

const obj: c = {
  name: "shanshe",
};
