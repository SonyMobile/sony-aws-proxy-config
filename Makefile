
default:
	mkdir -p tmp
	npm test
	npm run-script jshint

ci:
	mkdir -p tmp
	npm install
	npm run-script test-ci
	npm run-script jshint-ci

package: ci
	npm pack
	mkdir -p packages/npm
	mv *.tgz packages/npm

clean:
	rm -rf *.tgz tmp packages


