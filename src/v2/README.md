---
sidebar: auto
---

# V2 API proposal

the api should return a collection of groups and parameters that is composed by:

```bash
└── gategory n
   ├── parameter 1
   │   ├── value
   │   ├── description
   │   └── suggested readings
   ├── parameter 2
   │   ├── value
   │   ├── description
   │   └── suggested readings
   ...
   └── parameter n
       ├── value
       ├── description
       └── suggested readings
```

All API calls will receive the following parameters:

1. Total Expected cpnnections (number): 100, 200, 100 - minimum of 1
1. Postgres Version (float): 9.6, 10.0, 12.4 - minium of 9.0 ()
1. Profile name (string): TBD
1. Total RAM available (bytes): 1gb, 2gb 
1. CPU count (number): 1,5,10,200 - minimum of 1
1. Storage Type (string|enum): SSD, HDD, SAN, etc
1. CPU archtecture (string|enum): x64_64, i686
1. Operating System type (string|enum): windows, linux, unix


## about the profiles

Profiles are definitions of rules based on a possible workload. it will contain the rules to be computed for each parameter.

So far, there is no definition about how they will be implemented.

## /tune

v1 example:

```bash
/?max_connections=100&pg_version=12&environment_name=WEB&total_ram=4&cpus=2&drive_type=SSD&arch=x86-64&os_type=linux
```

expected output:

```json
{
  "data": [
    {
      "name": "Resource Usage / Memory",
      "Parameters": [
        {
          "guc": "shared_buffers",
          "value": "256KB"
        },
        {
          "guc": "max_connections",
          "value": "5"
        }
      ]
    }
  ]
}
```

Other possible outputs are `ALTER SYSTEM` and `conf`

### `alter system` format

```sql
--- Resource Usage / Memory ----------------
-- https://postgresqlco.nf/en/doc/param/shared_buffers/12/
ALTER SYSTEM SET shared_buffers TO '256KB';

-- https://postgresqlco.nf/en/doc/param/max_connections/12/
ALTER SYSTEM SET max_connections TO '5';
```

### `conf` format

```ini
## Resource Usage / Memory ################
## https://postgresqlco.nf/en/doc/param/shared_buffers/12/
shared_buffers = '256KB'

## https://postgresqlco.nf/en/doc/param/max_connections/12/
max_connections = '5'
```


## /compare

same idea of the `/tune` but it computes and compares all profiles. Expected output:

```json
{
  "data": [
    {
      "name": "Resource Usage / Memory",
      "Parameters": [
        {
          "guc": "shared_buffers",
          "default": "16KB",
          "profile 1": "256KB",
          "profile 2": "2MB",
          "profile 3": "2MB",
          "profile 4": "4MB",
        },
        {
          "guc": "max_connections",
          "value": "5",
          "default": "100",
          "profile 1": "5",
          "profile 2": "105",
          "profile 3": "600",
          "profile 4": "1",
        }
      ]
    }
  ]
}
```
It will be used my the ui to display something like this:

![pgconfig comparison](/images/pgconfig-example.jpeg)