# Another API Options

<table class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Address</th>
            <th>Description</th>
            <th>Output example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="https://api.pgconfig.org/v1/tuning/get-config-all-environments"><code>/v1/tuning/get-config-all-environments</code></a></td>
            <td>show rules for all environments</td>
            <td>```json
            ...
"data": [
    {
    "configuration": [..],
    "environment": "WEB"
    },
    {
    "configuration": [..],
    "environment": "OLTP"
    },
    {
    "configuration": [..],
    "environment": "DW"
    },
    {
    "configuration": [..],
    "environment": "Mixed"
    },
    {
    "configuration": [..],
    "environment": "Desktop"
    }
]
...```</td>
        </tr>
        <tr>
            <td><a href="https://api.pgconfig.org/v1/tuning/list-environments"><code>/v1/tuning/list-environments</code></a></td>
            <td>Show all environments</td>
            <td><pre><code class="language-json"></code>...
"data": [
    "WEB",
    "OLTP",
    "DW",
    "Mixed",
    "Desktop"
],
...</pre></td>
        </tr>
        <tr>
            <td><a href="https://api.pgconfig.org/v1/generators/pgbadger/get-config"><code>/v1/generators/pgbadger/get-config</code></a></td>
            <td>Show the pgbadger configurations (accepts the <code>format</code> parameter)</td>
            <td><pre><code class="language-json"></code>...
"data": [
    {
    "category": "log_config",
    "description": "Logging configuration for pgbadger",
    "parameters": [
        {
        "config_value": "on",
        "name": "logging_collector"
        },
        {
        "config_value": "on",
        "name": "log_checkpoints"
        },
        {
        "config_value": "on",
        "name": "log_connections"
        },
        {
        "config_value": "on",
        "name": "log_disconnections"
        },
        {
        "config_value": "on",
        "name": "log_lock_waits"
        },
        {
        "config_value": "0",
        "name": "log_temp_files"
        },
        {
        "config_value": "C",
        "format": "String",
        "name": "lc_messages"
        },
        {
        "comment": "Adjust the minimum time to collect data",
        "config_value": "10s",
        "format": "Time",
        "name": "log_min_duration_statement"
        },
        {
        "config_value": "0",
        "name": "log_autovacuum_min_duration"
        }
    ]
},
...</pre></td>
        </tr>
    </tbody>
</table>

Another contexts are being developed.