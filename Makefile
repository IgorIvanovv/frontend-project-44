# Makefile
install:
	npm ci
start:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .