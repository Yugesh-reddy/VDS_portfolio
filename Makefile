update:
	scp -r -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedAlgorithms=+ssh-rsa -oProxyJump=bertvm.cs.uic.edu _site/* facwebs.cs.uic.edu:WWW

