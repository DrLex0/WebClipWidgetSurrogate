# Web Clip Widget Surrogate
*Instant legacy: create new instantly obsolete Web Clip widgets for Mac OS X Dashboard*

If you decided to hang on to Mac OS X Mojave or an even older OS X version for a while, chances are you might still be using Dashboard. If you do, you may have noticed that using the Web Clip feature in Safari leaves much to be desired. In Mojave it appears mostly broken, with the widget having a weird offset and being generally unusable.

This repository offers a relatively simple way to create your own Web Clip-like widgets without even relying on Safari. Because widgets are basically webpages, this widget loads a URL of your choice in an iframe. Some specific fiddling was required to make this work, but you shouldn't need to care about this.

To make your own widget, edit these files in the `Widget package` folder:
* `scripts.js`: here you need to set the URL to load, and the interval for refreshing the page. The page will only refresh when invoking Dashboard and if the last refresh was longer ago than the value of `refreshInterval` (in milliseconds).
* `Main.html`: here you need to update the `width` and `height` values (twice) to choose the dimensions of the page. You could also set the `scrolling` attribute of the `iframe` element to `auto`, but mind that scrolling will only work when the mouse is over the scroll bar (at least that's how it is in Mojave).
* `Info.plist`: here you need to set a unique identifier in `CFBundleIdentifier`. It doesn't need to correspond to anything existing, the only thing that matters is that it is unique. Also set sensible names in the `CFBundleDisplayName` and `CFBundleName`. It is advisable to increase the version numbers each time you change the widget and want to replace the one you were previously running, although this is not strictly necessary. What you also need to update in this file are the `width` and `height` values. The values in this file must be the values you used in `Main.html`, but each incremented by 10. So if you used for instance `234×576` in the HTML file, the dimensions in the plist must be `244×586`.
* `Icon.png`: edit or replace with your own image to make the widget more recognisable in the overview.
* `Default.png`: this is an image that is only shown when the widget loads for the first time. You could just replace this with a white image if you don't see a need for it.

To deploy the widget after making your changes, copy the `Widget package` folder and rename it to your new widget's name, with a `.wdgt` extension at the end. Answer ‘yes’ when you are being asked whether you want to change the extension. The widget folder should now get a widget icon. Just open it, and you should be able to install it in Dashboard like any other widget.

It is highly recommended to first remove any old versions of your widget from Dashboard before deploying a new version. If you bumped the version, it might cleanly upgrade, but sometimes Dashboard simply goes boom. My impression is that Dashboard has been rather neglected in recent OS X versions, so it is not a surprise that it disappeared altogether in Catalina.

Note that as it is now, the widget only allows showing webpages from their top left corner. I'm sure it must be possible to move to any position in the page as was possible with the real Web Clips, but I didn't have the need for it yet and haven't looked into this.

The example code will load a random page from the mobile Wikipedia website. This isn't terribly useful because you cannot easily open the page in a decent browser in case it's something interesting. Some extra code would need be added to allow this, but that's outside the scope of this example. Also, you may want to change the `scrolling` attribute to `auto` if you want to keep using this widget and make it somewhat more useful…

Enjoy your instant legacy!

## License

This is released to the public domain. No limitations, but no guarantees of any kind either!
