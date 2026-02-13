16. You are building a bank transaction history page. Which data loading approach 
(pagination, infinite scroll, etc.) would you use and why?  
- For bank transaction history, I would use pagination 
- Transaction requires structured details of sender,recipient, UPID and stuff are required
- If someones wants to say filter out a particular month's data then pagination helps their
17. You are building a social media feed. Which approach would you choose and why?  
- For a social media feed like Instagram,Facebook I would use infinite scroll
- User go to this platform to discover new stuff rather than to actual find something
- When one wants continuous new contents then infinite scroll is best pick,it encourages longer sessions as flow of looking for content is not broken anywhere
18. A React app slows down after scrolling for 5 minutes. What could be the cause and 
what is a possible solution?  
- Possible issue is huge amount of data has arrived onto the site and site is using infinite scroll and is unable to load this much data
- Too much data means huge amount of data is rendered leading to massive DOM creation
- One possible solutin could be to stop rendering what is not seen to the user
- Unmount what is not seen to the user and mount the new data, this way only the content which is seen will be rendered.
19. Why would infinite scrolling be a bad choice for an admin panel?  
- An admin panel requires specific and structured way to organize and see through the data
- If an infinite scroll is used then the required data or the target data which the admin is trying to find will be very tough to search
- If pagination is used then every page will contain specific data because of which if one wants to say delete some content and in the Index it is written that page 5 contains that specific data then instead of scrolling all the pages only page 5 will be searched.
20. How would you explain pagination vs infinite scrolling to a non-technical product 
manager?
- If you are looking for specific goal driven ideas like a partiuclar product has a xyz feature then pagination will help you a lot
- With pagination, you can look at the index and check where exactly does produxts with this features exists. Filtering out stuff becomes easy here
- If you are looking something new, something fresh discovering new ideas or so then infinite-scroll would be preferable to you as you don't have a particular feature in mind you are just brainstorming new ideas for a particular product
- Another example would be you go to the grocery store you know that the milk is their in the back the fruits are in the 2nd Row you know the destination and search accoridngly.This is an example of pagination.
- Now say you have gone to a Art Gallery, their you are just going to see new painitings you are not going for a specific painting. This is an example of infinite-scroll 