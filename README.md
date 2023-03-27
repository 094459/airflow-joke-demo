# airflow-joke-demo

A demo to show how you can use Airflow to orchestrate everything needed to create the ultimate joke repository. This demo creates a DAG that will

* access a joke API and retrieve a list of 10 jokes, convert it to csv, and then upload this to an S3 bucket
* use Amazon Athena to ingest this into a master joke lake
* use MySQL to ingest this into a usable table for a sample app

There are two NodeJS sample apps that you can use to access the data - you just need to update the credentials.


