CLI=./cli.sh

.PHONY: \
	all \
	dev \
	build \
	clean \
	lint \
	lint-fix \
	lint-watch \
	coverage \
	test \
	help

all: dev

dev:
	@${CLI} $@

flow:
	@${CLI} $@

build:
	@${CLI} $@

clean:
	@${CLI} $@

lint:
	@${CLI} $@

lint-fix:
	@${CLI} $@

lint-watch:
	@${CLI} $@

test:
	@${CLI} $@

coverage:
	@${CLI} $@

help:
	@${CLI} $@
