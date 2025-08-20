#!/bin/bash
cd /home/kavia/workspace/code-generation/hostel-management-system-presentation-9051/slidev_frontend
npx run lint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
  exit 1
fi

