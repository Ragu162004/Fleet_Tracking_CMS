

### 📦 Database Schema (Basic Structure)

#### **Users**
- user_id (PK)
- name
- email
- password
- role (Admin, Driver)

#### **Vehicles**
- vehicle_id (PK)
- registration_number
- type
- capacity
- insurance_expiry_date
- maintenance_due_date
- status (active, maintenance, retired)

#### **Drivers**
- driver_id (PK)
- name
- license_number
- contact
- assigned_vehicle_id (FK)

#### **Trips**
- trip_id (PK)
- vehicle_id (FK)
- driver_id (FK)
- start_location
- end_location
- start_time
- end_time
- status (ongoing, completed, delayed)

#### **Routes**
- route_id (PK)
- trip_id (FK)
- route_details (JSON / text)

#### **Maintenance Records**
- maintenance_id (PK)
- vehicle_id (FK)
- service_date
- service_type
- remarks

#### **Fuel Records**
- fuel_id (PK)
- vehicle_id (FK)
- date
- liters
- cost

#### **Documents**
- document_id (PK)
- related_to (vehicle / driver)
- related_id (FK)
- document_type
- file_path
- upload_date

#### **Alerts**
- alert_id (PK)
- vehicle_id (FK, nullable)
- driver_id (FK, nullable)
- message
- date
- status (read, unread)

#### **Reports**
- report_id (PK)
- type
- generated_date
- data (JSON / text)

---

