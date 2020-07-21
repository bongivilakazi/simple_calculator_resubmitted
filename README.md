# simple_calculator_resubmitted

Search...
Umuzi Remote work
1. Syllabus
2. Topics
3. Workshops
4. Projects
Android with Kotlin Projects
Constraint Layout Using Layout Editor
Data Binding Basics
Linear layout using the Layout Editor
User Activity
Androids
Incremental Counter
Information Page
Angular Tutorial
Assertive programming kata
Bootcamp Writing Assignment
Build your first personal website
Capstone project
Gmail Text Scraper
Pair Stairs
Spaced Repitition machine to help you remember what you read
The Quizmaster
build a Chrome Extension that measures time spent in meetings
Consume Github API
DAGs with Airflow
Data-science-specifics
MEDIUM: Cross-validation & Simple Linear Regression
Dashboard Assignment
EASY: Google Data Studio Assignment
HARD: Live Dashboard Assignment
EASY: Plotly Dashboard Assignment
HARD: Webscraping and Live Dashboard Assignment
Data Modelling Challenges
HARD: Network Intrusion
Data Visualisation Projects
MEDIUM: Evolution of Linux Visualisation
MEDIUM: Financial Services Use in Tanzania
MEDIUM: Data Wrangling
MEDIUM: Decision Trees
Introduction to Jupyter Notebooks
MEDIUM: K-Means Clustering Assignment
Logistic regression
MEDIUM: Predict breast cancer
MEDIUM: Predict credit card approvals
MEDIUM: Multivariate Linear Regression
MEDIUM: Natural language processing
MEDIUM: OOP for data science
MEDIUM: Statistical Thinking
Webscraping Assignment
Distributed workloads with ZeroMQ
Email random inspirational quote
Expose a simple REST api for your game
ExpressJS
Game of life: Angular elements
Git Basic Exercises
How to submit your project
Java Projects
Consume own api using curl
File IO + Logging + Errors
Introduction to Spring Boot
Introduction to Spring Boot - part 1
Introduction to Spring Boot - part 2
Introduction to Spring Boot - part 3
Introduction to Spring Boot - part 4
Introduction to Spring Infrastructure
Introduction to Spring Infrastructure part 1
Introduction to Spring Infrastructure part 2
Introduction to Spring Infrastructure part 3
Java Generics
Java collections
Java data structures
SQL Extended
Level 1 programming katas
Linux challenges
Advanced Linux challenges
Beginner Linux challenges
Memory Game: rebuild using a modern web frontend framework
Memory game in vanilla js
Memory game using Angular Material
Nodejs Challenges
1: Node & File IO
2 (alt): Node & mongoDB assignment
3: Express, forms and templates
4: Expose a JSON API
Add a little Ajax
Node & SQL assignment
OOP Excercises
Animals
Animals Part 1. OOP basics
Animals Part 2. Adding Tests
Bank Accounts
Dice
Person
Pre bootcamp challenges
Python projects
Database migrations with SQLAlchemy
Django - exposing a REST api with a real database
Getting to know Python
Python and Kafka
Python and MongoDB
Python and Spark
create a REST api to interact with actual database
expose a simple JSON rest api
RabbitMQ
SQL
Semitone Challenge
1. semitone difference - basic algorithm
1. Make a simple GUI
3. Advanced algorithm
4. A gui that is more...awesome
Add Redux to your semitone game
Test Driven Development
Password Checker
Add logging to password checker
password-checker
MEDIUM: Resturaunt menu system
EASY: factorials
MEDIUM: lots and lots of tdd katas
MEDIUM: recursive search
EASY: simple-calculator part 1
MEDIUM: simple-calculator part 2
string-calculator
HARD: ten-pin bowling scoring system
Validating user input for web
consuming APIs with the requests module
iOS Mobile
Codable, File Manager, URL
Drag and Drop, Multithreading and Delegation
More Swift, Gestures and Animations
Multithreading Layout and Other Functionality - Animated Set
Multithreading Layout and Other Functionality - Graphical Set
Swift and More
5. Katas
6. Department Processes
Code Review Feedback Notes
Contact
Credits
How to Contribute
Online Learning and bootcamp
More
 Github repo
 Credits
  
 Edit this page Umuzi Tech Department > Projects > Test Driven Development > simple-calculator part 1
SIMPLE-CALCULATOR PART 1
Story points	2
Tags	tdd
Hard Prerequisites	
PROJECTS: Assertive programming kata
TOPICS: Test Driven Development
To submit this project follow the link below: TILDE
The objective of this project is to build a calulator that can perform multiplication and addition on multiple integers. Do not build a front-end (UI). Complete this project by using a TDD approach.

The basic TDD approach is as follows:

RED: Write tests. It should fail initially because there isn’t any code that it is testing.
GREEN: Write code to make the tests pass.
REFACTOR: Make sure code is understandable and clean.
Remember to make sure your tests still pass after refactoring it.

Set up environment
JavaScript:
Use Jasmine to test your code. Please do not use the SpecRunner html file to test your code. Run Jasmine on the terminal.

TOPICS: Jasmine Unit testing . Look under the heading: Getting set up (like a boss) for instructions to set up.
After setting up Jasmine on the terminal, please ensure that your directory has the following:

A src folder that has a file called:

simple_calculator.js <—- this is where you will implement all your functionality.
A spec folder that has a file called:

simple_calculator_spec.js <—- this is where you will put your tests.
Your directory structure should look like this:

    >node_modules    <---- make sure this is in your .gitignore
    >spec
        > support
            - jasmine.json
        - simple_calculator_spec.js
    >src
        - simple_calculator.js
    - package.json
Python
Your project is expected to be completed using pytest. You are expected to follow industry best practices in all things. This means that you need to have a directory structure that is in good shape. Please name your files and folders like this:

├── simple_calculator   the package under test
│   └── calculator.py
├── requirements.txt    installation requiremnts
├── setup.py            installation script for the package under test
└── tests               all package tests go in this directory
    └── test_calculator.py
Please take a look at this topic to see an explanation of the required directory structure. TOPICS: Automated Testing in Python

Java
You’ll be using IntelliJ, Gradle and JUnit to pull this off.

Create a class named Calculator. All your methods should be static methods that return integers. Eg:

    public static int add(....
Please make sure that you make proper use of gitignore. We don’t want your junk files. The git repo you give us should have a file hierarchy that looks like this:

├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
    │   └── java
    │       └── Calculator.java       <-------- names are important
    └── test
        └── java
            └── CalculatorTest.java   <-------- names are important
Please refer to the following to find out more: TOPICS: Gradle and IntelliJ project submission structure

1. Create an add function that can add two integers
Create a function called add that works like this:

add(1,2)
// should return 3
add(-1,-1)
// should return -2
2. Modify the add function so that it can add multiple integers.
The add function should now behave like this:

add(1,2,3,4,5)
// should return 15
add(1,2)
// should still return 3
add(-1,-1)
// should still return -2
Please note that your function should NOT expect an array or list of numbers, for example:

add([1,2,3,4])
This is NOT what we are looking for. If you have square brackets inside your round brackets, you are doing it wrong. The same will apply for the multiply function you will build in the next section.

3. Create a multiply function that can multiply two integers
Create a function called multiply that works like this:

multiply(1,3)
// should return 3
multiply(-1,3)
// should return -3
4. Modify the multiply function so that it can multiply multiple integers.
The multiply function should now behave like this:

mutilply(1,2,3,4,5)
// should return 120
multiply(1,3)
// should still return 3
multiply(-1,3)
// should still return -3
RAW CONTENT URL
