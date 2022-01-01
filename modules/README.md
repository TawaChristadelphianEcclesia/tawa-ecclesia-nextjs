the modules folder is for further folders grouping files related to specific features, e.g.:

/auth
    /api
        AuthAPI.ts
        AuthAPI.test.ts
    /components
        AuthForm.tsx
        AuthForm.test.tsx
    auth.ts

Add the code first to the common folder, and then once there's enough complexity for a folder in modules move it