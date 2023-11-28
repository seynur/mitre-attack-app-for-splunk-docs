## Initial Setup
Upon installation of the application you will be redirected to the Setup page.

1. This setup page provides configuration options for Lookup Generating searches as well as usage with Enterprise Security. After the configurations are set, you can simply hit the Save button and continue.  You can always go back to this Setup page and overwrite the settings.  Note that Setup also provides information on scheduled Lookup Generating searches and their schedules.  These can also be edited from Settings.
    &nbsp;

   ![setup0]

   &nbsp;



2\. After the initial setup you will be on Compliance Dashboard.  If the matrix is not populated, click on the table row to run manually, which will direct you to the Lookup File Generation dashboard (searches run automatically on that dashboard).  Click on the table row.

   ![setup1]

   &nbsp;

3\. This dashboard will run lookup generating searches for the initial usage. These reports are scheduled to run daily at midnight in order to populate/update the lookup tables for enabled correlation rules pertinent to MITRE ATT&CK Framework.

**Note:** Splunk is equipped with security safeguards in its SPL to alert users when attempting to execute a search in Splunk Web that includes commands deemed potentially risky. If a [search command](https://docs.splunk.com/Documentation/Splunk/9.1.1/Security/SPLsafeguards#Commands_that_trigger_SPL_safeguards) falls into this category and triggers the safeguard, a warning dialog box will pop up (Splunk version 9.0 and above), offering additional information for review. Users are given the choice to acknowledge the potential risks and proceed with running the query.

   ![setup2]
   
   ![setup3]

   &nbsp;

4\. Wait for the initial search to complete for MITRE ATT&CK All Rules and Techniques Lookup.  Depending on your environment you may get an error for MITRE ATT&CK Compliance Lookup.  No worries, wait for 15 seconds for it to refresh; this search depends on the first one.

   ![setup4]

   &nbsp;

5\. Once the search is completed, you can go back to "MITRE ATT&CK Compliance" dashboard to view the level of existing rules (enabled and available) in comparison to MITRE ATT&CK techniques. You can click on a specific technique/sub-technique in order to view the associated correlation rules within ES App.

   ![setup5]

   &nbsp;

6\. MITRE ATT&CK Rule Finder view enables users to search for existing correlation rules based on technique names.  You can click on the desired rule for further configuration.

   ![setup6]

   ![setup7]

   &nbsp;




[logo]: assets/img/seynur_logo_dark.png
[setup0]: assets/img/setup0.png
[setup1]: assets/img/setup1.png
[setup2]: assets/img/setup2.png
[setup3]: assets/img/setup3.png
[setup4]: assets/img/setup4.png
[setup5]: assets/img/setup5.png
[setup6]: assets/img/setup6.png
[setup7]: assets/img/setup7.png
