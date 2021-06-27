# SJSGL
SJSGL Is a simple javascript game library meant for beginners to learn javascript!

## Installation.

To get your hands on SJSGL you can download the ``SJSGL.js`` file from this page.
Then in your ``script.js`` javascript file import it with this line of code 
```
import * as SJSGL from './SJSGL.js'
```

### Make sure that you have added your script tag to have the type of module.

To download it with node.js use the command:

```
npm install SJSGL
```

## Setup.

To setup SJSGL you will need to first make a new instance of a game.

```js
const game = new SJSGL.Game();
```

This takes in 3 params a title, width and height.
From there you need to call the init function from game.
This will set everything that you need up.

```js
// These params are not required but would be good to use.
const game = new SJSGL.Game("Title", 500, 500);
game.init();
```

Now you need to make a function to setup things on your end.

```js
const game = new SJSGL.Game("Title", 500, 500);
game.init();

function setup() {
	game.setUpdateMethod(update);
}

function update() {
	
}
```

This will set up an update method for you to use in your code without having to go into the Game class
and changing anything!

### This was only an example. There is a lot more to this library, if you need help go to the documentation or join our discord.

# Support

Need help? Join our [discord](https://discord.gg/AdHZeeJrDx) or go through our docs.
Docs coming soon.
