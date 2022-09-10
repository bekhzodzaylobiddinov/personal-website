---
title: 'Hash Table Data Structure'
date: 'September 10, 2022'
excerpt: 'Explanation of what Hash Table is and strategies to prevent collisions'
cover_image: '/images/posts/img6.jpg'
---

<br>

Let's assume we have a <b> list </b> of randomly ordered elements. We want to check if a certain element is in teh list.

The worst case scenario is to check every element in the list and time complexity would depend of the number of elements, hence `O(n)`.

This can be optimized using <b> Hash Tables </b> of key-value pairs. If we have a key, the number of comparisons that we would need to do to find out if there's a same key with value is <b> constant</b> and doesn't depend on the number of elements. Let's discuss how such efficiency is achieved.

## What is a Hash-Table?

Hash Table is a data structure that <b>maps keys to values for highly efficient lookup.</b>

This data structure is usually implemented interfnally with an <b>array</b>. Each cell contains a pair: a <b>key and a value</b> or empty `null`.

### Capacity and Load Factor

The size of the internal storage array of the hash-table is called <b> capacity </b>.

The <b>load factor </b> is a real number between `0` and `1`, which stands for the ratio between the occupied elements and the current capacity

```csharp

// The load factor for hash table

// Capacity: m
// Elements in hash table = 3
//====
// Load Factor: 3/m
```

## Hash Function & Hash Code

When adding or searching for elements, a method for hashing the key (<b>hash function</b>) is executed, that returns a number (<b> hash-code </b>).

Hash code usually be an `int` or `long`. Note that two different keys could have the same hash code, as there may be an infinite number of keys and a finite number of ints.

When we take the division remainder of this hash-code and the capacity <b>m</b> we get a number between <b> 0</b> and <b>m-1</b>:

<b>`index = hash(key) % m`</b>

This would give us where to look or insert our key-value pair in the hash table

## Load Factor

The internal table's capacity is increased (similar to dynamic sized array where it doubles in size when full) where number of elements in the hash-table becomes greater or equal to a certain constant called <b> fill factor</b>.

When increased, all the elements will be reordered by the hash code of their keys and their assigned cell is calculated according to the new capacity.

The <b>load factor</b> is significantly decreased after the reordering. This operation is time consuming, but it is executed relatively rare, so it will not impact the overall performance of the "add" operation.

## Resolving Collisions

In a perfect hash function, would would get unique hash code for our keys and distribute it with reasonable interval. However in practice, <b>collisions happen almost always</b>. That is why we need to live with the idea of the collisions presense in our hash-tables and take them into account.

### Chaining in a List

The most widespread method to resolve collisions problem is <b>chaining</b>. Its major concept consists of storing in a list all the pairs(key,value) which have the same hash-code for the key.

### Linear probing

This is the one of the easiest methods for implementation. Linear probing, in general, can be presented with the following sample cod:

```csharp
int newPosition = (oldPosition + i) % capacity
```

Here <b>capacity</b> is the internal table capacity, <b>oldPOsition</b> is the position where collision occurs and `i` is a number of next probing. If the new position is free, then we place the new pair there. Otherwise we try again (probing), incrementing `i`.

Probing can be forward or backwards. Backward probing is when instead of adding, we are subtracting `i` from the position we have collision for.

The advantage of this method is the <b>relatively quick way to find of a new position</b>.

### Quadratic Probing

Quadratic probing is a classic method for collision resolution. The main difference between quadratic probing and linear probing is that it uses a quadratic function of i (the number of the next probing) to find new position. Possible quadratic probing function is shown below:

```csharp
int newPosition = (oldPosition + c1*i + c2*i*i) % capacity;
```

By choosing c1 and c2 we define the position we are going to probe, compared to the starting position. For instance, if c1 and c2 are equal to 1, we are going to probe consequently oldPosition, oldPosition + 2, oldPosition + 6, … For a hash-table with capacity of the kind 2n, the best is to choose c1 and c2 equal to 0.5.

Quadratic probing is more efficient than linear the linear probing.

### Double Hashing

As the name implies, the <b>double hashing</b> method uses <b>two different hash functions</b>. The main concept is that, the second hash function is used for the elements that fall into a collision. This method is better than the linear and quadratic probing, because all the next probing depends of the value of the key and not of the table position inside the hash-table. It makes sense, because the position of a given key depends on the current capacity of the hash-table.
