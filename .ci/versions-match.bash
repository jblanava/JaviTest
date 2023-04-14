# Prints `true` if the package.json version matches the last tagged version, and `false` otherwise.

DEFAULT_VERSION=0.0.0
LAST_TAG=$(git tag | sort -V | tail -1)
PACKAGE_VERSION=$(sed 's/.*"version": "\(.*\)".*/\1/;t;d' ./package.json)
# Check if some of them are unset or set to the empty string
if [ -z $LAST_TAG ]; then LAST_TAG=$DEFAULT_VERSION; fi
if [ -z $PACKAGE_VERSION ]; then PACKAGE_VERSION=$DEFAULT_VERSION; fi

[[ $LAST_TAG == $PACKAGE_VERSION ]] && echo true || echo false
