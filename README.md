# Payment Coding challenge

## Build Instructions:

- Create a project folder and initialize it with npm init -y or npm init -y.
- Install **React, TypeScript and Vite** as dependencies with 
        ```
        npm install react react-dom and npm install --dev @types/react @types/react-dom typescript vite @vitejs/plugin-react or npm install react react-dom and npm install --save-dev @types/react @types/react-dom typescript vite @vitejs/plugin-react.
        ```
- Create a *vite.config.ts* file
- Create a *tsconfig.json* file
- Intall Tailwind as dependency ```npm install tailwindcss```
- Create a tailwind.config.js file
- For testing install following libraries: 
        ```
        npm install --dev vitest @vitest/types @vitest/transformer @vitest/plugin-react @vitest/plugin-jsx @vitest/plugin-babel @vitest/plugin-typescript or npm install --save-dev vitest @vitest/types @vitest/transformer @vitest/plugin-react @vitest/plugin-jsx @vitest/plugin-babel @vitest/plugin-typescript
        ```
- Update jest config in vite.config.ts
- Create a test folder and create **.test** file
- Add a test script in the package.json
- Do ```npm run test``` to test the application

---

## Usage Instructions:

- Do ```npm run dev``` to start the application.
- There will be a "**Pay Now**" button and on clicking the button a Modal will be displayed with Payment Details.
- The Modal will have fields:
    - **To** => free text field, accept valid email address
    - **From** => a dropdown box with option [USD, INR]
    - **Amount** => Free positive numeric field
    - **Description** => optional field
    - **Submit Button** => To submit the payment

- Error will be displayed if validation fails for any field
- Submit button will not be enabled until all required fields are filled
- Once all mandatory fields are filled and submit button is clicked then an alert will be displayed with message "**Payment Successful!**"   

## Implementation if had more time:
- Responsive app
- Taken accessbility into account
- Made UI more robust
- Made Success and Error Dialogs

## Assumptions taken while development:
- Only for desktop users
- Only for few customers
- No routing needed


