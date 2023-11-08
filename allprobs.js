/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};

//SOLVED
function printBreadthFirst(start) {
  //initializing traversal by creating a set to store visited nodes and queue containing the nodes to visit
  let queue = [];
  let visited = new Set();

  //add the first node to both the queue and teh visited set
  queue.push(start);
  visited.add(start);

  //while the queue is not empty deqeue the first node and save it as as convenient variable current
  while (queue.length) {
    let current = queue.shift();

    //do the damn thing - perform action which is wanted for each node
    console.log(current);

    //once you do the thing, add the nodes unvisited to the back(push) of the queue, and add(add) them to the visited set and repeat
    for (let val of adjList[current]) {
      // console.log('THE VAL',val)
      if (!visited.has(val)) {
        visited.add(val);
        // console.log('BEFORE THE PUSH', queue)
        queue.push(val);
        // console.log('AFTER THE PUSH', queue)
      }
    }
  }
}

console.log('First Test:');
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  3, 2, 4, 1, 5, 6
console.log('Second Test:');
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  6, 4, 3, 5, 2, 1
console.log('Third Test:');
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  4, 3, 5, 6, 2, 1
*/

/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
//Solved
function printDepthFirst(start) {
  //intitalize traversal by creating the stack and set
  let stack = [];
  let visited = new Set();

  //adde the first node to the stack and the visited set
  stack.push(start);
  visited.add(start);

  //while the stack is not empty empty pop the node on the top of the stack
  while (stack.length) {
    //create a currentNode by popping
    let current = stack.pop();

    //do the thing
    console.log(current);

    //similar to breadth first but now we add to the top of the stack and add to visited
    for (let val of adjList[current]) {
      if (!visited.has(val)) {
        stack.push(val);
        visited.add(val);
      }
    }
  }
}

console.log('First Test:');
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
// One possible solution:  3, 4, 6, 5, 1, 2
console.log('Second Test:');
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
// One possible solution:  6, 4, 5, 2, 1, 3
console.log('Third Test:');
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
// One possible solution:  4, 6, 5, 2, 1, 3
*/

/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
//SOLVED
function printBreadthFirst(start) {
  //initializing traversal by creating a set to store visited nodes and queue containing the nodes to visit
  let queue = [];
  let visited = new Set();
  let answer = [];

  //add the first node to both the queue and teh visited set
  queue.push(start);
  visited.add(start);

  //while the queue is not empty deqeue the first node and save it as as convenient variable current
  while (queue.length) {
    let current = queue.shift();

    //do the damn thing - perform action which is wanted for each node
    answer.push(current);

    //once you do the thing, add the nodes unvisited to the back(push) of the queue, and add(add) them to the visited set and repeat
    for (let val of adjList[current]) {
      // console.log('THE VAL',val)
      if (!visited.has(val)) {
        visited.add(val);
        // console.log('BEFORE THE PUSH', queue)
        queue.push(val);
        // console.log('AFTER THE PUSH', queue)
      }
    }
  }
  console.log(answer);
}

console.log('First Test:');
printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
console.log('Second Test:');
printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
console.log('Third Test:');
printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// One possible solution:  [ 4, 3, 5, 6, 2, 1 ]
*/

/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};
//Solved
function breadthFirstSearch(start, end) {
  let queue = [start];
  let visited = new Set();

  while (queue.length) {
    let current = queue.shift();

    if (current === end) return true;

    for (let val of adjList[current]) {
      if (!visited.has(val)) {
        visited.add(val);

        queue.push(val);
      }
    }
  }

  return false;
}

console.log('First Test:');
console.log(breadthFirstSearch(1, 3)); // -> true
console.log('Second Test:');
console.log(breadthFirstSearch(4, 1)); // -> true
console.log('Third Test:');
console.log(breadthFirstSearch(6, 1)); // -> false
*/

/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};
//SOLVED
function aShortestPath(start, end) {
  //create the queue and set

  let queue = [];
  let visited = new Set();
  //creating a starting path which is an array
  let startingPath = [start];
  //add that array to the queue
  queue.push(startingPath);

  while (queue.length) {
    //working with the currentPath
    let currPath = queue.shift();

    //get the last node in the path
    let lastNodeInPath = currPath[currPath.length - 1];

    //if it equals the end, return the path
    if (lastNodeInPath === end) return currPath;

    //if not lets iterate through the vals
    for (let val of adjList[lastNodeInPath]) {
      //adding to our visited like usual
      if (!visited.has(val)) {
        visited.add(val);
        //the currpath wasnt our shortest, we make a new path which has our currPath and newestVal
        let newPath = [...currPath, val];
        queue.push(newPath);
      }
    }
  }
  //if weve made it through the while loop without returning the shortestPath we return false
  return false;
}

console.log('First Test:');
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log('Second Test:');
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log('Third Test:');
console.log(aShortestPath(6, 1)); // -> false
*/

/*
const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};
//SOLVED
function degreesOfSeparation(start, end) {
  //create the queue and set

  let queue = [];
  let visited = new Set();
  //creating a starting path which is an array
  let startingPath = [start];
  //add that array to the queue
  queue.push(startingPath);

  while (queue.length) {
    //working with the currentPath
    let currPath = queue.shift();

    //get the last node in the path
    let lastNodeInPath = currPath[currPath.length - 1];

    //if it equals the end, return the path
    if (lastNodeInPath === end) return currPath.length - 1;

    //if not lets iterate through the vals
    for (let val of adjList[lastNodeInPath]) {
      //adding to our visited like usual
      if (!visited.has(val)) {
        visited.add(val);
        //the currpath wasnt our shortest, we make a new path which has our currPath and newestVal
        let newPath = [...currPath, val];
        queue.push(newPath);
      }
    }
  }
  return false;
}

console.log('First Test:');
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log('Second Test:');
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log('Third Test:');
console.log(degreesOfSeparation(6, 1)); // -> false
*/

//ALL PROBS SOLVED FOR TUESDAY 11.7
