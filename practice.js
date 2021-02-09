// 1. Counting Sheep
// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

const sheepCount = function(num){

    if (num ===0){
      return 'All sheep jumped over the fence'
    }
  
  return  num + ': Another sheep jumps over the fence ' + sheepCount(num-1)
  }
  
  sheepCount(5)

//   2. Power Calculator
// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = function(base,exp){
    if (exp < 0){
      return 'exponent should be >= 0'
    } else if (exp ===1){
   return base
    }
    else if (exp === 0){
      return 1
    }
  return base * powerCalculator(base, exp-1)
  }

//   3. Reverse String
// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function(str){
    if(str.length === 0){
      return str
    }
   return reverseString(str.slice(1)) + str[0] 
  
  }

//   4. nth Triangular Number
// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const triNum= function(num){
    if(num ===1){
      return num
    } 
    return num  + (triNum(num-1))
  }

//   5. String Splitter
// Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

function stringSplitter(str, splitter){

    if(!str.includes(splitter))
    return str
     else if ([...str].filter(el=>el===splitter).length === 1)
      return [str.slice(0, str.indexOf(splitter)),
    stringSplitter(str.slice(str.indexOf(splitter)+1))]
    
    else
  
    return [str.slice(0, str.indexOf(splitter)),...
    stringSplitter(str.slice(str.indexOf(splitter)+1), splitter)]
  }

//   6. Fibonacci
// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fibonacci(num){
    if(num < 2)
    return num
    else 
     return  fibonacci(num-2) + fibonacci(num-1)
  }

//   7. Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num){
    if (num ===1)
      return num
    else
    return num*factorial(num-1)
  }

//   8. Find a way out of the maze
// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

function mazePath(x, y, path, maze){
    if(
      x<0 ||
      y<0 ||
      y >= maze.length ||
      x >= maze[y].length ||
      maze[y][x] === '*'
    ) {
      return [];
    }
    if(maze[y][x] === 'e') {
      return [path]
    }
    maze = maze.map((row) => [...row]);
  
    maze[y][x] = '*'; 
    return [
      ...mazePath(x+1, y, path + 'R', maze),
      ...mazePath(x-1, y, path + 'L', maze),
      ...mazePath(x, y-1, path + 'U', maze),
      ...mazePath(x, y+1, path + 'D', maze),
    ];
  }
//   9. Find ALL the ways out of the maze
// Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

// Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

// Path to the exit: RRDDLLDDRRRRRR
// Path to the exit: RRDDRRUURRDDDD
// Path to the exit: RRDDRRRRDD
function mazePath(x, y, path, maze){
    if(
      x<0 ||
      y<0 ||
      y >= maze.length ||
      x >= maze[y].length ||
      maze[y][x] === '*'
    ) {
      return [];
    }
    if(maze[y][x] === 'e') {
      return [path]
    }
    maze = maze.map((row) => [...row]);
  
    maze[y][x] = '*'; 
    return [
      ...mazePath(x+1, y, path + 'R', maze),
      ...mazePath(x-1, y, path + 'L', maze),
      ...mazePath(x, y-1, path + 'U', maze),
      ...mazePath(x, y+1, path + 'D', maze),
    ];
  }

//   10. Anagrams
//   An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

  function anagram(string){
    const output = [];
    function traverse(string, alt=''){
      if (!string) output.push(alt)
      for (let i = 0; i < string.length; i++){
          traverse(string.slice(0,i) + string.slice(i+1), alt + string[i]);
      }
    }
    traverse(string)
    return output
  }
//     11. Organization Chart
// Write a recursive function that prints the following organization chart. Your output should be as shown below with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an input to your program.

function org()
