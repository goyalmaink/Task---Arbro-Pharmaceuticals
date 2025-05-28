# Task---Arbro-Pharmaceuticals
**#YLIMS - Sample Management Dashboard:**

A responsive React.js application for managing laboratory samples in a pharmaceutical enviroment. Build as task of the Arbo Pharmaceuticals.

**Project Overview :**

This application or project simulates a Sample Management Dashboard for a Laboratory Information Management System(YLIMS) where doctors or lab technicians can:
 ->View and Manage patient sample records 
 ->Add new patient sample with proper descriptions
 ->Update the sample status easily 
 ->Edit existing sample information
 ->Search ,filter and sort by various criteria 

 **#Demo**
  **->YouTube Link** - https://youtu.be/G7TD6Nd43vE



**Core Technologies Used:**

 ->**React** - Frontend framework
 
 ->**JavaScript** - Programming language
 
 ->**Tailwindcss** - Styling and Responsive design ( I used  proper documentation of the tailwind for this project)
 
 ->**Mockaroo** - Mockaroo is a website which I used to generate the data 
 
 

## 📦 Setup Instructions
### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ylims-dashboard.git
   cd ylims-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```
npm run dev

```

## 🏗️ Project Structure
```
ylims-dashboard/
├── public/
├── src/
│   ├── component/
│   │   ├── Control.jsx
│   │   ├── Header.jsx
│   │   ├── SampleModel.jsx
│   │   ├── StatsCard.jsx
│   │   ├── StatusBadge.jsx
│   │   └── table.jsx
│   ├── Hooks/
│   ├── pages/
│   │   ├── Animation.jsx
│   │   └── dashboard.jsx
│   ├── utils/
│   ├── data.json
│   └── MOCK_DATA.csv
├── README.md
├── package.json
├── vite.config.js
└── eslint.config.js
```
## ✨ Features Implemented

### Core Features
- ✅ **Sample Table Display** - Shows all sample records with required columns
- ✅ **Search Functionality** - Search samples by name (real-time)
- ✅ **Status Filtering** - Filter samples by status (All, Pending, Processing, Completed)
- ✅ **Sorting** - Sort by sample name or collection date
- ✅ **Pagination** - Client-side pagination with configurable page size
- ✅ **Add Sample Form** - Modal form for adding new samples
- ✅ **Edit Sample Form** - Modal form for editing existing samples
- ✅ **Inline Status Update** - Direct status updates with dropdown

### Bonus Features
- ✅ **Dark/Light Mode Toggle** - Theme switching capability
- ✅ **Optimistic UI Updates** - Instant feedback for user actions
- ✅ **Reusable Components** - Modular component architecture

**#Screenshots**
  
  .![image](https://github.com/user-attachments/assets/f0b93f82-b493-4bcf-8dc3-98c6fe436fca)
  
  ![image](https://github.com/user-attachments/assets/7a73b85b-79ed-48cb-a3cd-5ed997e3109d)
  
  ![image](https://github.com/user-attachments/assets/a37d16c9-e186-4ed6-801c-fae7f17e9697)
  
  ![image](https://github.com/user-attachments/assets/72ba4e52-2c70-4b90-b8a8-c5d0319f2a8f)
  
  ![image](https://github.com/user-attachments/assets/420b9d5d-7eb6-4154-9193-ec09480adf0d)
  
  ![image](https://github.com/user-attachments/assets/f3d24bd8-7d43-4f6b-8b88-36c8ace38146)
  
  ![image](https://github.com/user-attachments/assets/f5527ec2-89de-4843-9f80-ba5adfdb109d)










## 🔮 Assumptions Made During Development

1.No backend/API integration; data is mocked and stored in local state.

2.All users have full CRUD permissions.

3.Sample ID is generated using UUIDs.

4.Status flow: Pending → Processing → Completed.

5.Collection date cannot be set in the future.

6.Sample types limited to: Blood, Urine, Tissue, Saliva, Plasma, Serum.

7.Search applies only to sample names (case-insensitive).













**👤 Developer:** Mayank Goel



