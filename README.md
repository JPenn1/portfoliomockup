[!] Navigation disappears on narrow screens and I don't see a way to bring it back. Recommend adding a menu link in the header to expand the menu. (01)

[!] Recommend opening all external links in a new window so that users aren't directed away from your page, such as project links and social links.

Recommend making the icons in your social links clickable as well as the names[DONE]

Page title is "My Portfolio." Recommend changing page title to include your name.[DONE]

Recommend adding a favicon[DONE]

[N] [!] mobile-first design

Following the workflow of mobile-first design is a requirement for all Thinkful projects.

In mobile-first, our default styling is for mobile. We then use min-width to override small bits of the mobile styling for larger screens.

The general CSS layout will look as follows (notice the user of min-width as opposed to max-width):

body {
    /* default styles here, 
       targets mobile first */
}

@media screen and (min-width:480px) {
  body {
    /* style changes when the screen gets larger */
  }
}

@media screen and (min-width:800px) {
  body {
     /* And even larger */
  }
[N] [!] semantic, valid markup
You have some validation errors in your markup. I recommend running your code through the W3C HTML Validator. Warnings are OK, but errors should be resolved. See: https://validator.w3.org/nu/?doc=https%3A%2F%2Fjpenn1.github.io%2Fportfoliomockup%2F%23home.

[Y] built from scratch (do not use templates)

[Y] responsiveness from 320px to 1600px width screens

[Y] attention to typographical detail and complementary color scheme

[Y] content clarity and readability

Contact Section has:

[Y] email
[N] [!] github
[Y] linkedin
About Me section:

[Y] demonstrates passion for the web
[N] wanting to work on a team with great programmers
[!] No specific mention of desire to work on a team. This can be an important trait for potential employers.
[Y] personality outside of coding
[Y] has no typos
Project section of the Portfolio

[Y] Is it easy to see the projects?
[N] Is layout confusing or are projects hidden?
Project 1 includes:

[Y] The title of your project
[Y] A description that explains what the app does, who it’s for, why you built it (this text should not be hidden behind a hover or click event)
[Y] Skills used (what is the stack)
[Y] Compelling screenshot
[Y] Link to GitHub repo
[Y] Link to live, working app
