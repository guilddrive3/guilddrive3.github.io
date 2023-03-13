let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  //let usersById = groupById(users);

  const indexedUsers = {};

  for (const user of users){
    indexedUsers[user.id] = user;
  }

  console.log("indexed is: ", indexedUsers);

  console.log("via reduce: ", users.reduce(function(indexedUsers, user){indexedUsers[user.id] = user; return indexedUsers}, {}));