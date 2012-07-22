#!/bin/bash

if [ ! -d _venv ]; then
    virtualenv _venv
fi

if [ ! -e _venv/bin/hyde ]; then
    source _venv/bin/activate && pip install hyde
fi

source _venv/bin/activate && \
    _venv/bin/hyde gen
