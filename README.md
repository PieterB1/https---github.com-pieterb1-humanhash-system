# HumanHash System
Decentralized Proof of Personhood (PoP) system with biometrics, ZKPs, and blockchain.

## Features
- Multimodal biometrics (Neurotechnology MegaMatcher, FaceTec Zoom) with liveness detection (ISO/IEC 30107).
- ZKPs for privacy.
- PoPChain for identity commitments.
- Oracles for KYC data.
- Cross-chain smart contracts.
- Cloud-agnostic with HashiCorp Vault.
- Chaos testing and sharded architecture.

## Services
- **Biometric**: `/identity/enroll`, `/identity/verify` with ZKPs (port 8000).
- **System**: Core orchestrator (port 3000).
- **Popchain**: `/ledger/write` with Lightning channels (port 3002).
- **Oracle**: KYC and payment oracles (SureBits, Chainlink) (port 3003).
- **Client**: React UI for enrollment (port 3000).
- **Postgres**: Database (port 5432).
- **Vault**: Secrets management (port 8200).

## Setup
1. Install Rust, Node.js, Docker, PostgreSQL.
2. Clone: `git clone https://github.com/pieterb1/humanhash-system.git`.
3. Run: `docker-compose up --build`.
4. Access: `http://localhost:3000`.
      
## Deployment
- Build: `docker build -t myrepo/humanhash-client:1.0 .`.
- Deploy: `helm install humanhash ./helm/humanhash`.

## License
MIT License
# Trigger CI
