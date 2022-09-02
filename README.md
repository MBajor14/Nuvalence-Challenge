# NuvalenceChallenge

This is an Address Book app challenge.

## Deployment instructions
1. Clone project with `git clone git@github.com:MBajor14/Nuvalence-Challenge.git`
2. cd into `Nuvalence-Challenge` folder
2. Install packages with `npm install`
3. Run application with `npm start`
---
## Summary
### Overall Approach
- I started by using the CLI to get the angular project setup. The goal was to implement a new Address Book "feature", so I created a new module for that. I checked out the documentation for the API endpoint provided and used postman to test it and see what sort of data I'm working with. I also created an interface for the response object to make it easier to work with. I created some services to handle the HttpClient logic. Once I had the data flow setup, I built out the Address-book list page followed by contact details. I was going to do the breakpoints for responsiveness manually, but ended up leveraging bootstrap because of time constraints. I planned to get a few of the Todo's done as well, but had less time than I originally planned for.



### Todo's (if I had more time)
- Unit testing
- Pagination
- Accessibility
- Improved style + Animations
- Organize Sass and styling better
- Handle loading of page (UI)
- Add new contact feature would be a good next step too if the endpoint used wasn't just for getting mock data
