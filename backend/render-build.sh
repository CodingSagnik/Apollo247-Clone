#!/bin/bash
# Install all dependencies including devDependencies
npm install --include=dev
# Run the TypeScript build
npm run build
