# Star Cab official website

![GitHub Logo](/images/starcab.bmp)


[Lets go to live preview](starcab.wroclaw.pl)


Website presents local transportation company. Provides simple information (adress, services, etc.) and allows to contact with the company owners by form. It is available in two languages: polish and english.


## Used technologies and approaches

During conceptual works, I have been relying on the Mobile First approach. Before finishing the project I made sure that the website
is abiding by Accessible Web Design rules. Furthermore, the website was tested on all common browsers, Internet Explorer and Safari included, to be sure that all users will be satisfied with the overall experience.

I have used following technologies:

    1. HTML5
    2. Preprocessor SASS
    3. Library JQuery
    4. PHP


## Used tools:

The followed tools were used to finalize project:

    1. Visual Studio Code
    2. GIT - as a control version system
    3. Webpack - to put all project's elements together into joined files ready to deploy
    4. Many popular plugins for Webpack to make production more efficient and easier

## Security:

I used simple filtering for HTML's special characters. One filter is used in the JavaScript to prevent the XSS's attacks and another one is used in PHP's file responsible for handling with POST's requests - it sends data with a neutralized special characters.

## Interesting facts about project:

Initial commit was made on May 14th and I has taken about 12 days of full time work, which gives around 80 hours.
As a first project the work-time seems to be quite long but all issues that I had to handle, gave me experience that will be an advantage during the next projects that are in my head.

I found it difficult to handle issues on the Safari browser no having any device designed by Apple. However there are many dev-tools that give you emulation of iOS environment, but my experience says that it misses some important features and the project looks differently on emulators than the real iOS device.

Because the website is for a friend of mine, I decided to host a website on the server. I put a lot of effort to handle that - again, my first time with that topic and plenty of searching and reading and asking about quite simple issues. Next approx. 10 work-hours to deploy the fully valuable products on the server. And again invaluable experience and knowledge about redirecting traffic from HTTP to HTTPS, how to handle SSL certificates, and much worthwhile knowledge.

However, according to the vast majority of web developers, it seems to be a deprecated tool and I am not going to use it in further projects and will rely on more advanced technologies.
