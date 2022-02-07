let user = {
  firstname: "vaibhav",
  lastname: "sirsikar",
  address: {
    permanant: {
      addreeLine1: "Green Park Colony",
      addreeLine2: "Block No W2",
      city: "Wardha",
      pincode: 442001,
      state: "Maharashtra",
    },
    office: {
      addreeLine1: "Pheonix Marketcity",
      addreeLine2: "10th Floor",
      city: "Pune",
      pincode: 411021,
      state: "Maharashtra",
    },
    current: {
      addreeLine1: "Keshav nagar",
      addreeLine2: "Pretige Gold,907",
      city: "Pune",
      pincode: 411038,
      state: "Maharashtra",
    },
  },
};

let newObject = {};

let Magic = (inputObject, parentKey) => {
  for (key in inputObject) {
    if (typeof inputObject[key] === "object") {
      Magic(inputObject[key], parentKey ? parentKey + "_" + key : key);
    } else {
      newObject[parentKey ? parentKey + "_" + key : key] = inputObject[key];
    }
  }
};

Magic(user, "new");

console.log(newObject);
