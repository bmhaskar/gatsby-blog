---
title: Integrating the HTML/CSS and JavaScript developers. 
description: The process which enabled smooth co-ordination between javascript and HTML/CSS developers.
date: '2019-02-09'
image: teamwork.png
tags: ['process','innovation', 'CSS', 'JS']
---

## Context 
I work at a place, which is a client servicing company. We have a dedicated team per client. However there are certain roles where devs are shared like UX, HTML/CSS developers a.k.a. Web developer. With this setup usually one Web dev. is working on multiple projects. There are some challenges to operate like this setup. 

## Challenges 

### Chicken and egg problem. 
Who should start first should JavaScript a.k.a. frontend developer or UI team create HTML? If UI devs. provides HTML its a separate task to get it integrated into web app. Generally web apps have frameworks like React, Angular or specific teplating system.  If frontend dev codes component, it goes for styling to Web dev. Web devs does not necessarily know the framework used in web app. Directly working with JS code creates a friction. Web devs proficiently work with HTML, CSS though are constrained on finding places to make changes in order to arrange DOM elements. 

### Individual Web dev's coding style 
As web devs are shared one project goes through multiple developers in rather short amount of time. Given raw CSS, to understand the underlying base CSS setup and make change to add a new feature becomes difficult for every next rotating web dev. Every individual then makes changes as they see fit. It keeps on making adoptation for next one difficult in a vicious cycle.

### Reusing once styled HTML
As web devs tend to work across projects they could spot reusable HTML and their styling might be slightly diffrent per project. As raw CSS delivered in individual project, even if web devs wants to reuse its hard to do so as the code is with frontend team.

## Solution 
After discussing with Web deelopers team, I came with process and tools trying to better integrate these teams.

The process tried to answer following. 
### Who should start first.
We decided that Web development team will take a first stab. 

There will be initial meeting between both web and frontend developers. They will decide how to breakdown the designs provided by page or by features. Then for each page or feature there will be components identified. 

Support for browsers and their versions is confirmed with client.

The priority of the components to be delivered was decided as per project deliverables commited by frontend developers.

The breaking down is done for known requirement and could be repeated as we get further designs. 

Web developers will start working on basic page setup i.e. background, page layout, menus. 

### Web develoeprs delivery format 

The delivery format was switched to either less or sass from raw CSS. 

The web developer will create a separate repository per project. 

The web developer creates a template, which will act as placehodler for next deliverables. It will demonstrate both HTML and CSS applied in web page. This will be maintained independent of frontend developer work in a repository created above. There will be a separate HTML & CSS per component developed and then placed inside a template.
 
As part of setup both the developers will agree on folder structure for this rpository, either matching to web app or idependent of that. In both cases, how/where to locate individual component resourcces should be established and documented in README.md in above repo. 

In case frontend developer wants to makes changes to component, those are first made in repo above and then integrated into the web app. This makes the flow changes one way. Solves the problem of overriding HTML/CSS by any of the developers. 

The first delivery will be a basic page layout setup. 

Every component's CSS will be with respect to a particular container element. The container will be heighlighted with border to mark the boundary.

This allowed for creating styled HTML which could be controlled from CSS with variables. 
These variables could be updated to reuse for a diffrent theme.

The frontend developers could see the individual components in real web page, so that the adoptation in web-app becomes easy. 

These per project repositories will be hosted in a GitLab instance where any employee could find them.  

### Communication w.r.t. feature / component  

With the help of separate repository, the deliverables will be tracked via tags/ commits to master. 

Frontend developers and web developers could communicate easily by refering to commits. They could also request iterations / updates to existing components delivered. Which will all be kept in template page showing all variations of all components.

### Accountability of the deliverables 

The frontend developers are accountable for final integrated outcome. As they choose to integrate individual components and constuct final UI however they want. Though, in-case there are any bugs found with the HTML and CSS those will be worked upon by web developers. 


## Impact 

### Generic HTML and CSS component library 

The web development team is able to create a separate library with the above approch outside of their regular client work. Which could be reused with client's permission in their project saving time and getting more things done. 

### Productivity increase for Web developers and Frontend Developers 

Now they have sass/less to read and documented repositories on how the HTML, CSS setup works, outputs. It has become easy/prdictable to switch projects which helps in optimising day time at hands. 

Any web developer can pickup others work. 

Frontend devlopers can co-ordinate with any web developers, he need not be the one who setup the base project. They can focus on integration assuming that individual component CSS will work in a given container. 

### Numbers 

This resulted in 1/4th to 1/3rd time saved per project for web developers.
Ready to use library of styled HTML widgets for frontend developers. On an average, half an hour daily of co-ordination time saved.


##*It was recognised as process innovation for the process proposal and help in execution.*




