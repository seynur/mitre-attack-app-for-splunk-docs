---
layout: default
title: User Guide
---

This guide will provide description for the views that comes with this application and steps on how to create additional correlation searches.



    &nbsp;


    ---


    &nbsp;

### MITRE ATT&CK Compliance with Splunk ES View
Each cell containing a technique is colored based on the percentage of enabled correlation searches.

If there isn't any related correlation searches, the cell is left uncolored.

If there are available correlation searches within Enterprise Security (and ESCU), then cells are colored based on percentage of enabled/active ones.

Currently the ranges are set as follows:

* low: 0-30% enabled
* medium: 30-50% enabled
* high: 70%+ enabled

You can mouse over to the cells that contain techniques in order to view the number of available and enabled correlation rules that are specific to that technique.
![setup4]

&nbsp;


---


&nbsp;

### MITRE ATT&CK Matrix View
This dashboard/form has filtering options based on "**Event Time Range**" and "**Urgency**" level of Notable Events.  It provides and overview of triggered techniques within MITRE ATT&CK Matrix colored according to the "**Urgency**" level of Notable Events.

You can click on the triggered technique which provides the drill-down functionality and opens up Enterprise Security App **Incident Review** view for further analysis/investigation.

![triggered_techniques1]

&nbsp;


---


&nbsp;

### MITRE ATT&CK Triggered Tactics & Techniques View
This dashboard/form provides an overview of triggered rules based on MITRE ATT&CK Tactics and Notable assets/identities.  This is an effort to provide a better visibility for a notable asset/identity journey through MITRE ATT&CK Framework.  The number of triggered Notable Events according to MITRE ATT&CK techniques are aggregated by Notable Assets where ``notable_asset`` is populated by ``src``, ``dest`` or ``user`` from related Data Models.

Currently following panels are available:

1. **Triggered Tactics by Notable Assets**: Shows an overview of number of triggered Notable Events according to MITRE ATT&CK tactics by Notable Assets.  This is provided in both Sankey Diagram and Table formats.
2. **Triggered Tactics by Notable User**: Shows an overview of number of triggered Notable Events according to MITRE ATT&CK tactics by Notable User/Identity.  This is provided in both Sankey Diagram and Table formats.
3. **Triggered Techniques by Tactic**: There's a separate panel for each MITRE ATT&CK Framework Tactic that shows details on triggered Technique, associated correlation rule name, and count of occurrences.

![triggered_techniques2]

&nbsp;


---


&nbsp;

### How To Match a Correlation Search with Framework
There are 2 ways to accomplish this task.

1. [Match with Analytic Story](#match-with-analytic-story): Enable a new or existing *Analytic Story* to be tagged with the relevant *Correlation Search*
2. [Match with Lookup](#match-with-lookup): Edit the ``mitre_user_rule_technique_lookup.csv`` file.

#### Match with Analytic Story
The view in the application utilized *Analytic Stories* that are tagged with the *Correlation Searches*.  Hence, in order to associate a *Correlation Search* with MITRE ATT&CK Techniques, you will need to create a new *Analytic Story* and add your *Correlation Search* with the appropriate tags.

**Note:** Please go to Splunk Documentation on [How to create a Correlation Search](https://docs.splunk.com/Documentation/ES/latest/Admin/Createcorrelationsearches)

For example, if we want the *Correlation Search* "**Brute Force Access Behavior Detected**" to be associated with "**Brute Force**" Technique under "**Credential Access**" tactic, we need to perform the following steps:

1. Go to "**Configure --> Content --> Content Management**" from Enterprise Security Application menu.  Click on "**Create New Content**" and select "**Analytic Story**"

   ![analyticstory1]
2. Enter a **Name** and fill other details as necessary for this analytic story.  Click on "**Add Search**" and select "**Brute Force Access Behavior Detected**"

   ![analyticstory2]
   ![analyticstory3]
3. Enter ``detection`` for **Type** field and under **Annotations** enter ``mitre_attack`` for **Name** and ``Brute Force`` for **Mappings** (this should match the technique)

   ![analyticstory4]
4. Click **Save** to save the *Analytic Story* with annotation and mapping with the defined correlation search.  You can add many correlation searches under one analytic story with defined mappings.

Once saved, the correlation search will populate both the Compliance and Triggered Techniques dashboards.



#### Match with Lookup
Each correlation rule is associated with 1 or more technique IDs.  For a given correlation rule you if you simply want to add the technique ID, then you'll need to edit ``mitre_user_rule_technique_lookup.csv``.  The scheduled searches combine this lookup along with analytic stories and checks against exisitng saved/correlation searches in order to create ``mitre_all_rule_technique_lookup.csv``, which is used within the app.

You can edit the csv directly or utilize Lookup Editor app from web interface.

![lookup_editor1]

The lookup file expects 3 fields:

* ``rule_name`` : The rule name as it appears in ``savedsearches.conf`` (e.g. "Access - Excessive Failed Logins - Rule")
* ``rule_disabled`` : ``0`` or ``1`` to indicate status (``0`` meaning enabled rule)
* ``technique_id`` : MITRE ATT&CK Technique ID (e.g. T1078 for Valid Accounts)

**NOTE**: We are hoping to improve upon this manual process in the future releases.

---

[setup4]: assets/img/setup4.png
[triggered_techniques1]: assets/img/triggered_techniques1.png
[triggered_techniques2]: assets/img/triggered_techniques2.png
[analyticstory1]: assets/img/analyticstory1.png
[analyticstory2]: assets/img/analyticstory2.png
[analyticstory3]: assets/img/analyticstory3.png
[analyticstory4]: assets/img/analyticstory4.png
[lookup_editor1]: assets/img/lookup_editor1.png
