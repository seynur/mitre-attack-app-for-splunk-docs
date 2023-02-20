---
title: Release Notes
layout: documentation
latest_version: 3.2.0
---

### Version 3.2.0
**Release Date**: 04.05.2021

**What's New?**

| Description   
| --------------
| Compatibility with ATT&CK version 9.0
| ``- Updated lookup tables with technique and sub-technique IDs``

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | -

---

### Version 3.1.1
**Release Date**: 14.04.2021

**What's New?**

| Description   
| --------------
|Splunk Enterprise Security 6.4.x provides mitre_attack annotation in correlation searches that map to techniques. These mappings are integrated into both the Compliance and Triggered Techniques dashboards

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | MITRE ATT&CK Matrix search macro issue is fixed for deployments with Enterprise Security

---

### Version 3.1.0
**Release Date**: 29.03.2021

**What's New?**

| Description   
| --------------
| Updated default rule lookup with Enterprise Security 6.4.1 and ES Content Update 3.17.0
| API v2 endpoint integration with HMAC-SHA512 authentication
| Documentation updates and corrections

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | -

---

### Version 3.0.3
**Release Date**: 25.03.2021

**What's New?**

| Description   
| --------------
| Bug fixes

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | ES Content Update mitre_attack annotation provides Technique IDs instead of names with newer versions. This fix is compatible with both name and/or ID representation of annotations to build compliance dashboard.

---

### Version 3.0.2
**Release Date**: 20.03.2021

**What's New?**

| Description   
| --------------
| Bug fixes

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | Drill-down functionality on MITRE ATT&CK Matrix is passing wrong argument

---

### Version 3.0.1
**Release Date**: 08.01.2021

**What's New?**

| Description   
| --------------
| Bug fixes

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------  
| N/A    | N/A	          | mitre_user_rule_technique_lookup.csv overwrites existing lookup during upgrades
| N/A    | N/A	          | Missing mitre_api_rule_technique_lookup causes issues on fresh/new installations    
| N/A    | N/A	          | Missing sub-techniques in ATTACK version 8.1

---

### Version 3.0.0
**Release Date**: 29.11.2020

**What's New?**

| Description   
| --------------
| Compatibility with ATT&CK version 8.1
| ``- Updated lookup tables with technique and sub-technique IDs``
| ``- Updated lookup table generator search``
| ``- Updated matrix views to reflect sub-techniques``

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 2.4.1
**Release Date**: 08.11.2020

**What's New?**

| Description   
| --------------
| Bug fixes

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | mitre_user_rule_technique_lookup.csv overwrites existing lookup during upgrades
| N/A    | N/A	          | Missing mitre_api_rule_technique_lookup causes issues on fresh/new installations


---


### Version 2.4.0
**Release Date**: 30.10.2020

**What's New?**

| Description   
| --------------
| New setup view to be compatible with Splunk Cloud
| ``- Setup.xml replaced by custom javascript.``

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | Alert Manager 3.0.4 compatibility issues

---

### Version 2.3.0
**Release Date**: 22.06.2020

**What's New?**

| Description   
| --------------
| Option to work with plain Splunk Enterprise (no ES requirement)
| ``- Added macros for flexible deployment option (default is ES app)``
| ``- Updated views to use the macros``

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 2.2.0
**Release Date**: 09.05.2020

**What's New?**

| Description   
| --------------
| Added option to display compliance matrix without default rules (user-defined/API rules only)
| ``- Added lookup file definitions``
| ``- Added default rules lookup files for ES 6.1.1 and ESCU 1.0.53 out-of-the-box rules``
| ``- Updated Lookup Generation view``
| Setup.xml for API integration for continuous new rule updates (free service but requires registration)
| ``- Added custom search command (| getattackdetectionrules)``

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | Duplication issue for Rule Finder

---


### Version 2.1.0
**Release Date**: 25.02.2020

**What's New?**

| Description |
| ------------------------       
| Added a new view for mapping rules to Techniques
| Updated lookup tables and some searches accordingly

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 2.0.1
**Release Date**: 12.02.2020

**What's New?**

| Description |
| ------------------------       
| Bug fix for appinspect validation
| Tactics overview displayed as table with updated js and css

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 2.0.0
**Release Date**: 08.02.2020

**What's New?**

| Description |
| ------------------------       
| Updated lookup tables to correctly define MITRE ATT&CK tactics and techniques
| Introduced a new macro to utilize technique and tactic IDs/names
| Updated dashboards to utilize new lookup table and macro
| Performance improvements
| Updated CSS and JS files
| Introduced a setup view for ease of initial lookup generation

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 1.3.0
**Release Date**: 09.01.2020

**What's New?**

| Description |
| ------------------------
| Updated ATT&CK Matrix dashboard
| Added new dashboard for detailed view of triggered rules by notable assets and tactics/techniques
| Improved search performance and dependency on lookups
| Added a new lookup to match correlation rules to MITRE ATT&CK tactics/techniques

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 1.2.0
**Release Date**: 24.08.2019

**What's New?**

| Description |
| ------------------------
| Bug fixes & typos
| Sphinx documentation is added

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 1.1.0
**Release Date**: 06.08.2019

**What's New?**

| Description |
| ------------------------
| Bug fixes & typos
| Added descriptions to dashboards
| Added improvements for initial lookup generator

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---

### Version 1.0.0
**Release Date**: 25.07.2019

**What's New?**

| Description |
| ------------------------
| Initial ### Version for Splunkbase
| Test to run on 7.3.0 and ES App 5.3

**Known Issues**

| Date Filed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A          | -


**Fixed Issues**

| Date Fixed    | Issue Number      | Description |
| ------------- | ----------------  | ----------------------       
| N/A    | N/A	          | -

---
