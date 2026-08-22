# Detection Engineering Lab

A compact repo showing SOC + TI hybrid skills with example detections, parsing, and triage workflow.

## Included

- Sigma rules
- YARA rules
- Log parsing examples
- Detection logic for common TTPs
- A notebook showing detection → enrichment → triage

## Structure

- `rules/` — example detection rules
- `logs/` — synthetic log samples
- `src/` — parsing and detection logic
- `notebooks/` — workflow walkthrough

## Included detections

### 1. Suspicious PowerShell Loader
- Sigma: `rules/sigma_powershell_loader.yml`
- YARA: `rules/yara_powershell_loader.yar`
- Detects encoded PowerShell, IEX, downloadstring, and base64 loader patterns

### 2. Potential Credential Dumping
- Sigma: `rules/sigma_credential_dumping.yml`
- YARA: `rules/yara_credential_access.yar`
- Detects LSASS/SAM access patterns tied to credential theft

### 3. Persistence via Scheduled Task
- Implemented in `src/detector.py`
- Detects `schtasks /create` persistence behavior

## Workflow

1. Parse logs
2. Run detection logic
3. Enrich detections with risk and confidence
4. Generate triage summary

## Why this matters

This project demonstrates operational detection thinking: translating adversary behavior into detectable telemetry and then turning hits into enriched triage output.
