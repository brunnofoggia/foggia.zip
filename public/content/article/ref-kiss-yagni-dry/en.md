# Software Architecture Design Principles: KISS, YAGNI, DRY

> In this article, we are going to learn Software Architecture Design Principles: KISS, YAGNI, DRY principles.

## Introduction — Software Architecture Design Principles

In software industry, we can get projects from the easiest to the **most complex projects** and solutions from our clients. However, it is often that we fall into the **trap of designing more complex systems than necessary required systems.** So before we start to design, its good to check our design principles that we can apply on every design. These principles are:

- DRY
- KISS
- YAGNI

Let’s see details.

## DRY Principle

**DRY** is stands for **“Don’t Repeat Yourself”**. In the book of ‘The Pragmatic Programmer’, we can see this definition for DRY:

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system. This means that, you must try to maintain the behavior of a functionality of the system in a single piece of code, it should not have duplicated code or design item.

Since we are looking these principles for system design, we will follow same concepts with software development. It’s easier to maintain a code or system that is only in one place, because if you need to change something in the code or system, you just need to change in one place.

Besides that, if you have the same code in two or more places, the code can be change during the time, and when this happens it will become bugs in your system. Duplicated code also makes the code more complex and unnecessarily larger.

## KISS Principle

**KISS** is stands for **“Keep It Simple, Stupid”**. This principle says about to make your code or system simple. You should avoid unnecessary complexity. A simple code it’s easier to maintain and easier to understand.

You can apply this principle in the design and in the implementation of the code. You should eliminate duplicated code, should remove unnecessary features, use names for APIs and methods that makes sense and matches their responsibilities.

You also should separate the responsibilities of your applications and the responsibilities from the layers of the systems. Most systems work best if they are kept simple rather than making them complex designs; Therefore, simplicity should be a key goal in design and unnecessary complexity should be avoided.

## YAGNI Principle

**YAGNI** is stands for **“You Ain’t Gonna Need It”**. Sometimes, we try to think way ahead, into the future of the project, adding some extra features “just in case we need them”.

> This is Wrong! we don’t need it and in most of the case we can say YAGNI = “You Aren’t Gonna Need It”.

It’s a principle from software development methodology of **Extreme Programming (XP).** This methodology said **“Do the Simplest Thing That Could Possibly Work”.** This principle says that you should not create features that it’s not really necessary. This principle is similar to the **KISS** principle, both of them aim for a simpler solution.

The difference between them is that **YAGNI** focus on removing unnecessary functionality and logic, and **KISS** focus on the complexity. By these principles we will save yourself time and be able to move forward with projects efficiently.

## What’s Next ?

- [Monolithic Architecture is Shining](https://medium.com/design-microservices-architecture-with-patterns/monolithic-architecture-is-shining-fa4920a4660c)
- [Macro-services to Nano-services: Evolution of Software Architecture](https://medium.com/design-microservices-architecture-with-patterns/macro-services-to-nano-services-evolution-of-software-architecture-424f927b63cb)
- [Microservices Architecture: Problems and Solutions with Pattern and Principles](https://medium.com/design-microservices-architecture-with-patterns/microservices-architecture-problems-and-solutions-with-pattern-and-principles-b673f342dc10)

## References

- Original article: [Software Architecture Design Principles: KISS, YAGNI, DRY](https://medium.com/design-microservices-architecture-with-patterns/software-architecture-design-principles-kiss-yagni-dry-341ce969212c)
