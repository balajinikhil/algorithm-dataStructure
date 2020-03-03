# Big O Notation

1. Need for Big O Notation
2. Describe what Big O Notation is
3. Simplify Big O Expressions
4. Define 'time complextiy' and 'space complexity'
5. Evaluate the 'time complexity and space complexity of different algorithms using Big O Notation
6. Describe what algorithm is

- Need, there are multiple ways of solving a particular problem but which method is better and how to decide the best possible solution, Big O Notation helps simplify this process

- Who Cares? The main point is reaching to the solution not how you reach it, but Big O Notation helps,

  1.  Precise vocabulary to talk about the how code performs
  2.  Usefull for discussing trade off's between different approaches
  3.  When debugging

- Factors to consider

  1. Faster
  2. less memory intensive
  3. more readable

- Problem with time

  1. Different machines will record different times
  2. Same machines will record different time
  3. Faster algorithm speed may not be precise

- Solution
  Check for the number of operations the code consits the more operands the larger will be the time

- Standard Defenition
  We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n) as n increases

- Types of big O notations

  1. linear f(n) = n ;
  2. quadratic = f(n) = n^2
  3. constant = f(n) = 1
  4. f(n) something entierly different

- Simplifying Big O Expression
  Helpfull rule of thumbs

  1. constant's dosen't matter
     O(2n) == O(n)
     O(500)== O(1)
     O(13n^2) == O(n^2)

  2. Smaller terms dosen't matter
     O(n+10) == O(n)
     O(1000n + 50) == O(n)
     O(n^2+5n+8) == O(n^2)

  3. Airthmetic operations are constant
  4. Variable assignment is constant
  5. Acessing elements in an array or object is constant
  6. In loop complexity is the length of the loop times the complexity of whatever happens inside the loop
