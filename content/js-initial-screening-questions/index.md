---
title: JS Initial screening questions
description: Some of the question which are asked as part of initial screening.
date: '2019-01-20'
image: interview-1018332_1920.png
tags: ['javascript', 'job','screening','questions']
---

These days along with your resume companies ask some intial filtering questions. 
I am listing some of those with my own answers below. I will try to keep both question and answers updated. 

## What is the benefit of using a library like React/Vue/Angular vs using plain old JavaScript? What is your experience level with one of those frameworks?
 
Using React like libraries gives me a context, premises and a methodological way to build any web app. It enables reuse. I get ready to use solutions to most common problems and patterns to code specific use cases. JavaScript on other hand feels open ended. 
I have tried Vue, Angular for experiments. I have extensive 3 year experience with React. 
 
 
## When is CORS needed and how does it work in the browser?

For security reasons, browsers restrict cross-origin HTTP requests. When you need to access resources from the different domain than the one with which site was served in browser you need cross origin resource sharing. 
E.g. Loading data from separate API domain. Loading fonts from shared platforms. Images from separate CDN. 
 
CORS mechanism is implemented with special set of headers starting with Access-control-*. These headers specify from which server the requests are allowed along with HTTP method.
browsers preflight the request, soliciting supported methods from the server with an HTTP OPTIONS request method, and then, upon "approval" from the server, sending the actual request with the actual HTTP request method. 
 
 
## What is an XSS attack? Explain what can lead to one and how can it be prevented?
 
XSS is cross site scripting, a security exploit. The web app taking any input from user either via forms, URL data, cookies read which is then processed in the application, can  be exploited to insert the malicious script which ultimately gain the context and control of execution. 
Masquerade any legitimate request could also be used. 
 
Malicious code could do anything like posting data to attackers’ server. Render dummy page instead of original page. 
 
It can be avoided by not trusting any user input. Validating it for type, length, format and range. Encoding it prior to re-use it either for display or processing. 
For forms we can set charset which could help reduce script injection. We can ask for re-authentication before editing sensitive data. We can use source code scanning tools to detect the vulnerabilities. 
 
One should always conduct penetration test before putting code in production. 
 
## Tell us about your latest "hard to debug" problem. How did you resolve it? Which tools did you use?
Recently I worked on sending a command and downloading a file on remote location/ IoT edge. We are using NodeJS with Google platform.  I have a queue where the command is sent, the remotes subscribe to the queue and start the downloading the download progress is communicated back via progress messages. 
1.	We observed that download seemed stuck for long time and suddenly completed to 100%
2.	The progress seemed to increase as well as decrease. 
To debug this I added debug log messages to log the file size returned by the downloader to ascertain the real file download is happening. 
 
This was hard to debug as we could see the messages produced in correct order via existing logs. We had tests to verify that the processing after receiving the progress message it is displayed correctly in UI. 
 
I added a UTC (Zulu time) timestamp to messages. After including logs into consumer for the message timestamps we saw that multiple consumers were receiving the progress messages in different order. To realize this I had to put a separate logger to log it at a central location with ELK. The implementation also improved our logging infrastructure. 
 
Later we added message rejection mechanism if we updated the records in db had higher timestamps than message received. 

## Tell us about your most advanced/exciting/mind-blowing JS/CSS implementation
 
The project was about data analytics and visualization. 
1.	The user could write a custom DSL to analyze the data 
2.	The analyzed data then could be viewed via existing widgets. The challenge was to show the same DSL output via different widgets having different config. 
 
I had implemented the custom DSL with the help of ANTLR, which would generate a JS tree visitor based on grammar specified. We modified the visitor to generate JS code. 
 
Then I implemented UI which would take the DSL input, generate a JavaScript, that would be run into mongo aggregation pipeline.  The result of which is used to map with existing widgets input from UI. We saved mapping as config. 
 
Next, I have implemented a which would render the UI from the specified JSON configuration. The amazing part of it is, it looks for API config as it picks components to render in config AST. Then use that API config to do API call to get the DSL output generated as mentioned above. Lastly map the response of API to the component’s props based on mapping saved, with the help of hydration mechanism. We could show same data with stacked bar chart as well as via speedo meters. All configured by user. 
 
All of the above UI was done in React 15. 




