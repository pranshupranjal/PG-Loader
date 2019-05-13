# PG-Loader
This is a loader which i made for my friend Pradyun S Gedam. :wink:

![PG-Loader](/cover.png "PG-Loader")


:octocat: This work is hosted for live preview at [PG-Loader](https://pranshupranjal.github.io/PG-Loader/)

## How does the water animation work

This whole animation is built on SVGs and TweenMax JS.

There is a separate SVG for each letter i.e. P & G respectively.

To make the animation work, concept of Masking is used.

Water ripple effect is based on moving a wave svg from left to right on an infinite loop.

    Left to Right movement:
        x:-600 to x:-200

    Bottom to Top movement:
        y:666 to y:-200

## How is masking utilised

Now there are two separate sets of SVG utilised. :collision:

- One set is for providing the stroke of the letters.

- One set is for providing the fill of letters which will be masked by the water animation.

## Color Palette

![#1774BF](https://via.placeholder.com/100/0000FF/FFFFFF?Text=#1774BF)
![#FFFFFF](https://via.placeholder.com/100/FFFFFF/000000?Text=#FFFFFF)