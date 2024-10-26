# MoneyMap

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shcomprehensive, secure, and user-friendly expense trackeris almost ready ✨.

This app helps users monitor income and expenses, analyze spending habits, and gain control over their personal finances. Built with [**NestJS**]() [**Angular**]() and [**TypeORM**]() in [**Nx Monorepo**](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&amp;utm_medium=readme&amp;utm_campaign=nx_projects), this app offers modularized architecture, intuitive user interfaces, and powerful data visualization tools.

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/k7Fm96GVVj)


## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve frontend
npx nx serve backend
```

To create a production bundle:

```sh
npx nx build frontend
npx nx build backend
```

To see all available targets to run for a project, run:

```sh
npx nx show project frontend
npx nx show project backend
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

Use the plugin's generator to create new projects.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
npx nx g @nrwl/nest:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
npx nx g @nrwl/nest:lib mylib
```

## Expense Tracker Features
### Core Functionalities
1. User Registration & Authentication
    * Secure signup with automatic profile creation
    * JWT-based login with secure cookie storage
    * Encrypted password storage for user security

2. User Profile Management
    * Customizable profile with profile name, image, and address
    * Redirects to personalized dashboard upon login

3. Income & Expense Management
    * Record multiple income sources and categorize expenses
    * Track recurring income and expenses by month/year
    * Real-time budget insights by comparing income to expenses

4. Financial Reporting
    * Monthly and yearly summaries of income and expenses
    * Category-based breakdown for detailed analysis

5. Data Visualization
    * Charts for income vs. expenses and spending trends
    * Visual insights on spending patterns and budget goals

6. Advanced Settings
    * Multi-currency support for international users
    * Configurable notifications for income or budget alerts

7. Export & Import Options
    * Export financial data to CSV/Excel
    * Import data from other financial tools


## Technical Highlights
* Modular NestJS Architecture for scalability and maintenance
* Reusable Embedded Entities such as Address and Period
* Error Handling & Logging with Redis-backed error logging for monitoring
* CI/CD Integration using GitHub Actions for streamlined deployment

### Installation
Prerequisites
* Node.js (v14+ recommended)
* PostgreSQL database

### Setup
1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

2. Install dependencies
```bash
npm install
```
3. Set up environment variables
Create a .env file in the root directory with the following:

```plaintext
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=yourUsername
DATABASE_PASSWORD=yourPassword
DATABASE_NAME=expense_tracker
JWT_SECRET=yourSecretKey
```
4. Run database migrations

```bash
npm run migration:run
```
Start the application

```bash
nx serve backend
nx serve ui -o
```
Access the application
Visit http://localhost:4200 in your browser.

### Fork the repository
1. Create a new feature branch (git checkout -b feature-branch)
2. Commit your changes (git commit -m 'Add new feature')
3. Push to the branch (git push origin feature-branch)
4. Open a pull request

### License
This project is licensed under the MIT License. See LICENSE for more details.