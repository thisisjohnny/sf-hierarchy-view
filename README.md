# Salesforce Hierarchy View
One of the most useful capabilities within Salesforce is the hierarchy view available for Account and Contact standard objects. It allows you to view the reporting structure of groups or individuals your organization interacts with on a regular basis, as well as key highlights of information. It is so functional, in fact, that it can be useful having it as the default behavior when you click on the Account or Contact tabs. While that is not possible out of the box, this [LWC](https://developer.salesforce.com/docs/component-library/documentation/lwc) will automatically redirect your browser to the hierarchy page of your choice.

## What To Do
![Screenshot of Lightning App Builder in Salesforce](/images/lightning-page-builder.png)

1. Install this package in your org using the included Deploy to Salesforce button below
2. Create a new Lightning App Page using the Lightning App Builder (Setup > User Interface > Lightning App Builder). I recommend using the One Region page template
3. Drag and drop the _Hierarchy View Redirect_ component to your newly created page from the Custom Lightning Components library on the left-hand side of the builder
4. Copy and paste the full URL of the hierarchy page you would like to use into the _Hierarchy URL_ parameter input on the right-hand side of the builder
5. Save and activate your Lightning App Page
6. Create a new custom Tab (Setup > User Interface > Tabs) under the _Lightning Page Tabs_ section towards the bottom of the page
7. Add your new custom tab to the App of your choosing

## Important Note
The URL of your hierarchy is an extremely long string, and is unique for the starting node (account or contact) of the hierarchy. Good data makes this component great. Ensuring all accounts roll up to a main record will provide a better overall user experience.

## Deploy to Your Org
**This package is provided without warranty.**
This software has not been fully tested nor developed with strict security and access controls in mind. By installing this package in your org, you assume all risk of consequences and agree not to hold myself or my employer liable.

To deploy this package to your Salesforce environment, click the button below and log into your org:

<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/src/main/webapp/resources/img/deploy.png">
</a>

----
_Made with_ ❤️&☕️ _in Reston_
