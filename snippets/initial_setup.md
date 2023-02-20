Upon initial installation you will be on Compliance Dashboard.  If the matrix is not populated, click on the table row to run manually, which will direct you to the Setup dashboard (searches run automatically on that dashboard).

1. Click on the table row.

   ![setup1](assets/img/setup1.png)
2. This setup page will run lookup generating searches for the initial usage. These reports are scheduled to run daily at midnight in order to populate/update the lookup tables for enabled correlation rules pertinent to MITRE ATT&CK Framework.

   ![setup2](assets/img/setup2.png)
3. Wait for the initial search to complete for MITRE ATT&CK All Rules and Techniques Lookup.  Depending on your environment you may get an error for MITRE ATT&CK Compliance Lookup.  No worries, wait for 15 seconds for it to refresh; this search depends on the first one.

   ![setup3](assets/img/setup3.png)
4. Once the search is completed, you can go back to "MITRE ATT&CK Compliance with Splunk ES" dashboard to view the level of existing rules (enabled and available) in comparison to MITRE ATT&CK techniques. You can click on a specific technique in order to view the associated correlation rules within ES App.

   ![setup4](assets/img/setup4.png)
5. MITRE ATT&CK Rule Finder view enables users to search for existing correlation rules based on technique names.  You can click on the desired rule for further configuration.

   ![setup5](assets/img/setup5.png)
   ![setup6](assets/img/setup6.png)
