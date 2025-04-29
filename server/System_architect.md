# Fleet Tracking and Management (CMS)

## Authentication Controller (Model: User)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/auth/check-auth` | Check user session |
| POST   | `/api/auth/login` | Login user |
| POST   | `/api/auth/register` | Register user |
| POST   | `/api/auth/logout` | Logout / Clear Cookies |

## User Controller (Model: User)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/users` | Get all users |
| GET    | `/api/users/:id` | Get user details by ID |
| POST   | `/api/users` | Create new user |
| PUT    | `/api/users/:id` | Update user |
| DELETE | `/api/users/:id` | Delete user |

## Vehicle Controller (Model: Vehicle)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/vehicle/vehicles` | Get all vehicles |
| GET    | `/api/vehicle/vehicles/:id` | Get vehicle by ID |
| POST   | `/api/vehicle/vehicles` | Add a vehicle |
| PUT    | `/api/vehicle/vehicles/:id` | Update vehicle |
| DELETE | `/api/vehicle/vehicles/:id` | Delete vehicle |

## Maps Controller (Model: Maps or Logs)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/locations` | Get all live vehicle locations |
| GET    | `/api/locations/:vehicleId` | Get a specific vehicle's live location |

## Trip Controller (Model: Trip)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/trips` | Get all trips |
| GET    | `/api/trips/:id` | Get trip details |
| POST   | `/api/trips/start` | Start new trip |
| POST   | `/api/trips/end/:tripId` | End trip |
| DELETE | `/api/trips/:id` | Delete trip |

## Record Controller (Model: Record)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/alerts` | Get all alerts |
| GET    | `/api/alerts/:id` | Get alert details |
| POST   | `/api/alerts` | Create custom alert |
| DELETE | `/api/alerts/:id` | Delete alert |

## Report Controller (Model: Report)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/reports/trips` | Get trip reports |
| GET    | `/api/reports/maintenance` | Get maintenance reports |
| GET    | `/api/reports/fuel` | Get fuel usage reports |

## Settings Controller (No direct model, optional Config model)

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| GET    | `/api/settings` | Get application settings |
| PUT    | `/api/settings` | Update application settings |

## Real-time Communication (WebSocket / MQTT)

| Channel | Description |
|:--------|:------------|
| `/ws/locations` | Subscribe to live vehicle locations |
| `/ws/alerts` | Subscribe to live alert events |

# Summary Table (Model ↔ Controller ↔ Route)

| Model        | Controller        | Related APIs |
|--------------|--------------------|--------------|
| User         | Authentication, User Controller | `/api/auth/*`, `/api/users/*` |
| Vehicle      | Vehicle Controller  | `/api/vehicle/vehicles/*` |
| Maps or Logs | Maps Controller     | `/api/locations/*` |
| Trip         | Trip Controller     | `/api/trips/*` |
| Record       | Record Controller   | `/api/alerts/*` |
| Report       | Report Controller   | `/api/reports/*` |
| (Settings)   | Settings Controller | `/api/settings` |
