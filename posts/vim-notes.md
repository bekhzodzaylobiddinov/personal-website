---
title: "VIM Notes"
date: "February 19, 2022"
excerpt: "Here's the most common commands I use in VIM"
cover_image: "/images/posts/img4.jpg"
---

Here's the most common commands I use in VIM

## How do I get out?

First things first, when using VIM, a lot of people who are new to this often get stuck in the editor and can't get out. Below are the common commands to exit/save.

> `:q` - quit without changing
> `:q!`- force quit
> `:w` - save
> `:wq` - save and quit

## How do I navigate?

> `j` - down
> `k` - up
> `l` - right
> `k` - left

> `w` - next word
> `W` - next word (ignore punctuation)
> `b` - back to previous word
> `B` - back to previous word (ignore punctuation)

> `0` - go to the beginning of the line
> `^` - go to the first non-empty word (same as `0w`)
> `$` - go to the end of the line
> `gg` - go to the top
> `G` - go to the bottom

> `{` - go block up
> `}` - go block down

## Cursor Manipulations

> `i` - insert mode on the cursor
> `I` - insert mode from the beginning
> `a` - insert mode but start with one char over
> `A` - insert mode at the end
> `o` - insert mode at a new line
> `O` - insert mode in a previous new line
> `R` - insert and start overwriting
> `>>` - indent (tab)

## Undo / Redo / Repeat

> `u` - for Undo
> `Ctrl + R` - for Redo
> `.` - Repeat previous key binding

## Copy and Paste

> `yy` - Yank/Copy
> `p` - Paste below
> `P` - Paste above

## Delete

> `dd` - delete a line
> `dw` - delete a word
> `D` - delete everything on the right of the cursor
> `C` - delete everything on the right of the curson and insert
> `x` - delete one char on the right of the cursor
> `X` - delete one char on the left of the cursor

## Visual Select

> `v` - visual mode to select
> `y` - to copy selected
> `d` - to delete selected

## Searching

> `t` - go to (one left)
> `f` - go to (on it)
> `;` - keep searching for the next ocurrence

## Replacing

> `r` - replace a letter on the cursor
> `R` - insert and start overwriting
> `~` - swap lowercase to uppercase or vice versa

_Tags_: #VIM #how-to
