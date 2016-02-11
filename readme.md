# lrInfiniteScroll

lrInfiniteScroll is a module for [AngularJS](http://angularjs.org/) which allow you to attach an event handler to the element when this element has been scrolled almost to its bottom. In most of the case it will be used for infinite scrolling.
It is very light (about 45 lines of code) and optimized to reduce the amount of $digest loop.

See the [example section](http://lorenzofox3.github.io/lrInfiniteScroll/index.html#example).

## Attach an Event Handler

Simply set as attribute a function accessible within the $scope:

```html
<ul lr-infinite-scroll="myEventHandler">
    <li ng-repeat="item in myCollection">
</ul>
```

## Change the Scroll Threshold

By default the handler will be called when the user is scrolling *down* and only *50* pixels are remaining before reaching the end
of the element. You can overwrite the 50px by setting the attribute *scroll-threshold*:

```html
<ul lr-infinite-scroll="myEventHandler" scroll-threshold="200">
    <li ng-repeat="item in myCollection">
</ul>
```
## Change the Time Threshold

To reduce the amount of $digest loop, instead of calling the handler whenever a scroll down event is detected in the end zone a timer is started and if no other event is detected within 400ms, then the handler is called.

You can overwrite the time value by setting the *time-threshold* attribute:

```html
<ul lr-infinite-scroll="myEventHandler" scroll-threshold="200" time-threshold="600">
    <li ng-repeat="item in myCollection">
</ul>
```

## License

lrInfinite scroll module is under MIT license:

> Copyright (C) 2013 Laurent Renard.
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation files
> (the "Software"), to deal in the Software without restriction,
> including without limitation the rights to use, copy, modify, merge,
> publish, distribute, sublicense, and/or sell copies of the Software,
> and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
> BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
> ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
