# ring thing!

a very simple way to make your own [webring](https://en.wikipedia.org/wiki/Webring). once a user is added to your webring's circular "members" list, they can easily add your widget to their site, which will
automatically create links to the previous and next sites in the webring and display the webring's icon.

<img width="304" height="123" alt="image" src="https://github.com/user-attachments/assets/0be7379b-6b27-4352-af13-bf491290c150" />

### how to make a webring
1. add [this file](ring-thing.js) to your static site files
2. add the full URLs of your members' sites to the `members` array
3. replace `iconURL` with the URL of your webring's icon

### how users add your webring's widget to their site
users simply add the following lines to their websites html
```
<span id="ring_widget"></span>
<script src="[link to YOUR ring-thing.js file]"></script>
```
_note: the page that this is added to must have same url as the one listed in `members`_
