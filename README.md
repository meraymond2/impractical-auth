## React Demo ##
This is the first implementation of a completely impractical little authentication widget that I've been meaning to experiment with. Rather than authenticate based solely on the characters that have been entered, it takes into account the duration of each keypress, and the length of time in between keypresses. 

In order to pass the authentication, you must press:  
1. 'a' quickly  
2. 'b' quickly  
3. 'c', held down for at least a second  
4. then wait at least a second  
5. and then 'd' quickly

It's also an excuse to start playing with Flow for type annotations.

It can either be run from the .html file itself, or there's a little Dockerised nginx server (all of the necessary commands are in the package.json).

There are some unit tests, and I'll write more when I find the time.