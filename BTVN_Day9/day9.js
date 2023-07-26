//Bai 1
const categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
    },
  ];
var getCategories = function (categories, parentId = 0) {
    if (categories.length) {
      return categories.map(function (category) {
        if (category.parent === parentId) {
          delete category.parent;
          return category;
        }

        categories.forEach(function (item) {
          if (category.parent === item.id) {
            if (item.children === undefined) {
              item.children = [];
            }

            item.children.push(category);
            delete category.parent;
          }
        });
      });
    }
  };

  var result = getCategories(categories).filter(function (value) {
    return value !== undefined;
  });

  console.log(result);

//Bai 2
Array.prototype.reduce2 = function(callback, result) {
  var i = 0;
  if(arguments.length < 2) {
      i = 1;
      result = this[0];
  }
  for(; i < this.length; i++) {
          result = callback(result, this[i], i, this);
  }
  return result;
}
const numbers = [1, 3, 5, 7, 9];
const result = numbers.reduce2(function(total, number){
   return total + number;
})
console.log(result);

//Bai 3
Array.prototype.filter2 = function(callback){
  output = [];
  for(var i = 0; i < this.length; i++){
      if(this.hasOwnProperty(i)){
          var result = callback(this[i], i, this);
          if(result){
              output.push(this[i]);
          }
      }
  }
  return output;
}
const courses = [
  {
      name: 'Javascript',
      coin: 700,
  },
  {
      name: 'PHP',
      coin: 860,
  },
  {
      name: 'Java',
      coin: 760,
  }
];
const newArr = courses.filter2(function(courses, i, array){
  return courses.coin > 700;
});
console.log(newArr);

//Bai 4
Object.prototype.getCurrency = function (item) {
  return this + item;
};

var price = "12000";
console.log(price.getCurrency("đ"));
