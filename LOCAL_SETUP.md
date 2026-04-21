# Local Setup

This workspace now contains:

- The Next.js frontend in the project root
- The Express backend in `aban-restaurant-back/`
- Copied backend media in `aban-restaurant-back/uploads/` and `aban-restaurant-back/public/`
- A MongoDB dump file expected at `aban-restaurant-back/aban-restaurant.dump.gz`

## What was found on the VPS

- Nginx proxies `test.omojet.com` to `127.0.0.1:3001`
- The live backend runs from `/home/aban-restaurant-back`
- MongoDB database name is `AbanRestaurant`
- Main collections and counts at the time of export:
  - `blogs`: 21
  - `events`: 1
  - `uploadeds`: 42
  - `admins`: 1

## Run locally

1. Start MongoDB locally.

   If you use Docker:

   ```bash
   docker compose -f docker-compose.local.yml up -d
   ```

2. Restore the copied database dump.

   ```bash
   mongorestore --gzip --archive=./aban-restaurant-back/aban-restaurant.dump.gz --drop
   ```

3. Install backend dependencies and start the API.

   ```bash
   cd aban-restaurant-back
   npm install
   npm start
   ```

4. In a second terminal, install frontend dependencies and start Next.js.

   ```bash
   npm install
   npm run dev
   ```

5. Open `http://localhost:3000`.

## Notes

- The frontend now defaults to `http://localhost:3001` in development.
- The backend now defaults to `mongodb://127.0.0.1:27017/` in this local copy.
- `OPENAI_API_KEY` is optional unless you need the `/chat` endpoint.
- Reservation and catering routes send email using the copied backend config.
