This is a simple application I created to demonstrate how to build full stack search using Next.js and Prisma. Please follow the below instructions to get the project up and running.

## Getting Started

### Install packages
```
npm i
```

### Run database migration
```
npx prisma migrate dev --name=init
```

### Seed the database with fake data (courtesy of ChatGPT)
```
npx prisma seed db
```

### Generate the Prisma client
```
npx prisma generate
```

### Start the development server
```
npm run dev
```
