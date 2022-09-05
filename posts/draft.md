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

First, we need to give a name to our class, which will be `ArrayList<T>`
