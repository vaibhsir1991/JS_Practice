class HashTables {
  constructor() {
    this.values = {};
    this.length = 0;
    this.size = 0;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    let hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash][key]) {
      this.length++;
    }
    this.values[hash][key] = value;
  }

  search(key) {
    let hash = this.calculateHash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    }
    return null;
  }
}

const ht = new HashTables();

ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "50");

console.log(ht);
console.log(ht.search("Italy"));
