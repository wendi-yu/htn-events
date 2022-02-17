# Writeup

## The Process

I'm not going to lie, this was a dumpster fire. Full disclaimer, it's entirely my fault for leaving it til like 5 hours before the deadline. But anyways, I'm mostly a backend dev; my frontend work has been limited to bugfixes and adding pre-existing components. So this project required a lot of exploration and stack decisions that I was probably ill-equipped to be making. 

In terms of structure and design, I chose a single-page React App for the simplicity it provides. I think a good philosophy when starting new projects is to not make things more complicated than they need to be - overengineering is the death of readability and efficiency. So I went with an SPA and Bootstrap/CSS to take advantage of the relative simplicity of this project, since I didn't need a ton of custom components or styling. I chose React because it's the only frontend framework I've worked with, and this project seemed suited to a modular breakdown into components. I decided to assemble singleton components in the main App component, and cobble together the subcomponents for the reapeated events separately.

I encountered the usual suite of problems, mostly arising from my lack of experience doing frontend work. A lot of them were just general struggles with achieving the right layout and style and navigating Bootstrap's framework, which I generally solved with liberal Googling of code examples. I spent a while deciding how to design the actual appearance of the events page, since I wanted to emphasize the important information without cluttering the design. I actually made a Figma [here](https://www.figma.com/file/ABdBrTO2VoTuN2S2M6a1hF/Untitled?node-id=2%3A37), which is what I ideally would have wanted the finished product to look like. I initially considered a card-like layout (hampered by the fact that we didn't have a main picture for the events), a calendar-like view (decided against it because the events are spread 11 months apart), so I went with a linear list view instead. 

## More Time

I'd clean up a lot of things if I had more time. I'd definitely check if I was using Bootstrap properly, and try to fully leverage its builtin customization functionality instead of customizing so much with CSS. I'd probably change the positioning system over to flexboxes for better scaling (or even use the Bootstrap breakpoints), fix up the design for mobile, and add more accessibility features. I'd also implement the search and filtering functions, probably by keeping a master list of filters to apply to the events shown. In addition, I'd actually implement login properly.

In terms of scalability, I'd definitely want to incorporate a proper authentication system, rather that relying on a homebrewed solution. A dedicated library is likely much more secure and performant than anything I could write up in a reasonable amount of time. I'd also add unit tests to support the extensibility of the codebase. I might add the ability to star events for logged in users so they can save what thye're interested in, but beyond more filtering/marking options I wouldn't extend the capabilities of this page specifically. It looks like there's already hopin to register and the rest of the website for other interesting offerings, so for the sake of separation of concerns I'd keep this page as what it is - a dashboard overview of offered events. Performance metrics would be interesting to see how long API calls are taking, but since it's not a very dynamic page I wouldn't go ham on this application over other, more interactive components.

## Other thoughts
Sorry it's kind of a disaster :)
