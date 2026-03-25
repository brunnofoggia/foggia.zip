# Please do repeat yourself (DRY is dead)

> First of all, let me apologize for the clickbait-y title, but we need to talk about Don’t Repeat Yourself (DRY) principle.

## Story 1

Few years ago we were asked to help with further development of an existing platform in the blockchain industry. It was a product directed to traders and helped them automate tax fillings. And it was the biggest copy&paste-based project I have seen in my life.

It was written in PHP. If you know PHP then you know that each .php file acts as an entry point to your code - and from there you usually import (include) utilities, libraries which are common to your project. That is if you don’t use a framework. This one didn’t.

This project was created from the ground up by its founder who learned programming while creating and maintaining this product.

They didn’t have much programming knowledge beforehand and didn’t know all of these good practices and fancy rules that we have. So each .php file was a copy of a previous one with modifications needed for given route/view. Tons of repeated code.

And here’s what’s really important: **at this point the product already made millions of dollars.**

Let that sink in. No amount of copied code, repetition and what we would call “bad quality code” stopped the product from being successful.

What’s more is that we were able to pretty quickly identify repeated code and introduce the right abstractions because we already knew different use cases from the duplicated code.

**But please be aware that I'm not advocating this kind of development. It's an EXTREME example showing that you don't need to be a perfectionist.**

## Story 2

I’ve known developers who lived to not repeat themselves. I think that at some point they went from “in general it’s better not to have too much repetition” to “if you repeat any code then you will burn in hell”. This is one of these stories.

We were working in a company which had multiple related products. And something that one of the developers did blew my mind. They were working on a new application and decided that they could use a two-line function from the previous project (3 line if you count the function’s definition).

The choice here was simple - just copy these 3 lines of code into the new project. But as a lot of developers think - including this one - “repetition is root of all software evil”. **So they spend two days setting up a common library (including deployment process etc) just so they won’t duplicate 3 lines of code.**

Now ask yourself how does that benefit the project and how it gets us closer to delivering on our objectives.

## The source of all evil

By simply googling “Don’t repeat yourself” I learned that:

- Repetition is the root of all software evil
- Duplication is waste
- If you do it then you don’t understand how to apply abstractions
- It decreases quality of code
- It should all be eliminated

It does sound like bad idea, right? But at this point it **sounds like we vilify it.** It sounds like if you do it then you are a bad developer! Like there isn’t any scenario where you should do it. **But ya’ll use StackOverflow, don’t you?**

Did you at any time ask yourself a simple question - is it really **THAT** bad that I copy and paste a little bit of code? **Does it have any benefits?**

## Only a Sith deals in absolutes

Here’s the thing - every rule in software development makes sense at most 80% of the time. Each was coined in some specific context - for which it made sense. But that context got lost in translation and some people began to **follow the rule religiously instead of treating it as a rule of thumb.**

This is our fault. We make those principles **sound so absolute.** Don’t repeat yourself means don’t repeat yourself. Then it’s passed from one person to another, copied over blogs, books over and over until it becomes the truth and all context and all the nuance is lost.

So here’s an alternative that I think some of you should try:

> Try not to repeat yourself too much. But sometimes you can. Because sometimes it may make sense.

It’s not as catchy phrase though.

## Please repeat yourself

This rant is already getting too lengthy for my taste, so let’s get to the point. There are numerous cases where repeating yourself is not only **not an anti-pattern but it’s actually a tool.**

I love repeating myself. Especially when I’m writing tests. I copy tests all over the place and change what’s needed for the given test. This results in a lot of duplication. When I’m done I simply go through these tests and see what’s the best way to reduce (not completely eliminate) repetition and what can be extracted into separate abstractions.

I could spend a lot of time upfront to figure out how do I want to set up the tests, what helpers do I need, then redoing everything because it turns out that 2 of 25 tests need a little bit different setup. But why would I do this if I can just see where the code takes me? Why not see what’s actually needed instead of doing all this guesswork?

This is not just for tests, but tests are where this is most obvious and I would encourage you to start there.

The overuse of **DRY (Don’t Repeat Yourself)** is an anti-pattern in itself. Overzealous duplication removal leads to bad abstractions because developer **is creating imaginary abstractions instead of uncovering real ones.**

**Repeating yourself is basically giving yourself the time and space to come up with the right abstractions** instead of engaging in guesswork and clairvoyance. We don’t know what the future code will be. We don’t understand all the use cases at first or ways in which our code will be used. If we introduce abstractions too soon then in best case we end up rewriting everything.

**Repeating yourself is a great tool to uncover abstractions.**

## What other people say

As you may guessed I’m not the first person to notice this. There are two great articles about this topic:

- [AHA Programming](https://kentcdodds.com/blog/aha-programming) by Kent C. Dodds
- [The Wrong Abstraction](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) by Sandi Metz

You should definitely read them as they extend this article nicely and will give you more understanding on when to use duplication. Here’s a few excerpts:

> “duplication is far cheaper than the wrong abstraction”
>
> ”prefer duplication over the wrong abstraction”
>
> — Sandi Metz, “The Wrong Abstraction”
>
> “Avoid Hasty Abstractions”
>
> ”Optimize for change first”
>
> ”the big takeaway about AHA Programming is that you shouldn't be dogmatic about when you start writing abstractions but instead write the abstraction when it feels right and don't be afraid to duplicate code until you get there.”
>
> — Kent C. Dodds, “AHA Programming”

## Conclusion

I want to be clear that I’m not inviting you to make a mess. I am pointing out that some level of temporary duplication is healthy. First story is supposed to show you that despite what you may think - the success of a product does not depend on that but instead it depends on business development.

So copy code and modify it when necessary to give yourself space so you can uncover real abstractions instead of imaginary ones. Of course - that’s not the only method to uncover better abstractions. Talking to stakeholders and understanding business better is another way that we will discuss in the future. But it’s not a situation where you need to pick one over the other but rather complementary methods.

There is a lot of rules of thumb in software development - or “good practices”. Usually they work when you understand context and apply them sensibly. Sadly there is a lot of dogma in software industry, it’s driven by hype and emotions and rarely by pragmatism. So remember that these “good practices” are not “all or nothing” but more of a “try to do this more than the other thing and you’ll be good”.

## Resources

- Original article: [Please do repeat yourself (DRY is dead)](https://dev.to/ralphcone/please-do-repeat-yourself-dry-is-dead-1jbg)
