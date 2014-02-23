"Maintenance"
-------------

* define maintenance - ask, "what makes maintainable code?"
	- comprehensible: the code expresses its intent unambiguously in a consistent style e.g. 
	- adaptable: there are clear spaces available for improvement
	- extendable: modules have clear access points that allow behaviours to be enhanced e.g. jQuery's `fn`
	- testable: code has elements available to be observed and to have predictable behaviour

* what is important about maintainable code?
	- "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
	- "Be kind to your future self"

Donald Knuth: "Programs are meant to be read by humans, only incidentally by computers to execute"

Introduction JS
---------------

* The "Behaviour" pillar of front-end development
* Good parts: functions
* Bad parts: inconsistencies such as classical inheritance
	- "Automatic semi-colon insertion"
* Patterns
	- Immediately executing anonymous function (Module)
	- "Require JS"
* Anti-Patterns
	- "Private variables"
	- 

Style
-----

[Insert selfie with the master here]
Douglas Crockford:

"If there is a feature of the language that is sometimes problematic, and if it can be replaced with another feature that is more reliable, then always use the more reliable feature."

* Conventions
* Tricks for conciseness
* Tips for clarity
	- patterns
	- preferred usages

Libraries and Frameworks
------------------------

* jQuery
	- v2 doesn't support IE8
	- API is still nice
* Angular
	- front-end architecture (insert definition of architecture)
	- problems it attempts to solve
	- can live without jQuery
* EmberJS
	- problems it attempts to solve
	- steep learning curve
* Home-Grown
* Writing JS code without jQuery

Performance
-----------

* Script tags at the bottom
	- HTTP and "Keep Alive"
	- Maximum number of parallel connections allowed by browsers
* Asynchrony
	- XHR
	- <script async>
	- Browser is single-threaded when executing JS code

* Refer to next presentation in series

Tools
-----

* Linting tools for style and consistency
	- JS Lint
	- JS Hint
	- ES Hint
* Editors
	- VS & intellisense
	- Helper files
* Transpilers
	- TypeScript
	- CoffeeScript
	- ES6
	- Dart
* Bundling and minification
* Automation
	- Transpilation
	- Testing

Node.js
-------

* Time for another presentation

The Future
----------

* The present: ES5
* ES6
	- Promises are cool
	- Generators are cool
	- can be emulated now with transpiler

Recap
-----

* Maintenance
* Style 
* Libraries and Frameworks
* Tools
* The Future
* Performance (leads into...)

Coda
----

Handball to "Performance"

Resources
---------

* Embedded videos
* Links