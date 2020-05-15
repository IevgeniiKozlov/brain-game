install:
	npm install
brain-even:
	npx babel-node bin/brain-even.js
brain-calc:
	npx babel-node bin/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .