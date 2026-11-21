# Independent Cryptographic Verification

Anyone can verify the integrity and authenticity of releases offline using standard `git`, `ssh-keygen`, and `sha256sum`.

## 1. Verify the Release Tag Signature
```bash
git -c gpg.format=ssh -c gpg.ssh.allowedSignersFile=./allowed_signers verify-tag v1.0.1
```

## 2. Verify `SHA256SUMS` Signature (when `.sig` is attached)
```bash
ssh-keygen -Y verify \
  -f ./allowed_signers \
  -I "35172698+andrawos@users.noreply.github.com" \
  -n file \
  -s SHA256SUMS.sig < SHA256SUMS
```

## 3. Verify File Checksums
```bash
sha256sum -c SHA256SUMS
```

Expected signing key fingerprint:
`SHA256:15av0i+8llxzsY8xkfKd4Mbn6GJD2DJI1s5aHgHe5TQ`
