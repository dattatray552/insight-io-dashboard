# Insight.IO Dashboard

A responsive robotics insight dashboard built with React, Vite, JavaScript, and Three.js. This project recreates a dashboard interface with system statistics, a simulated camera feed, and an interactive 3D point cloud viewer.

## Features

- **Dashboard Overview:** Displays key system statistics and status information.
- **Camera View:** Plays a local MP4 video as a simulated camera feed.
- **3D Point Cloud Viewer:** Loads a `.pcd` file and renders the point cloud using Three.js.
- **Interactive Controls:** Supports point cloud rotation and zooming.
- **Responsive Design:** Adapts the dashboard layout to different screen sizes.
- **Modern UI:** Uses reusable React components and Lucide icons.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Three.js
- Lucide React

## Project Structure

```text
insight-io-dashboard/
├── public/
│   └── assets/
│       ├── camera-demo.mp4
│       └── sample.pcd
├── screenshots/
│   └── dashboard.png
├── src/
│   ├── components/
│   │   ├── CameraView.jsx
│   │   ├── Header.jsx
│   │   ├── PointCloudView.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   └── StatusBar.jsx
│   ├── data/
│   │   └── dashboardData.js
│   ├── styles/
│   │   ├── components.css
│   │   ├── dashboard.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

## Installation and Setup

**1. Clone the repository**


git clone https://github.com/dattatray552/insight-io-dashboard.git



Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

**2. Navigate to the project directory**

```bash
cd insight-io-dashboard
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL shown in your terminal, usually:


http://localhost:5173


## Dashboard Screenshot

![Insight.IO Dashboard](screenshots/dashboard.png)

## Assets

The application uses local assets for its visualizations:

- `public/assets/camera-demo.mp4` — simulated camera video.
- `public/assets/sample.pcd` — point cloud data for the 3D viewer.

Ensure these files are present before running the application.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |

## Production Build

To create a production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

## Future Improvements

- Connect a real-time camera or robotics data stream.
- Integrate ROS data for live robot monitoring.
- Add dynamic charts and system performance metrics.
- Improve dashboard accessibility and mobile responsiveness.

## Author

Developed as a robotics dashboard implementation project for the ERIC Robotics assignment.

## License

This project was developed for educational and assessment purposes.
