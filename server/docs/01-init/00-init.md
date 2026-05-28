yarn install
docker compose up -d

yarn run prisma:push  
yarn run prisma:generate
yarn run prisma:studio

nest g res api/auth --no-spec
