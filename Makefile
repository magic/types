CLI=./cli.sh

.PHONY: \
	all \
	dev \
	build \
	clean \
	lint \
	lint-fix \
	test

all: dev

dev:
	${CLI} $@

build:
	${CLI} $@

clean:
	${CLI} $@

lint:
	${CLI} $@

lint-fix:
	${CLI} $@

test:
	${CLI} $@
