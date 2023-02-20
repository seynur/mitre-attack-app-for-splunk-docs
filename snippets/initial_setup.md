Upon installation of the application you will be redirected to the Setup page.

1. This setup page provides configuration options for Lookup Generating searches as well as usage with Enterprise Security. After the configurations are set, you can simply hit the Save button and continue. If you do not have Enterprise Security, you can use Alert Manager application for triggered results and drill down functionality. You can always go back to this Setup page and overwrite the settings. Note that Setup also provides information on scheduled Lookup Generating searches and their schedules. These can also be edited from Settings.

    ![setup0]
2. After the initial setup you will be on Compliance Dashboard.  If the matrix is not populated, click on the table row to run manually, which will direct you to the Lookup File Generation dashboard (searches run automatically on that dashboard).  Click on the table row.

     ![setup1]
 3. This dashboard will run lookup generating searches for the initial usage. These reports are scheduled to run daily at midnight in order to populate/update the lookup tables for enabled correlation rules pertinent to MITRE ATT&CK Framework.

    ![setup2]
4. Wait for the initial search to complete for MITRE ATT&CK All Rules and Techniques Lookup.  Depending on your environment you may get an error for MITRE ATT&CK Compliance Lookup.  No worries, wait for 15 seconds for it to refresh; this search depends on the first one.

   ![setup3]
5. Once the search is completed, you can go back to "MITRE ATT&CK Compliance" dashboard to view the level of existing rules (enabled and available) in comparison to MITRE ATT&CK techniques. You can click on a specific technique/sub-technique in order to view the associated correlation rules within ES App.

  ![setup4]
6. MITRE ATT&CK Rule Finder view enables users to search for existing correlation rules based on technique names.  You can click on the desired rule for further configuration.

   ![setup5]
   ![setup6]

[setup0]: assets/img/setup0.png
[setup1]: assets/img/setup1.png
[setup2]: assets/img/setup2.png
[setup3]: assets/img/setup3.png
[setup4]: assets/img/setup4.png
[setup5]: assets/img/setup5.png
[setup6]: assets/img/setup6.png
