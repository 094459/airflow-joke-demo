from airflow import DAG
from airflow.operators.bash_operator import BashOperator
from airflow.utils.dates import days_ago
with DAG(dag_id="info-mwaa-env", schedule_interval=None, catchup=False, start_date=days_ago(1)) as dag:
    env_output_json = BashOperator(
        task_id="output_json",
        bash_command='echo "Here is the message: \'{{ dag_run.conf["test"] if dag_run else "" }}\'"',
    )
    env_cli_command = BashOperator(
        task_id="env_cli_command",
        bash_command="env"
    )
    cfg_cli_command = BashOperator(
        task_id="cfg_cli_command",
        bash_command="cat /usr/local/airflow/airflow.cfg"
    )