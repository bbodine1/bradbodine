---
title: My First Post
slug: my-first-post
description: Another test of the emergency broadcast system
image: https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
author: Brad Bodine
date: 2023-08-25
authorImage: /assets/brad_bodine.jpg
draft: false
---

## Headings

---

# Heading level 1

## Heading level 2

### Heading level 3

#### Heading level 4

##### Heading level 5

###### Heading level 6

## Paragraphs

---

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

## Emphasis

---

### Bold

I just love **bold text**.

### Italics

Italicized text is the _cat's meow_.

### Bold and Italic

This text is **_really important_**.

## Blockquotes

---

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.

## Nested Blockquotes

---

> Dorothy followed her through many of the beautiful rooms in her castle.
>
> > The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>
> "You must be tired," said the Witch, "let us go to bed and we will have a good sleep."

## Blockquotes with Other Elements

---

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>   _Everything_ is going according to **plan**.

## Lists

---

### Ordered List

1. First item
2. Second item
3. Third item
4. Fourth item

### Unordered List

- First item
- Second item
- Third item
- Fourth item

### Nested List

- First item
  - First nested item
  - Second nested item
  - Third nested item

### Starting Unordered List from 42

42. First item
43. Second item
44. - 1968\. A great year!

- I think 1969 was second best.

## Adding Elements in Lists

---

- This is the first list item.
- Here's the second list item.

  I need to add another paragraph below the second list item.

- And here's the third list item.

* This is the first list item.
* Here's the second list item.

  > A blockquote would look great below the second list item.

* And here's the third list item.

## Code

---

1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

At the command prompt, type `nano`.

`` Use `code` in your Markdown file. ``

My favorite search engine is [Duck Duck Go](https://duckduckgo.com 'The best search engine for privacy').

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page]({{site.baseurl}}/).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# [](#header-1)Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## [](#header-2)Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### [](#header-3)Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l);
  return true;
};
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### [](#header-4-with-code-not-transformed)Header 4 `with code not transformed`

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### [](#header-5)Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### [](#header-6)Header 6

[This is a very long link which wraps and therefore doesn't overflow
even when it comes at the beginning](.) of the line.

- [This is a very long link which wraps and therefore doesn't overflow the line
  when used first in an item ](.) in a list.

| head1        | head two          | three |
| :----------- | :---------------- | :---- |
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| git status   |   git status   |    git status |
| git diff     |    git diff    |      git diff |

### There's a horizontal rule below this.

---

### Here is an unordered list:

- Item foo
- Item bar
- Item baz
- Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And an ordered list, continued:

1.  Item one
1.  Item two

Some text

1.  Item three
1.  Item four

### And an ordered list starting from 42:

1.  Item 42
1.  Item 43
1.  Item 44

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Nesting an ol in ul in an ol

- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
  - level 3 item (ul)
  - level 3 item (ul)
- level 1 item (ul)
  1. level 2 item (ol)
  1. level 2 item (ol)
  - level 3 item (ul)
  - level 3 item (ul)
  1. level 4 item (ol)
  1. level 4 item (ol)
  - level 3 item (ul)
  - level 3 item (ul)
- level 1 item (ul)

### And a task list

- [ ] Hello, this is a TODO item
- [ ] Hello, this is another TODO item
- [x] Goodbye, this item is done

### Nesting task lists

- [ ] level 1 item (task)
  - [ ] level 2 item (task)
  - [ ] level 2 item (task)
- [ ] level 1 item (task)
- [ ] level 1 item (task)

### Nesting a ul in a task list

- [ ] level 1 item (task)
  - level 2 item (ul)
  - level 2 item (ul)
- [ ] level 1 item (task)
- [ ] level 1 item (task)

### Nesting a task list in a ul

- level 1 item (ul)
  - [ ] level 2 item (task)
  - [ ] level 2 item (task)
- level 1 item (ul)
- level 1 item (ul)

### Small image

![](/assets/brad_bodine.jpg)

### Large image

![](/assets/brad_bodine.jpg)

"[Wroclaw University Library digitizing rare archival texts](https://www.flickr.com/photos/97810305@N08/9401451269)" by [j_cadmus](https://www.flickr.com/photos/97810305@N08) is marked with [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/?ref=openverse).

### Labels

I'm a label

blue

green

purple

yellow

red

**bold**

_italic_

**_bold + italic_**

### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

#### Multiple description terms and values

Term
: Brief description of Term

Longer Term
: Longer description of Term,
possibly more than one line

Term
: First description of Term,
possibly more than one line

: Second description of Term,
possibly more than one line

Term1
Term2
: Single description of Term1 and Term2,
possibly more than one line

Term1
Term2
: First description of Term1 and Term2,
possibly more than one line

: Second description of Term1 and Term2,
possibly more than one line

### More code

```python
def dump_args(func):
    "This decorator dumps out the arguments passed to a function before calling it"
    argnames = func.func_code.co_varnames[:func.func_code.co_argcount]
    fname = func.func_name
    def echo_func(*args,**kwargs):
        print fname, ":", ', '.join(
            '%s=%r' % entry
            for entry in zip(argnames,args) + kwargs.items())
        return func(*args, **kwargs)
    return echo_func

@dump_args
def f1(a,b,c):
    print a + b + c

f1(1, 2, 3)

def precondition(precondition, use_conditions=DEFAULT_ON):
    return conditions(precondition, None, use_conditions)

def postcondition(postcondition, use_conditions=DEFAULT_ON):
    return conditions(None, postcondition, use_conditions)

class conditions(object):
    __slots__ = ('__precondition', '__postcondition')

    def __init__(self, pre, post, use_conditions=DEFAULT_ON):
        if not use_conditions:
            pre, post = None, None

        self.__precondition  = pre
        self.__postcondition = post
```

```

Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.

```

### Mermaid Diagrams

The following code is displayed as a diagram only when a `mermaid` key supplied in `_config.yml`.

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### Collapsed Section

The following uses the [`<details>`](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections) tag to create a collapsed section.

<details markdown="block">
<summary>Shopping list (click me!)</summary>

This is content inside a `<details>` dropdown.

- [ ] Apples
- [ ] Oranges
- [ ] Milk

</details>
