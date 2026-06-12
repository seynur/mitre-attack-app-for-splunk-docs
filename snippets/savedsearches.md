This application comes with predefined saved searches.  Lookup Gen searches are scheduled to run  daily after midnight.

* **MITRE ATT&CK All Rules and Techniques Lookup Gen**: This lookup generator checks currently enabled correlation rules via analytic stories and combines the searches with user-defined ``mitre_user_rule_technique_lookup.csv`` file that matches MITRE ATT&CK technique/sub-technique IDs with rules.
* **MITRE ATT&CK Compliance Lookup Gen**: This lookup generator relies on ``mitre_all_rule_technique_lookup.csv`` in order to generate a new lookup to properly display MITRE ATT&CK Compliance matrix.
* **MITRE ATT&CK User Rules Compliance Lookup Gen**: This lookup generator relies on ``mitre_all_rule_technique_lookup.csv`` and calculates compliance metrics only for user-defined correlation rules by aggregating enabled/disabled rule coverage per MITRE ATT&CK technique.
* **MITRE ATLAS All Rules and Techniques Lookup Gen**: This lookup generator checks correlation rules via analytic stories and saved searches and maps MITRE ATLAS technique/sub-technique annotations using atlas_tt_lookup and user-defined ``atlas_user_rule_technique_lookup.csv`` file to build full ATLAS rule coverage.
* **MITRE ATLAS User Rules Compliance Lookup Gen**: This lookup generator relies on ``atlas_all_rule_technique_lookup.csv`` and calculates compliance metrics only for user-defined correlation rules by aggregating enabled/disabled rule coverage per MITRE ATLAS technique.

