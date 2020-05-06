install:
	npm install
start:
	npx babel-node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .