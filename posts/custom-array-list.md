---
title: 'Custom Array List'
date: 'September 5, 2022'
excerpt: 'Custom Array List Implementation'
cover_image: '/images/posts/img6.jpg'
---

# Custom Array List

<b>Arrays</b> are a consecutive block of memory set at a certain length which stores information.

Unlike arrays, <b>List</b> is also a collection of consecutively arranged data, but on a more abstract level. List allows adding/removing elements at different positions (beginning, middle or end).

An example of such Abstract Data Type (ADT) in C# is the `System.Collections.IList` interface. But in this blog, we'll implement our own array based List. It's achieved by using <b>array</b> with <b>dynamic resizing</b>. In this custom implementation, our class will be able to hold any data type `<T>` through the concept of Generics

## Creating the class `ArrayList<T>`

1. We need to give a name to our class, which will be `ArrayList<T>`.
2. Create an `array` which will hold the values in our list, as well as `count` to keep track of how many elements we have in our list.
3. Set a getter for count by creating a `Count` property.
4. We also need to define a constructor to initiate an object of this class. The default capacity at creation for this example will be `4` if capacity is not given. The reason for this is to avoid resizing right away when first couple of elements is added.

```csharp
public class ArrayList<T> {
    private T[] array;
    private int count;
    private const int DEFAULT_CAPACITY = 4;

    public int Count {
        get
        {
            return this.count;
        }
    }

    ArrayList(int capacity = DEFAULT_CAPACITY) {
        this.array = new T[capacity];
    }

}
```

## Growing Operation

One of the important parts of `ArrayList` unlike regular arrays, that it has thethe ability to auto resize when the list is full. Let's implement this function first to get it out of way.

So the logic would be to double the size of the capacity whenever the list is close to being full

```csharp

```
