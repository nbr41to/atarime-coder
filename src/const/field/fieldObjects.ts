export const baseFieldObjects = [
  {
    code: 0,
    name: 'empty',
    isEnterable: true,
  },
  {
    code: 1,
    name: 'tree1',
    isEnterable: false,
  },
  {
    code: 2,
    name: 'computer',
    isEnterable: true,
  },
  {
    code: 3,
    name: 'strawberry',
    isEnterable: true,
  },
  {
    code: 4,
    name: 'girl',
    isEnterable: true,
  },
  {
    code: 5,
    name: 'ojizou',
    isEnterable: false,
  },
];

export const enterableCodes = baseFieldObjects
  .filter((object) => object.isEnterable)
  .map((object) => object.code);
