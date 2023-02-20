---
layout: default
title: User Guide
---

This guide will provide description for the views that comes with this application and steps on how to create additional correlation searches.

&nbsp;


---


&nbsp;


### MITRE ATT&CK Compliance View
Each cell containing a technique/sub-technique is colored based on the percentage of enabled correlation searches.

If there isn't any related correlation searches, the cell is left uncolored.

If there are available correlation searches either within Enterprise Security (and ESCU) or as regular/custom saved searches with matching MITRE ATT&CK techniques/sub-techniques, then cells are colored based on percentage of enabled/active ones.

Currently the ranges are set as follows:

* none: 0–30% (uncolored)
* low: 30–50% enabled 
* medium: 50–70% enabled 
* high: 70%+ enabled

You can mouse over to the cells that contain techniques/sub-techniques in order to view the number of available and enabled correlation rules that are specific to that technique/sub-technique.
![setup4]

&nbsp;


---


&nbsp;

### MITRE ATT&CK Matrix View
This dashboard/form has filtering options based on "**Event Time Range**" and "**Urgency**" level and it provides and overview of triggered techniques within MITRE ATT&CK Matrix colored according to the "**Urgency**" level of Notable Events or Alert Manager populated index.

You can click on the triggered technique which provides the drill-down functionality.  Depending on your setup you will either drill-down via Enterprise Security App **Incident Review** view or Alert Manager **Incident Posture** for further analysis/investigation.

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
In order to view a saved/correlation search integrated with the MITRE ATT&amp;CK Matrix, following tasks need to be completed.

1. alert action (ES or Alert Manager) - triggered view TODO:
2. associate rule with technique TODO:

There are 4 ways to accomplish this task.

1. [Match with Analytic Story](#match-with-analytic-story): Enable a new or existing *Analytic Story* to be tagged with the relevant *Correlation Search*
2. [Match with Custom Correlation Search](#match-with-custom-correlation-search): Enable a new or existing *Custom Correlation Search* with Content Management
3. [Match with Lookup](#match-with-lookup): Edit the ``mitre_user_rule_technique_lookup.csv`` file.
4. [Match with Dynamic Technique](#match-with-dynamic-technique): Add `annotations.mitre_attack.mitre_technique_id` multi-value field with technique IDs.

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

Once you’re done with the **Analytic Story**, you may want to run Lookup File Generation manually in order to generate the overall lookup files or wait until the scheduled searches run. After lookup file generation, the correlation search will populate both the Compliance and Triggered Techniques dashboards.


&nbsp;

&nbsp;

#### Match with Custom Correlation Search
Splunk Enterprise Security 6.4.x provides MITRE ATT&amp;CK annotation in correlation searches that map to techniques/sub-techniques. These mappings are integrated into both the Compliance and Triggered Techniques dashboards.

&nbsp;

**Note:** Please go to Splunk Documentation on [How to create a Correlation Search](https://docs.splunk.com/Documentation/ES/latest/Admin/Createcorrelationsearches)

&nbsp;

For example, if we want the a *Correlation Search* to be associated with one or more techniques, we need to perform the following steps:

&nbsp;

1. Go to "**Configure --> Content --> Content Management**" from Enterprise Security Application menu.  Click on "**Create New Content**" and select "**Correlation Search**"

   ![contentmanagement1]
   ![contentmanagement2]
2. Enter a **Name** and fill other details as necessary for this correlation search.  Add your custom search.

   ![contentmanagement3]
3. Enter MITRE ATT&CK techniques/sub-techniques in the **Annotations** section.

   ![contentmanagement4]

&nbsp;

Once you’re done with the **Correlation Search**, you may want to run Lookup File Generation manually in order to generate the overall lookup files or wait until the scheduled searches run. After lookup file generation, the correlation search will populate both the Compliance and Triggered Techniques dashboards.

&nbsp;

&nbsp;


#### Match with Lookup
Each correlation rule is associated with 1 or more technique IDs.  For a given correlation rule you if you simply want to add the technique ID(s), then you have 2 choices:

1. Utilize **Map Rule to Technique** views

      _OR_

2. Edit ``mitre_user_rule_technique_lookup.csv`` directly.  

__NOTE:__ The scheduled searches combine this lookup along with analytic stories and checks against existing saved/correlation searches in order to create ``mitre_all_rule_technique_lookup.csv``, which is used within the app.


----
__(1)__ Utilize **Map Rule to Technique** views

  * Go to "**Configuration --> Map Rule to Technique**" from MITRE ATT&CK Framework App menu.  Initially it should appear something similar to following image.

  ![map_rule_to_technique1]

*__Panel Descriptions__*:

  __Existing User Defined Mappings__: This panel displays the contents of user defined mappings and refreshed every 30 seconds to display updates.

  __Newly Added User Defined Mapping__: This panel displays the newly selected rule-to-technique mapping which is added to the lookup table.

&nbsp;

  *  Next, select the rule name form __Rule Name__ dropdown menu item and associate with technique IDs from __MITRE ATT&CK Technique__ multi-select then hit __Submit__.  Both panels will be updated accordingly. Once you're done with mappings and updates, you may want to run __Lookup File Generation__ manually in order to generate the overall lookup files or wait until the scheduled searches run.

  ![map_rule_to_technique2]

__Important NOTE__: If a rule name is already defined, this view does NOT add any mappings to the lookup in order to avoid duplicates.  You will see ``No results found`` message and will need to edit the lookup table manually.

&nbsp;

__(2)__ Edit ``mitre_user_rule_technique_lookup.csv`` directly.  
You can edit the csv directly or utilize Lookup Editor app from web interface.


![lookup_editor1]

The lookup file expects 2 fields:

* ``rule_name`` : The rule name as it appears in ``savedsearches.conf`` (e.g. "Access - Excessive Failed Logins - Rule")
* ``technique_id`` : MITRE ATT&CK Technique ID (e.g. T1078 for Valid Accounts) list separated by spaces

&nbsp;

&nbsp;

#### Match with Dynamic Technique
It's possible to dynamically match your triggered events (notable or alert) by simply adding `annotations.mitre_attack.mitre_technique_id` multi-value field to search results.

   ```spl
   | tstats ...
   | eval annotations.mitre_attack.mitre_technique_id="T1189"
   ```
For users utilizing Alert Manager, you will need to update `all_alerts` macro definition that comes with the app in order to include `annotations.mitre_attack.mitre_technique_id` field in the results by adding it to `| fields ...` definition.

For example, you can update Alert Manager `macros.conf` as following to support dynamic technique lookups:

![alertmanager_macro]

&nbsp;


---


&nbsp;

### How to integrate with Alert Manager
__NOTE__:This section is applicable for users who do not have Enterprise Security Application installed and would like to integrate with Alert Manager app.

&nbsp;


The Alert Manager application provides simple incident workflows in order to investigate fired alerts or notable events. For any correlation/saved search that is applicable as a MITRE ATT&amp;CK technique you need to select/add Alert Manager as a Splunk alert action.

![alert_manager_action]
&nbsp;

__IMPORTANT NOTE__: In order to have drill-down working with Alert Manager seamlessly the ```Title``` must match the search name, therefore leaving it as (shown in the example screenshot) ```$name$``` instead of typing the search title/name is recommended.

----


[setup4]: assets/img/setup4.png
[triggered_techniques1]: assets/img/triggered_techniques1.png
[triggered_techniques2]: assets/img/triggered_techniques2.png
[analyticstory1]: assets/img/analyticstory1.png
[analyticstory2]: assets/img/analyticstory2.png
[analyticstory3]: assets/img/analyticstory3.png
[analyticstory4]: assets/img/analyticstory4.png
[lookup_editor1]: assets/img/lookup_editor1.png
[map_rule_to_technique1]: assets/img/map_rule_to_technique1.png
[map_rule_to_technique2]: assets/img/map_rule_to_technique2.png
[map_rule_to_technique3]: assets/img/map_rule_to_technique3.png
[alert_manager_action]: assets/img/alert_manager_action.png
[contentmanagement1]: assets/img/contentmanagement1.png
[contentmanagement2]: assets/img/contentmanagement2.png
[contentmanagement3]: assets/img/contentmanagement3.png
[contentmanagement4]: assets/img/contentmanagement4.png
[contentmanagement5]: assets/img/contentmanagement5.png
[alertmanager_macro]: assets/img/alertmanager_macro.png
