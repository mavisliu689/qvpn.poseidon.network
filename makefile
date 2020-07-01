PKG=apps qvpn.poseidon.network
VERSION := $(shell cat VERSION.txt)

build.local:
	docker build --pull -t poseidon-network/qvpn.poseidon.network .
	docker tag poseidon-network/qvpn.poseidon.network poseidon-network/qvpn.poseidon.network:$(VERSION)

upload:
	docker tag qvpn.poseidon.network:$(VERSION) docker-registry.poseidon.network/qvpn.poseidon.network:$(VERSION)
	docker tag qvpn.poseidon.network:$(VERSION) docker-registry.poseidon.network/qvpn.poseidon.network:latest
	docker push docker-registry.poseidon.network/qvpn.poseidon.network:$(VERSION)
	docker push docker-registry.poseidon.network/qvpn.poseidon.network:latest
