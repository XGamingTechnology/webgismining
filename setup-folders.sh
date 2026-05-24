#!/bin/bash

# Create directory structure
mkdir -p src/app
mkdir -p src/components/dashboard
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/hooks
mkdir -p src/utils
mkdir -p public

# Create files in app directory
touch src/app/layout.tsx
touch src/app/page.tsx
touch src/app/globals.css

# Create component files
touch src/components/sidebar.tsx

# Dashboard components
touch src/components/dashboard/stats-cards.tsx
touch src/components/dashboard/map-container.tsx
touch src/components/dashboard/asset-list.tsx
touch src/components/dashboard/detail-asset.tsx
touch src/components/dashboard/alert-panel.tsx
touch src/components/dashboard/analytics.tsx
touch src/components/dashboard/geofence.tsx
touch src/components/dashboard/reports.tsx

# UI components
touch src/components/ui/badge.tsx
touch src/components/ui/card.tsx
touch src/components/ui/button.tsx
touch src/components/ui/modal.tsx

# Lib files
touch src/lib/data.ts
touch src/lib/utils.ts
touch src/lib/constants.ts

# Types
touch src/types/index.ts
touch src/types/asset.ts
touch src/types/mapbox.d.ts

# Hooks
touch src/hooks/useAssets.ts
touch src/hooks/useGeofence.ts

# Utils
touch src/utils/helpers.ts
touch src/utils/formatters.ts

# Config files (if not exists)
touch next.config.js
touch tailwind.config.ts
touch tsconfig.json
touch .env.local
touch README.md

echo "✅ Folder structure created successfully!"
echo "📁 Structure:"
echo "src/"
echo "├── app/"
echo "│   ├── layout.tsx"
echo "│   ├── page.tsx"
echo "│   └── globals.css"
echo "├── components/"
echo "│   ├── sidebar.tsx"
echo "│   ├── dashboard/"
echo "│   │   ├── stats-cards.tsx"
echo "│   │   ├── map-container.tsx"
echo "│   │   ├── asset-list.tsx"
echo "│   │   ├── detail-asset.tsx"
echo "│   │   ├── alert-panel.tsx"
echo "│   │   ├── analytics.tsx"
echo "│   │   ├── geofence.tsx"
echo "│   │   └── reports.tsx"
echo "│   └── ui/"
echo "│       ├── badge.tsx"
echo "│       ├── card.tsx"
echo "│       ├── button.tsx"
echo "│       └── modal.tsx"
echo "├── lib/"
echo "│   ├── data.ts"
echo "│   ├── utils.ts"
echo "│   └── constants.ts"
echo "├── types/"
echo "│   ├── index.ts"
echo "│   ├── asset.ts"
echo "│   └── mapbox.d.ts"
echo "├── hooks/"
echo "│   ├── useAssets.ts"
echo "│   └── useGeofence.ts"
echo "├── utils/"
echo "│   ├── helpers.ts"
echo "│   └── formatters.ts"
echo "└── public/"