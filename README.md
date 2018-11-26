# First breakout
## finger math algorithm

Hey all, as mentioned during lecture you can expect instructors to share their notes/code after each lecture. Here is a quick recap of what we covered today:

## Overview of the bootcamp
We went through some a quick breakdown of what will be 
done week to week.  Here are the slides in case you want to review on your own.  If you have any questions about the weeks ahead feel free to send them to Emma.

[The Curriculum](https://docs.google.com/presentation/d/1X14TFvGNrV1wM26ZZuZVR4gioqwvJpF_iP0jXgfwvMw/edit?usp=sharing)

## Life as a Dev
I wanted this first lecture to be more about the method than the problem itself.  Throughout this lecture I insisted on a few points:

- Understand the relationship between your Github repo and your local git clone
- Solving a problem involves articulating the solution into smaller steps and tackling one at a time.
- Errors are helpful a they tell you what needs to be fixed.
- As you code, remember to test and whenever your code seems to be "stable", don't forget to...
- Commit.  Actually we talked about the cycle you should repeat constantly:

```
git status .
git add some_file.js
git commit -m "some message to remind me what I did"
```

## Algorithm
To make things fun we worked on a simple algorithm that allows us to multiply very "large" numbers.

- Pick two numbers between 6 and 10
- Map numbers to each hand following these order:
  - 6 -> thumb
  - 7 -> index
  - 8 -> middle
  - 9 -> ringer
  - 10 -> pinky
- Group all fingers that are up to the "mapped" finger
- Repeat for the second number on the other hand
- Join the mapped fingers, count them and multiply by 10
- Take the leftover fingers from each hand and multiply left by right
- Add up the mapped x 10 value with the leftover multiplication
- Done... this should be the result

You can find the [code repo](https://github.com/jugonzal/w1d1-nov26) in my github.

Let me know if you have any questions.  I can be found via your Slack channel.
