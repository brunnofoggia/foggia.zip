# Avoid "Not Invented Here" (ANIH) syndrome

Written by Bruno Foggia, 2026.

> When reasonable, lean on reputable, existing libraries rather than writing your own solution for a problem that has already been solved.

There are several well-known sayings in software engineering that relate to this principle. "Reinventing the wheel" describes writing your own software to solve a problem that has already been adequately solved. The "Not Invented Here" (NIH) syndrome describes a tendency to believe that only code written by ourselves is valid and therefore to avoid using any third-party software or libraries.

I have certainly been guilty of reinventing the wheel in the very past – before I realized I should first check if the wheel had already been invented. I don't think I'm alone in this.

## Using Third-Party Libraries

The main thing here is that using third-party libraries gives us the ability to focus on our true goal: creating valuable products for our clients in a timely and efficient manner. And we can do that more effectively when we lean on existing solutions to already solved problems. That said, always search on the internet for some libraries that solves your problem before you start writing your own code, ask your colleagues for recommendations, and check community forums. You will be surprised by how many libraries there are out there, and how many of them are well-maintained and reputable.

Unfortunately, third-party libraries may also introduce security vulnerabilities, so it's important to evaluate the libraries before depending on them - remember that your code also adds **many** vulnerabilities all the time without being aware all the time. Consider questions like: how actively is it developed and maintained? Is it compatible with other tools in use? Does it have issues, bugs or vulnerabilities that might make it difficult to work with or cause problems for a larger project? Is its license compatible with your project? Your colleagues and the community will have opinions, recommendations, and advice, so don't be afraid to ask.

**Avoiding Not Invented Here (ANIH)** means leveraging existing, reputable solutions when appropriate, so you can focus on delivering value rather than solving already-solved problems. Evaluate third-party libraries carefully, and only create your own abstractions or libraries when there's a clear need and benefit. Striking the right balance between reuse and custom development is key to efficient, maintainable software.

## Writing Your Own Code

One thing I can recommend for sure is: if you need to write your own code, but you want to abstract something to avoid repeating yourself, you should start with a simple "common" folder with code abstractions and after that think of creating your own library, maybe even publish it online (at some package manager like npm or PyPI). This way you can reuse it across your projects and share it with the community, **but** remember before doing that to make sure of repeating that code at least twice and make sure the code is generic enough to be reused into different contexts. Otherwise, you might end up with a library that is only useful for your specific use case, and that doesn't add much value to your projects or the community.

Whenever you feel like creating your own code, remember that code should always serve a purpose and allowing you to repeating yourself at first can help you to know better where to go. 

## Example 1

The code below shows how important it is to understand your needs clearly. **This function does absolutely nothing**. Code should serve a purpose within a project. This one serves none. It is completely avoidable.

```javascript
function TruncateText(value: string, finish: number): string {
    return value.slice(0, finish);
}
```

## Example 2

I don't know whether I should point out that the **function names didn't reflect their actual purposes**, or that this could have been done easily and readably.

Confusing and hard to read code found:

```javascript
function reducer(arr1, arr2) {
    return arr1.concat(arr2).filter((item, index, self) => self.indexOf(item) === index);
}

function mergeArrays(...arrs) {
    return arrs.reduce((p, c) => reducer(p, c), []);
}
```

Possible solutions without reinventing the wheel:

```javascript
var array1 = ['a', 'b', 'c']
var array2 = ['c', 'd', 'e']
var array3 = ['x', 'd', 'e']

// solution n.1: native
var mergedArrays = [].concat(array1, array2, array3);
var uniqSet = new Set(x);
var uniqItemsArray = new Array(...y);

// solution n.2: lodash library
var uniqItemsArrayB = _.union(array1, array2, array3)
```

Of course the problem is beyond reinventing the wheel in this case, but with a brief research this scenario could've been easily avoided.

## Conclusion

As a complement I will mention an article that shows how DRY pattern can turn into an antipattern if you choose always perfection: [Please do repeat yourself](/articles/ref-pdry) but I will strongly recommend another one that talks about what you shouldn't do at all: [Design Principles: KISS, YAGNI, DRY](/articles/ref-kiss-yagni-dry).

Question is: you will need to find the right balance when writing your code, sometimes you will need to reinvent the wheel, or extend an existing library, but you should always ask yourself if it's really necessary before doing it.

## References

- [Please do repeat yourself](/articles/ref-pdry)
