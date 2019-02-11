---
title: Integrating the HTML/CSS and JavaScript developers. 
description: The process which enabled smooth co-ordination between javascript and HTML/CSS developers.
date: '2019-02-09'
image: teamwork.png
tags: ['process','innovation', 'CSS', 'JS']
---

## Context 
I work at a place, which is a client servicing company. We have a dedicated team per client. However, there are certain roles where devs are shared like UX, HTML/CSS developers a.k.a. Web developer. With this setup usually, one Web Dev. is working on multiple projects. There are some challenges to operate like this setup.

## Challenges 

### Chicken and egg problem. 
Who should start first should JavaScript a.k.a. frontend developer or UI team create HTML? If UI devs. provides HTML it's a separate task to get it integrated into the web app. Generally, web apps have frameworks like React, Angular or specific templating system. If frontend dev codes component, it goes for styling to Web Dev. Web devs do not necessarily know the framework used in the web app. Directly working with the JS code creates friction. Web devs proficiently work with HTML, CSS though are constrained on finding places to make changes in order to arrange DOM elements.

### Individual Web dev's coding style 
As web devs are shared one project goes through multiple developers in a rather short amount of time. Given raw CSS, to understand the underlying base CSS setup and make the change to add a new feature becomes difficult for every next rotating web dev. Every individual then makes changes as they see fit. It keeps on making an adaptation for the next one difficult in a vicious cycle.

### Reusing once styled HTML
As web devs tend to work across projects they could spot reusable HTML and their styling might be slightly different per project. As raw CSS delivered in an individual project, even if web devs want to reuse its hard to do so as the code is with frontend team.

## Solution 
After discussing with Web developers team, I came with process and tools trying to better integrate these teams.

The process tried to answer the following.

### Who should start first?
We decided that the Web development team will take the first stab.

There will be an initial meeting between both the web and frontend developers. They will decide how to breakdown the designs provided by page or by features. Then for each page or feature, there will be components identified.

Support for browsers and their versions is confirmed with the client.

The priority of the components to be delivered was decided as per project deliverables committed by frontend developers.

The breaking down is done for a known requirement and could be repeated as we get further designs.

Web developers will start working on basic page setup i.e. background, page layout, menus.

### Web developers delivery format
The delivery format was switched to either less or sass from raw CSS.

The web developer will create a separate repository per project.

The web developer creates a template, which will act as the placeholder for next deliverables. It will demonstrate both HTML and CSS applied on the web page. This will be maintained independently of frontend developer work in a repository created above. There will be a separate HTML & CSS per component developed and then placed inside a template.

As part of setup both the developers will agree on folder structure for this repository, either matching to the web app or independent of that. In both cases, how/where to locate individual component resources should be established and documented in README.md in the above repo.

In the case of frontend developer wants to makes changes to the component, those are first made in repo above and then integrated into the web app. This makes the flow changes one way. Solves the problem of overriding HTML/CSS by any of the developers.

The first delivery will be a basic page layout setup.

Every component's CSS will be with respect to a particular container element. The container will be highlighted with the border to mark the boundary.

This allowed for creating styled HTML which could be controlled from CSS with variables. These variables could be updated to reuse for a different theme.

The front-end developers could see the individual components in the real web page so that the adaptation in web-app becomes easy.

These per project repositories will be hosted in a GitLab instance where any employee could find them.

### Communication w.r.t. feature / component

With the help of a separate repository, the deliverables will be tracked via tags/ commits to master.

Frontend developers and web developers could communicate easily by referring to commits. They could also request iterations/updates to existing components delivered. This will all be kept in template page showing all variations of all components.

### Accountability of the deliverables
The front-end developers are accountable for the final integrated outcome. As they choose to integrate individual components and construct final UI however they want. Though, in-case there are any bugs found with the HTML and CSS those will be worked upon by web developers.


## Impact 

### Generic HTML and CSS component library 

The web development team is able to create a separate library with the above approach outside of their regular client work. Which could be reused with client's permission in their project saving time and getting more things done.

### Productivity increase for Web developers and Frontend Developers
Now they have sass/less to read and documented repositories on how the HTML, CSS setup works outputs. It has become easy/predictable to switch projects which help in optimising day time at hands.

Any web developer can pick up others work.

Frontend developers can coordinate with any web developers, he need not be the one who set up the base project. They can focus on integration assuming that individual component CSS will work in a given container.

### Numbers
This resulted in 1/4th to 1/3rd time saved per project for web developers. Ready to use the library of styled HTML widgets for frontend developers. On average, half an hour daily of co-ordination time saved.


###*It was recognised as a process innovation for the process proposal and help in execution.*




