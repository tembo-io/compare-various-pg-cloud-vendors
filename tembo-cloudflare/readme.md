### Example project for [DrizzleORM](https://driz.li/orm) + [Cloudflare Worker](https://workers.cloudflare.com) + [Tembo Cloud](https://tembo.io/)

---

The Tembo Cloudflare worker is configured to use the [postgres.js](https://orm.drizzle.team/docs/get-started-postgresql#postgresjs) driver, bound to a Cloudflare worker API.

Note that this sub-project sets the ssl method to `true` by default, as Tembo only allows SSL connections.

## Set up Wrangler

Refer to the [official docs](https://developers.cloudflare.com/workers/) to create an account and obtain an URL for the worker. Ensure the `wrangler.toml` file reflects proper settings for deployment to your named project.

```toml
## wrangler.toml

name = "tembo-cf"
main = "src/index.ts"
compatibility_date = "2022-12-09"
usage_model = "unbound"
compatibility_flags = ["nodejs_compat"]
```

## Sign up for Tembo Hobby Tier

Setup Tembo Cloud database - [Sign up here](https://cloud.tembo.io/sign-up) under the free hobby tier. This is good for testing and small projects like this one. Once the instance is running, select "Show Connection Strings" for connection information. Use this to populate the `.dev.vars` file in this project subfolder, for example:

```env
DATABASE_HOST=my-instance-name.data-1.use1.tembo.io
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=supersecretpassword
```

Take note of these variables, as they will also be used to configure the CloudFlare workers in the deployment environment as well.

## Installation and Deployment

Once we have a Tembo cloud hobby instance, initialize the project so all the necessary Node prerequisites are installed:

```bash
npm i
```

Deploy the demo table to our instance so the API calls work properly:

```
npm run migrate
```

When ready, deploy the worker to cloudflare for operation:

```
npm run deploy
```

It will also be necessary to manually set the secrets for the environment varibles used here. Run these commands and supply the values:

```
npx wrangler secret put DATABASE_HOST
npx wrangler secret put DATABASE_PORT
npx wrangler secret put DATABASE_USERNAME
npx wrangler secret put DATABASE_PASSWORD
```

## Testing

It is possible to run a Cloudflare demo worker locally using the following:

```
npm start
```

This will report a local HTTP URL. Fetch `/users/` from the URL to make sure it's working properly. For example: `http://localhost:8787/users/`

