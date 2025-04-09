from node: 18-alpine;

WORKIDR /app

COPY package*.json ./    
# it will copy all package.json file in app

RUN npm ci
# it will install all dependencies with same version as available in package.json(ci will take care of same version)

COPY . .
# it will copy all src file in app file

