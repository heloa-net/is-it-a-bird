# Is it a bird?

Based on this xkcd comic

[![XKCD comic 1425 titled "Tasks"](https://imgs.xkcd.com/comics/tasks.png)](https://xkcd.com/1425)

The idea here is to bring the comic to life, allowing the user to perform a GIS* lookup of a photo to check whether it is from a national park and whether there's a bird in it.

I've built an image classifier using a pretrained model from [fast.ai](https://www.fast.ai/) and trained it to identify birds, forests and squirrels.

The app also uses [TomTom Search API](https://developer.tomtom.com/search-api/), which accepts an address or geographical coordinates, and returns the points of interest in the location, for example, a park.

*GIS in this context stands for Geographic Information System

## Next steps

- Quality (tests)
- Responsive design
- More xkcd graphics
- Image uploading
- Input location
- Try different image classification models
- Authentication


