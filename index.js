const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use(cors());
const res1 = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-08T13:29:17.497Z",
  "transactionId": "08dc11a0-4e68-4fc7-ab0a-43d502a92f60",
  data: []
}
const response = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-08T13:29:17.497Z",
  "transactionId": "08dc11a0-4e68-4fc7-ab0a-43d502a92f60",
  "data": [
    {
      "month": "May",
      "monthIndex": "05",
      "statusData": [
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 164
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 40
        },
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 45
        },
        {
          "statusCode": 1003,
          "statusMessage": "Exception",
          "count": 2
        }
      ]
    },
    {
      "month": "June",
      "monthIndex": "06",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 477
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 119
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 16
        }
      ]
    },
    {
      "month": "July",
      "monthIndex": "07",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 19
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 7
        },
        {
          "statusCode": 1003,
          "statusMessage": "Exception",
          "count": 4
        }
      ]
    }
  ]
}

const gridEmptyResponse ={
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-09T08:50:36.843598Z",
  "transactionId": "vars.executionId",
  "totalCount": 113,
  "data": [
    {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
     {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
    {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    }
  ]
}

const gridResponse =
{
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-09T08:50:36.843598Z",
  "transactionId": "vars.executionId",
  "totalCount": 100,
  "data": [
    {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
     {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
    {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
     {
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Shiavm",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": "2024-04-02T03:15:06.741Z",
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": "2024-04-02T03:15:06.741Z",
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Harsh",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },{
      "serial_no": 6,
      "total_records": 12,
      "description": "This interface will sync the pre termination data from WORKDAY to WDH",
      "system_name": "MuleSoft",
      "source_name": "WORKDAY",
      "target_name": "WDH",
      "project_name": "Greate",
      "flow_name": "WORKDAY-TO-WDH-PRE-TERMINATION-SYNC-MAIN",
      "document_external_link": "",
      "intf_log_id": 53269,
      "execution_id": "ee5a28cb-6889-4262-95fe-ed8bf2e3e571",
      "transaction_id": null,
      "status_code": 1001,
      "status_message": "Started",
      "intf_log_completed_date": null,
      "intf_log_updated_date": "2024-07-02T03:15:06.741Z"
    },
  ]
}

const oneDay = {
  "statusCode": 204,
  "statusMessage": "Success",
  "statusDescription": "Dashboard is empty",
  "dateTime": "2024-07-10T08:41:04.979Z",
  "transactionId": "c60ff0d4-33d0-403d-b1a0-a25218f169b8",
  "data": []
}

const oneMonth = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-10T08:43:47.829Z",
  "transactionId": "1f5b2897-45a0-4116-bbd0-7d874ef2c34f",
  "data": [
    {
      "month": "June",
      "monthIndex": "06",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 332
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 14
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 74
        }
      ]
    },
    {
      "month": "July",
      "monthIndex": "07",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 19
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 7
        }
      ]
    }
  ]
}

const threeMonths = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-10T08:44:14.227Z",
  "transactionId": "5a583ead-4165-4777-a107-4c90a87d6d83",
  "data": [
    {
      "month": "May",
      "monthIndex": "05",
      "statusData": [
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 164
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 40
        },
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 45
        },
        {
          "statusCode": 1003,
          "statusMessage": "Exception",
          "count": 2
        }
      ]
    },
    {
      "month": "June",
      "monthIndex": "06",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 477
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 119
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 16
        }
      ]
    },
    {
      "month": "July",
      "monthIndex": "07",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 19
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 7
        }
      ]
    }
  ]
}

const oneWeek = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-10T08:43:13.367Z",
  "transactionId": "fbabdb44-fee3-483b-85d2-b8ee01f322a0",
  "data": [
    {
      "month": "July",
      "monthIndex": "07",
      "statusData": [
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 5
        }
      ]
    }
  ]
}

const sixMonths = {
  "statusCode": 200,
  "statusMessage": "Success",
  "statusDescription": "Application Logs are fetched from IMF",
  "dateTime": "2024-07-10T08:44:51.847Z",
  "transactionId": "2a25339f-9955-4d21-bee7-2d26fa084eb1",
  "data": [
    {
      "month": "May",
      "monthIndex": "05",
      "statusData": [
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 164
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 40
        },
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 45
        },
        {
          "statusCode": 1003,
          "statusMessage": "Exception",
          "count": 2
        }
      ]
    },
    {
      "month": "June",
      "monthIndex": "06",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 477
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 119
        },
        {
          "statusCode": 1005,
          "statusMessage": "Error",
          "count": 16
        }
      ]
    },
    {
      "month": "July",
      "monthIndex": "07",
      "statusData": [
        {
          "statusCode": 1001,
          "statusMessage": "Started",
          "count": 19
        },
        {
          "statusCode": 1004,
          "statusMessage": "Completed",
          "count": 7
        }
      ]
    }
  ]
}


app.get('/getDashboardCharts', async (req, res) => {
  const duration = parseInt(req.query.duration);

  if (isNaN(duration)) {
    return res.status(400).send('Duration query parameter is required and must be a number');
  }
  
  else if (duration == 1) {
    res.json(oneDay)
  }else if (duration == 7) {
    res.json(oneWeek)
  }else if (duration == 30) {
    res.json(oneMonth)
  }
  else if (duration == 90) {
    res.json(threeMonths)
  }
  else {
    res.json(sixMonths)
  }

});
app.get('/getDashboardGridData', async (req, res) => {
  const duration = parseInt(req.query.duration);
  const startIndex = (req.query.startIndex);
  const pageSize = (req.query.pageSize);
  console.log(duration)
  console.log(pageSize)
  console.log(startIndex)
  // if(duration==1){
  //   return res.json(res1)
  // }
  return res.status(200).json(gridResponse)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

