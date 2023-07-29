#!/usr/bin/env python3

import sys

import string

import secrets

import json

length = 16

def generate_password(length, include_special_chars):
    if include_special_chars == 'true':
        chars = string.ascii_letters + string.digits + string.punctuation
    else:
        chars = string.ascii_letters + string.digits

    return ''.join(secrets.choice(chars) for _ in range(length))

include_special_chars = sys.argv[1] if len(sys.argv) > 1 else 'false'
password = generate_password(length, include_special_chars)

print(json.dumps({"password": password}))