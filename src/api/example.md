# Full example

The example below its used by the `UI`:

```bash
$ curl 'https://api.pgconfig.org/v1/tuning/get-config?environment_name=WEB&format=alter_system&include_pgbadger=true&log_format=stderr&max_connections=100&pg_version=9.6&total_ram=2GB'
```

## How the values are calculated?

In an attempt to make the process simpler, i created a API context to list the rules. It can be access by the URL below:

- [/v1/tuning/get-rules](https://api.pgconfig.org/v1/tuning/get-rules) 

::: tip
This context supports the follow parameters: `os_type`, `arch` e `environment_name`. 
:::

The fields who contains details how each parameter are calculated are `formula` and `max_value`, eg:

```json
...
"format": "Bytes",
"formula": "TOTAL_RAM / 4",
"max_value": "2047MB",
"name": "shared_buffers"
...
```

> Note that the values are influenced by the filters mentioned above.

## Calling the `get-rules` context

I recommend that you open the URL below on the browser for easy viewing (or just [format the json](https://jsonformatter.curiousconcept.com/)):

```bash
curl 'https://api.pgconfig.org/v1/tuning/get-rules?os_type=Windows&arch=i686&environment_name=OLTP'
```

