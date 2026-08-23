# Detection → Enrichment → Triage

This notebook demonstrates a compact detection engineering workflow using synthetic logs.

  import sys
from pathlib import Path

project_root = Path.cwd().resolve().parents[1]
if str(project_root / 'src') not in sys.path:
    sys.path.insert(0, str(project_root / 'src'))

from log_parser import parse_log_file
from detector import DetectionEngine
from enricher import EnrichmentEngine
from triage import TriageReporter

records = parse_log_file(project_root / 'logs' / 'sample_security.log')
records

  detections = DetectionEngine().run(records)
detections
  
  enriched = EnrichmentEngine().enrich(detections)
enriched

  summary = TriageReporter().summarize(enriched)
summary

  reporter = TriageReporter()
reporter.export_json(enriched, project_root / 'triage_report.json')
reporter.export_markdown(enriched, project_root / 'triage_report.md')
(project_root / 'triage_report.md').read_text()
