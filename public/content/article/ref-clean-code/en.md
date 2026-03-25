# Clean Code — A practical approach

After giving some talks about Clean Code I have decided to summarize the most important things in an article. Because there is a lot of posts and information in the net about Clean Code, I think that a new article talking about it simply explaining some the principles is not going to be very worthy.

In this article I will try to give you a practical approach to Clean Code. I will not go deep into the theory, **I want to show how I write Clean Code**.

## What is Clean Code and why should we care?

### Origin and a definition

There are several books and experienced developers talking about clean coding in the community.

I have built a kind of **definition of Clean Code** joining the opinions of several authors and sources and what I get is that Clean Code has these features:

- It is **important**, at least as important as other concepts like performance, cover the functionality, avoid bugs, …
- It is **easy** for any developer **to read**.
- It is **easy** for any developer **to modify**.
- It was written by someone who **cares it**.
- It does what is expected. The code does not fool you, no surprises.

### Why you should write clean code

I really believe that writing Clean Code is important because it’s the first step to cover the main goal of any architecture: **minimize the human effort needed to create and maintain the required system.**

When we are coding, **we** use to **spend more time** (much more time) **reading code than writing**. We read legacy code, libraries code, your team mates code, code written by you several months ago (that you don’t remember), code written by someone who left the company, code in Stack Overflow…

> > > # "Indeed, the ratio of time spent reading versus writing is well over 10 to 1"

Taking this in consideration, is not it worth a little extra writing effort? **You will get back several times the extra time you spend cleaning your code.** Think about it the next time you are going to commit a piece of code.

Last thought about why we should care our code is that we, the developers, do not write code solely to be interpreted by machines. **We write code to be read by humans**. Let’s think that **we are authors**, in the same way that a journalist writes in a newspaper or a writer creates a novel.

## Some principles

There are many principles and ideas about what is clean and what is not. You can find them in the book and also on the net. But because I need some basic principles to have something to play with, I am going to introduce some of them. If you already know them you can skip to the next section, if not I think they will allow you to get an idea of the style of the rest of the theory and, perhaps, the motivation to know more.

So, let’s see some principles with code.

### Naming

We are **deciding names** everywhere when we are coding: **variables, functions, classes, packages, files…** Taking it seriously is a first step to having Clean Code.

Some tips to get clean names:

- Use **intention-revealing names**:

```javascript
// Bad
const s; // size of the file

// Good
const sizeOfTheFile;
const fileSizeInBytes;
```

- Choose pronounceable names:

```javascript
// Bad
const gntmstmp;

// Good
const generationTimestamp;
```

- Use searchable names:

```javascript
// Bad
for (let i = 0; i < 10; i++) {
  s += r[i] / 50;
}

// Good
for (let i = 0; i < MATCHES_PER_PERSON; i++) {
  averageViewers += assistsPerGame[i] / MATCHES_PER_PERSON;
}
```

> If you try to find the “r” variable with your IDE’s search tool, probably you will find more than you want

- Avoid prefixes and suffixes and abbreviations:

```javascript
// Bad
const hp;

// Good
const hitPoints;
```

> What the hell is ‘hp’: hypotenuse, high point…? Spanish speakers could have more proposals.

There are many other tips about choosing good names. Probably use intention-revealing names is the most important but what is really important is to **take the naming seriously.**

**Take your time to choose good names.** And don’t be afraid to **change an existing name** if you think that the code is going to be more readable after the change.

### Functions

Between all the ideas about clean functions I am going to highlight three for this post.

- First rule is basic and easy to remember: **Functions should do one thing**, they should do it well and they should do it only. Not too much to explain here: avoid side effects, split your functions if you notice that they are doing several things at the same time.

- Functions **should be small.** Ok, but how short they should be? How to measure it? Let’s force our functions to have **no more than 2 levels of indentation.** If this is hard for you, you can start setting a higher limit (3 levels, for example), but please put a limit on the levels of indentation you allow.

- Regarding the arguments… **The fewer arguments a function has, the cleaner it is.** Why? Arguments need a lot of context knowledge. In each call a reader must have context to understand each argument. More arguments→ more context you need to understand. Arguments are also hard from a testing point of view. More arguments, more test cases to ensure that all the combinations of arguments work properly

| Arguments | Cleanliness                 |
| --------- | --------------------------- |
| 0         | Ok                          |
| 1         | Ok                          |
| 2         | Ok                          |
| 3         | Should avoid where possible |
| > 3       | Unacceptable                |

> You must have a good reason for having more than 2 arguments in a function

### Comments

When I learned to code in the 90's, my teachers used to ask me to write comments everywhere. It was typical to hear them say things like “If you don’t comment your code, I’m not going to correct your exam…”. The goal of those comments was to make our code easier to read. This is a goal that we also have when writing Clean Code, but maybe comments are not the best way to achieve it.

**Comments lie**, and I am sure that we have all found old comments saying something outdated. Because the code is maintained, but **there is nothing that forces the comments to be maintained** as well. Is there anything worse than a fake comment?

**The truth is only in the code.** When you think you need to write a comment, always think if there is not a **better way to express this using the code.**

The most important idea is to try to **avoid comments to explain the code.** For example:

- Avoid comments to explain a variable. Instead, choose a good name for this variable and you won’t need a comment
- Avoid comments to explain a function. Instead, force your function to do only one thing, have few arguments and choose a good name for it and its arguments and you won’t need a comment

#### Let’s see a practical case:

1. We have something complex. We feel that is going to be hard to understand in the future:

```javascript
if (date.year % 4 === 0 || (date.year % 100 !== 0 && date.year % 400 === 0))
```

> What is happening here? Did you get it? Cool, but maybe not trivial for everyone

2. We can add a comment to make it easier to understand:

```javascript
// Check if the year is a leap year
if (date.year % 4 === 0 || (date.year % 100 !== 0 && date.year % 400 === 0))
```

> I have put a comment. Now I can sleep better. But, is this the best solution?

3. Let’s try another option, let’s extract the complex code to a method with a cool name:

```javascript
if (date.happensInLeapYear())
```

> Definitively now it’s clean!

Think about what a future **reader will want to know** when they find this `if`. They will be interested to know that this `if` is checking if the year is a leap year, but probably **they will not be interested in how** we are getting it. If they are curious, they can navigate to the implementation of this coolly named method. Unintentionally, **by avoiding a comment we are separating different levels of abstraction** in our code.

So, in general, avoid comments to explain code. And, because you will be using GIT or any other distributed version control system, avoid commented-out code (delete it!), attributions and bylines, and this kind of stuff.

Comments are not forbidden, there are situations where comments make sense:

- Legal comments
- TODO comments
- Amplifications about the importance of something or the reason of a concrete decision in the code
- Mandated comments (JavaDocs, …) in public APIs (but, avoid this in non-public code… don’t force a team to comment the all the functions of all your classes!!!)

### More principles

As I told before, I was going to comment just a few principles to get a basic understanding of the Clean Code theory. So, these are only some of the most basic ideas about Clean Code. If you find them interesting and you want to know more, look for more resources on the net.

## How to clean your code? Refactor is the key

Well, good naming, small functions, no comment to explain the code… got it. But, how can I do it? How can I write code following these ideas?

Our job is hard in itself. Writing code and getting it to work can already be enough challenge. And that without worrying about leaving it clean.

So, the keyword here can be Refactor. A good way can be to **write code without worrying too much about cleanliness**, and **later**, when we have the code doing what we want, **clean it up with a refactor.**

### Definition of Refactor

Code refactoring is the process of **restructuring** existing code **without changing** its external behavior. It means that the code before and after the refactor must do exactly the same.

Things that are not refactors:

- Change an algorithm
- Replace one type of loop with another
- Upgrade the performance of a piece of code

Things that are refactors:

- Extract a piece of code to a Function
- Rename things
- Extract several functions to a new Class.
- Create a constant to store a hardcoded value
- ...

### Safe Refactoring

Maybe you are thinking that “I don’t want to break the code, it’s working fine!”. Yes, of course. It could have been quite difficult to get the **code working, we don’t want to break it** when **refactoring.** And this is the typical reason people argue for not changing very bad code. But don’t worry, there is safe way.

We can rely on two things to **refactor without fear:** Tests + Refactoring tools.

> Refactoring can be a joy if we have good tests and use cool Refactoring tools

- **Testing**: we should have good automated tests for our code for many reasons. But it is obvious that this is something that will help us refactor without breaking nothing. **After** each **refactoring** you can check if all the **tests are still green**. I am not going to write about testing in this post, maybe in another one in the future. **If you don’t know about testing, you should.** There is a lot of information on the net. If you don’t know where to start, ask me :).

![Automated Tests - All Green](./img/tests.png)

> Everything is green. It seems that we haven’t broken anything.

- **Refactoring tools**: modern IDEs have tools that do some of the most common **refactoring actions automatically**. If we use them we will be reducing the possibilities of breaking something when making changes to the code. I am going to introduce them at the end of this post ;).

### When should you Refactor your code?

All the time. I mean, you should be working on development cycles of:

- Write code
- Write tests
- Refactor

And not necessarily in this order. You can develop using TDD and, in this case, you will write your tests before the code. But anyway, **you should refactor each time you have a piece of working code.** In other words: you should refactor at the end of each cycle. And **these cycles should be small.**

Because if you work inside a small iteration of development it will be very easy to refactor, to ensure that everything is clean, that you are not breaking things, etc… Do you usually spend several days writing to end up making a delivery with a lot of lines of code in several files? Maybe not the best habit.

## Appendix: Refactoring tools

For this appendix I have chosen an IDE that I am comfortable with, such as **[JetBrains’ IntelliJ](https://www.jetbrains.com/idea/) for Java.** But you will be able to find these kind of tools in the IDE you use for your preferred language. If not, maybe you should try another IDE.

### Rename

Probably the **simplest** refactoring tool is Rename. You have an entity with a name that you don’t like and you want to change it. Of course, you can edit it manually... but this won’t be trivial because this entity can be used in a lot of places.

For example: I want to change the name of the class `Input`. I want to call it `WordFrequency`.

![Example 1](./img/rename-1.png)

Because it is a Class, there are a lot of potential places where I should change `Input` identifier. Manually, I should look for all of them. But we have Rename refactoring tool:

![Example 2](./img/rename-2.png)

> Rename tool with all its options to rename an entity safely

This tool will rename the entity and it will be in charge of rename everything we need: other usages, the file name, tests… even variable names that could have relation with out entity:

![Example 3](./img/rename-3.png)

> It has realized that I had several variables that I might like to change. Thanks IDE!

### Extract method

This is probably the tool I use the most. Let’s see an example:

1. I have this piece of code that is part of a very big function that I want to refactor. I think that some of these lines are doing something unique that could be a private function. So I decide to extract.

![Example 1](./img/extract-1.png)

> I want to extract the creation of `wordFrequencyList` to a method

2. I use the extract method tool. This tool offers me several options about how the new method is going to be:

![Example 2](./img/extract-2.png)

> Extract method tool even dares to propose a cool name…

3. Now the code is extracted to a method and here we have the call. The tool will take care of creating the method, moving the code and changing all the places where we had that same code with one call (because it finds duplicates).

![Example 3](./img/extract-3.png)

> Cleaner, isn’t it?

### Other tools

There are many Refactoring Tools for the most common actions you can want to do to restructure your code. Talking about IntelliJ Idea we can take a look to the [documentation about Code Refactoring](https://www.jetbrains.com/help/idea/refactoring-source-code.html) or you can look for the documentation of your preferred IDE. **I encourage you to discover all the Refactoring Tools in your IDE** and play with them to understand how they work and if you find them useful.

![Example 1](./img/other-1.png)

> A lot of refactoring tools!

In fact, in my IDE I can select a piece of code and get the “Refactor This” menu that will show me all the Refactoring Tools I can apply to this concrete case:

![Example 2](./img/other-2.png)

> Tell me, kind IDE, what can I do with this?

## One last argument

There is a final argument to clean your code if you are not completely convinced

> > > # Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live — John F. Woods.

## Resources

Original article: [Clean Code — A practical approach](https://medium.com/clarityai-engineering/clean-code-a-practical-approach-896546435235)
