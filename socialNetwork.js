var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

//List everyone and for each of them, list the names of who they follow and who follows them
function whoFollowsWho(){
  let obj = {};
  for(let i in data){
    let names = data[i].name;
    obj[names] = {
      follows: [],
      followers: []
    };
    for(let j in data[i].follows){
      let followers = data[i].follows[j];
      let followerName = data[followers].name;
      obj[names].follows.push(followerName);
    }
  }
  for(let i in data){
    let names = data[i].name;
    for(let j in data[i].follows){
      let followers = data[i].follows[j];
      let followerName = data[followers].name;
      obj[followerName].followers.push(names);
    }
  }
  return obj;
}


//Identify who follows the most people

function followsMost(){
  let info = whoFollowsWho();
  let numPplFollowing = info['Alice'].follows.length;
  let numPplFollowingName = 'Alice';
  for(let name in info){
    if(info[name].follows.length > numPplFollowing){
     numPplFollowing = info[name].follows.length;
     numPplFollowingName = name;
    }
  }
  return numPplFollowingName;
}

console.log(followsMost() + " follows the most people.");

// Identify who has the most followers
function mostFollowers(){
  let info = whoFollowsWho();
  let numFollowers = info['Alice'].follows.length;
  let nameOfList = 'Alice';
  for(let name in info){
    if(info[name].follows.length > numFollowers){
     numFollowers = info[name].follows.length;
     nameOfList = name;
    } 
  }
  return nameOfList;
}

console.log(mostFollowers() + " has the most followers");

// Identify who has the most followers over 30

// Identify who follows the most people over 30

// List those who follow someone that doesn't follow them back

// List everyone and their reach (sum of # of followers and # of followers of followers)