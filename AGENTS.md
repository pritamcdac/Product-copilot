# AGENTS.md

## Terraform Rules
- All Terraform files must be inside /terraform

## Required Tags
- Project = "3tier-devsecops"
- Environment = "dev"
- Owner = "pritam"
- ManagedBy = "terraform"

## Security

### P1 - CRITICAL
- Hardcoded secrets NOT allowed
- If found → FAIL

### P2 - HIGH
- Missing encryption
- Missing tags

## Instructions for Agent
- Scan terraform files
- Detect issues
- Classify as P1/P2
- Suggest fixes