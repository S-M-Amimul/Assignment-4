
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

These methods are used to select elements from the DOM, but they work in slightly different ways.

// getElementById() is used to select a single element using its unique ID. This method always returns one element.

//getElementsByClassName() selects all elements that share the same class name. It returns an HTMLCollection, which is a collection of elements.

//querySelector() uses CSS selectors and returns the first element that matches the selector.

//querySelectorAll() also uses CSS selectors, but it returns all matching elements as a NodeList.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element in the DOM, 

//First, we create the element using createElement().
//Second, we add content or attributes to the element.
//Finally, we insert it into the document using methods like appendChild() or append().

### 3. What is Event Bubbling? And how does it work?
Event bubbling is a behavior in the DOM where an event starts from the element that was clicked and then moves up through its parent elements.

This process of the event moving from the child element to its parent elements is called event bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a way to handle events by putting a single event listener on a parent element instead of adding one to every child element.

This approach is useful because it reduces the number of event listeners, improves performance, and also works for dynamically added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Both are ways to control how events behave, but they do different things:
   //preventDefault(): Stops the browser’s normal action.

   //stopPropagation(): Stops the event from moving up to parent elements.

---




1. GitHub Repository Link: 
2. Live Site Link: 
