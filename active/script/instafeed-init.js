var feed = new Instafeed({
    accessToken: InstagramToken,
    limit: 5,
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
    target: 'instafeed'
});
feed.run();
