import secrets

def private_key(p):
    valid_private_key = secrets.randbelow(p)

    while (valid_private_key < 2 or valid_private_key > p):
        valid_private_key = secrets.randbelow(p)

    return valid_private_key

def public_key(p, g, private):
    return pow(g, private) % p


def secret(p, public, private):
    return pow(public, private) % p
