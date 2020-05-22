install:
	npm install
brain-even:
	npx babel-node bin/brain-even.js
brain-calc:
	npx babel-node bin/brain-calc.js
brain-gcd:
	npx babel-node bin/brain-gcd.js
brain-progression:
	npx babel-node bin/brain-progression.js
brain-prime:
	npx babel-node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .