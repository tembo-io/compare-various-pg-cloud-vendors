# Serverless DB latencies comparison

Comparison made between three serverless DB offerings:

- [PlanetScale](https://planetscale.com/)
- [Neon](https://neon.tech/)
- [Turso](https://turso.tech/)
- [Tembo](https://tembo.io/)

Neon, Turso, and Tembo are using the hobby plan. PlanetScale is the Scaler Pro plan as I was unable to get the hobby plan in time of testing. Will update this chart when I get access to it.

TODO measure again with Neon HTTP driver and upload a proper chart.

## Stack and infrastructure

All DBs were tested in Frankfurt region.

Stack:

- [Drizzle ORM](https://orm.drizzle.team/)
- [CloudFlare Workers](https://workers.cloudflare.com/)

Neon is using the connection pooler as advised by their docs for serverless environments.

## Conclusions

* PlanetScale seems to have their networking stack setup the best. Their max latency for the simple select query stayed below 67 ms throughout whole test.
* Neon is predictable once the instance wakes up, but much slower.
* Turso is as fast as PS at times, but has random spikes to 400 ms.
* Tembo tests pending.
