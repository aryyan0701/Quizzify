export const javascriptQuestions = [
    {
      question:
        "True or False: JavaScript is a statically-typed programming language.",
      questionDescription:
        "Statically-typed languages require variables to be declared with their data types before they can be used.",
      options: ["True", "False"],
      answer: [1],
      explanation:
        "JavaScript is a dynamically-typed language, which means that variables do not have to be declared with their data types.",
    },
    {   
      question:
        "Which of the following code snippets does not correctly declare a variable in JavaScript?",
      questionDescription:
        "Consider the variable `x` that needs to be declared.",
      options: ["var x = 10;", "const x = 10;", "let x = 10;", "int x = 10;"],
      answer: [3],
      explanation:
        "In JavaScript, variables can be declared using the `var`, `const`, or `let` keyword. The correct options are `var x = 10;`, `const x = 10;`, and `let x = 10;`.",
    },
    {
      question:
        "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(5 + '5');```",
      questionDescription: "The code concatenates a number and a string.",
      options: ["55", "10", "NaN", "Error"],
      answer: [0],
      explanation:
        "When a number is concatenated with a string in JavaScript, the number is implicitly converted to a string and then concatenated. The correct option is `55`.",
    },
    {
      question:
        "True or False: JavaScript is a case-sensitive programming language.",
      questionDescription:
        "Case-sensitive languages distinguish between uppercase and lowercase letters.",
      options: ["True", "False"],
      answer: [0],
      explanation:
        "JavaScript is a case-sensitive language, which means that uppercase and lowercase letters are treated differently.",
    },
    {
      question:
        "Which of the following code snippets correctly displays a message on the web page using JavaScript?",
      questionDescription:
        "Consider the HTML element with the id `message`. The JavaScript code should display a message inside this element.",
      options: [
        "document.getElementById('message').innerHTML = 'Hello, World!';",
        "document.querySelector('message').innerHTML = 'Hello, World!';",
        "document.getElementById('#message').innerHTML = 'Hello, World!';",
        "document.querySelector('.message').innerHTML = 'Hello, World!';",
      ],
      answer: [0],
      explanation:
        "To display a message on the web page using JavaScript, we need to select the HTML element with the appropriate id or tag name. The correct options are `document.getElementById('message').innerHTML = 'Hello, World!';` and `document.querySelector('#message').innerHTML = 'Hello, World!';`.",
    },
    {
      question:
        "What will be the output of the following JavaScript code?\n```javascript\nconsole.log(10 < '5');```",
      questionDescription:
        "The code compares a number and a string using the less than operator.",
      options: ["true", "false", "NaN", "Error"],
      answer: [1],
      explanation:
        "When comparing a number and a string in JavaScript, the string is converted to a number before the comparison is made. If the string cannot be converted to a valid number, the result is `NaN`. The correct option is `false`.",
    },
    {
      question:
        "True or False: JavaScript is an interpreted programming language.",
      questionDescription:
        "Interpreted languages execute code directly without compilation.",
      options: ["True", "False"],
      answer: [0],
      explanation:
        "JavaScript is an interpreted language, which means that code is executed directly without the need for compilation.",
    },
    {
      question:
        "Which of the following code snippets does not correctly define a function in JavaScript?",
      questionDescription:
        "Consider the function `multiply` that takes two parameters `a` and `b` and returns their product.",
      options: [
        "function multiply(a, b) { return a * b; }",
        "var multiply = function(a, b) { return a * b; };",
        "const multiply = (a, b) => { return a * b; };",
        "int multiply(int a, int b) { return a * b; };",
      ],
      answer: [3],
      explanation:
        "In JavaScript, functions can be defined using the `function` keyword or as arrow functions. The correct options are `function multiply(a, b) { return a * b; }`, `var multiply = function(a, b) { return a * b; };`, and `const multiply = (a, b) => { return a * b; };`.",
    },
  ]




  export const pythonQuestions = [
    {
      question:
        "Which of the following is the correct syntax to comment out a single line in Python?",
      questionDescription:
        "Comments are used to provide additional information in the code and are ignored during execution.",
      options: [
        "// This is a comment",
        "# This is a comment",
        "/* This is a comment */",
        "-- This is a comment",
      ],
      answer: [1],
      explanation:
        "In Python, single-line comments are created using the '#' symbol.",
    },
    {
      question:
        "What will be the output of the following Python code?\n```python\nx = 'Hello'\nprint(x[1:])```",
      questionDescription: "The code extracts a substring from the variable 'x'.",
      options: ["Hello", "ello", "H", "e"],
      answer: [1],
      explanation:
        "In Python, the syntax `x[start:end]` is used to get a substring. The correct option is 'ello'.",
    },
    {
      question:
        "Which of the following data types in Python is mutable (can be modified after creation)?",
      questionDescription:
        "Mutable data types can be altered or changed after they are created.",
      options: ["int", "str", "list", "tuple"],
      answer: [2],
      explanation: "Lists in Python are mutable data types.",
    },
    {
      question:
        "True or False: In Python, 'break' and 'continue' are used in the same way in both 'for' and 'while' loops.",
      questionDescription:
        "'break' and 'continue' are control flow statements used to alter the flow of loops.",
      options: ["True", "False"],
      answer: [0],
      explanation:
        "In Python, 'break' and 'continue' are used similarly in 'for' loops, but they are used differently in 'while' loops.",
    },
    {
      question:
        "Which of the following methods is used to add an element at the end of a list in Python?",
      questionDescription: "Methods are functions associated with objects.",
      options: ["append()", "insert()", "extend()", "add()"],
      answer: [0],
      explanation: "'append()' is used to add an element at the end of a list.",
    },
    {
      question:
        "What is the purpose of the 'pass' statement in Python?",
      questionDescription:
        "The 'pass' statement is a null operation used when a statement is syntactically required but you do not want to execute any code.",
      options: [
        "To break out of a loop",
        "To define an empty function or class",
        "To raise an exception",
        "To skip the current iteration of a loop",
      ],
      answer: [1],
      explanation:
        "The 'pass' statement is used to define an empty function or class.",
    },
    {
      question:
        "Which of the following is the correct way to open a file named 'example.txt' for writing in Python?",
      questionDescription:
        "File handling is an essential aspect of working with external files in Python.",
      options: [
        "file = open('example.txt', 'r')",
        "file = open('example.txt', 'w')",
        "file = open('example.txt', 'a')",
        "file = open('example.txt', 'x')",
      ],
      answer: [1],
      explanation: "'w' is used to open a file for writing in Python.",
    },
    {
      question:
        "Which of the following modules in Python is used for regular expressions?",
      questionDescription:
        "Regular expressions provide a powerful way to search and manipulate strings.",
      options: ["re", "regex", "regexpy", "pattern"],
      answer: [0],
      explanation: "'re' is the module used for regular expressions in Python.",
    },
  ]
  
 

  export const cssQuestions = [
    {
      question:
        "Which of the following selectors targets an element with the ID 'example' in CSS?",
      questionDescription: "Selectors are used to target HTML elements.",
      options: ["#example", ".example", "&example", "$example"],
      answer: [0],
      explanation: "The '#' symbol is used to select elements by ID in CSS.",
    },
    {
      question:
        "What is the default value of the 'position' property in CSS?",
      questionDescription:
        "The 'position' property defines the positioning method used for an element.",
      options: ["relative", "absolute", "fixed", "static"],
      answer: [3],
      explanation: "'static' is the default value of the 'position' property.",
    },
    {
      question:
        "Which CSS property is used to control the space between the content and the border of an element?",
      questionDescription: "Spacing is essential for layout and design.",
      options: ["padding", "margin", "border-spacing", "spacing"],
      answer: [0],
      explanation: "'padding' controls the space between the content and the border.",
    },
    {
      question:
        "What does the 'box-sizing' property in CSS control?",
      questionDescription:
        "The 'box-sizing' property defines how the total width and height of an element are calculated.",
      options: ["Element's color", "Element's size", "Element's box model", "Element's position"],
      answer: [2],
      explanation: "'box-sizing' controls the element's box model.",
    },
    {
      question:
        "Which of the following CSS pseudo-classes selects the first child element of its parent?",
      questionDescription: "Pseudo-classes are used to select elements based on their state or position.",
      options: [":first-child", ":last-child", ":nth-child", ":only-child"],
      answer: [0],
      explanation: "':first-child' selects the first child element of its parent.",
    },
    {
      question:
        "What is the purpose of the 'z-index' property in CSS?",
      questionDescription:
        "The 'z-index' property controls the stacking order of positioned elements.",
      options: ["Control element's transparency", "Control element's rotation", "Control element's size", "Control element's stacking order"],
      answer: [3],
      explanation: "'z-index' controls the stacking order of positioned elements.",
    },
    {
      question:
        "In CSS, what does the 'media' attribute in the '@media' rule specify?",
      questionDescription:
        "The '@media' rule is used to apply different styles for different media types.",
      options: ["Media query conditions", "Media element type", "Media background color", "Media font size"],
      answer: [0],
      explanation: "The 'media' attribute in '@media' specifies media query conditions.",
    },
    {
      question:
        "Which CSS property is used to make text appear in uppercase?",
      questionDescription:
        "Transformations can be applied to text in CSS.",
      options: ["text-transform", "font-style", "text-decoration", "letter-spacing"],
      answer: [0],
      explanation: "'text-transform' is used to control the capitalization of text.",
    },
  ]
  
  export const reactQuestions = [
    {
      question:
        "What is React.js?",
      questionDescription:
        "React.js is a JavaScript library for building user interfaces.",
      options: ["A JavaScript library for building user interfaces.", "A backend framework for Node.js.", "A database management system.", "A CSS preprocessor."],
      answer: [0],
      explanation:
        "React.js is a JavaScript library for building user interfaces, making option A the correct answer.",
    },
    {
      question:
        "What does JSX stand for?",
      questionDescription:
        "JSX is a syntax extension for JavaScript often used with React.",
      options: ["JavaScript XML", "JavaScript Extension", "JavaScript Syntax eXtension", "JavaScript XML Syntax"],
      answer: [0],
      explanation:
        "JSX stands for JavaScript XML, which is a syntax extension for JavaScript used with React.",
    },
    {
      question:
        "What function is used to render a React component to the DOM?",
      questionDescription:
        "This function is typically called once in a React application.",
      options: ["ReactDOM.render()", "React.renderComponent()", "Component.render()", "ReactDOM.component()"],
      answer: [0],
      explanation:
        "The function `ReactDOM.render()` is used to render a React component to the DOM.",
    },
    {
      question:
        "What is the purpose of props in React components?",
      questionDescription:
        "Props are often used to pass data from parent to child components.",
      options: ["To manage component state.", "To handle component rendering.", "To define component structure.", "To pass data from parent to child components."],
      answer: [3],
      explanation:
        "Props in React components are used to pass data from parent to child components.",
    },
    {
      question:
        "What is the purpose of state in React components?",
      questionDescription:
        "State is used to manage component-specific data.",
      options: ["To define component structure.", "To pass data from parent to child components.", "To manage component state.", "To handle component rendering."],
      answer: [2],
      explanation:
        "State in React components is used to manage component-specific data and trigger re-renders when the state changes.",
    }
  ];
  

  
  